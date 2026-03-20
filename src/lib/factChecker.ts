import type { SupportedLanguage } from "./translations";
import { API_CONFIG } from "./apiConfig";
import { GoogleGenerativeAI } from "@google/generative-ai";

export type Verdict = "TRUE" | "FALSE" | "UNVERIFIABLE";

export interface FactCheckResult {
  verdict: Verdict;
  explanation: string;
  confidence: number;
  language: SupportedLanguage;
  originalInput: string;
}

// ✅ Debug (optional)
console.log("GEMINI KEY:", API_CONFIG.GEMINI_API_KEY);

// ✅ Init Gemini
const genAI = new GoogleGenerativeAI(API_CONFIG.GEMINI_API_KEY);

// ✅ ScaleDown API
async function compressWithScaleDown(claim: string): Promise<string> {
  try {
    const response = await fetch(API_CONFIG.SCALEDOWN_URL, {
      method: "POST",
      headers: {
        "x-api-key": API_CONFIG.SCALEDOWN_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        context:
          "You are a fact-checking assistant. Analyze the following claim for truthfulness.",
        prompt: claim,
        scaledown: { rate: "auto" },
      }),
    });

    const data = await response.json();
    return data?.compressed || data?.result || claim;
  } catch (e) {
    console.warn("ScaleDown failed, using raw claim");
    return claim;
  }
}

// ✅ Gemini AI (FINAL FIXED)
async function analyzeWithGemini(
  claim: string,
  compressedContext: string,
  targetLanguage: SupportedLanguage
): Promise<{ verdict: Verdict; explanation: string; confidence: number }> {
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash", // ✅ correct model
  });

  const prompt = `
You are TruthLens, an expert AI fact-checker.

Analyze the claim and respond ONLY in JSON:

{
  "verdict": "TRUE or FALSE or UNVERIFIABLE",
  "explanation": "one clear sentence in ${targetLanguage}",
  "confidence": 0.0 to 1.0
}

Claim: "${claim}"

Context: ${compressedContext}
`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  let text = response.text().trim();

  // 🧹 Clean markdown
  text = text.replace(/```json/g, "").replace(/```/g, "").trim();

  let parsed;

  try {
    parsed = JSON.parse(text);
  } catch {
    return {
      verdict: "UNVERIFIABLE",
      explanation: text,
      confidence: 0.6,
    };
  }

  const verdict: Verdict = ["TRUE", "FALSE", "UNVERIFIABLE"].includes(parsed.verdict)
    ? parsed.verdict
    : "UNVERIFIABLE";

  return {
    verdict,
    explanation: parsed.explanation || "No explanation provided.",
    confidence:
      typeof parsed.confidence === "number"
        ? Math.min(1, Math.max(0, parsed.confidence))
        : 0.7,
  };
}

// ✅ Main function
export async function checkFact(
  post: string,
  language: SupportedLanguage = "English"
): Promise<FactCheckResult> {
  let compressedContext: string;

  try {
    compressedContext = await compressWithScaleDown(post);
  } catch {
    compressedContext = post;
  }

  const result = await analyzeWithGemini(post, compressedContext, language);

  return {
    verdict: result.verdict,
    explanation: result.explanation,
    confidence: result.confidence,
    language,
    originalInput: post,
  };
}