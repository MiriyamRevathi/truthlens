import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_CONFIG } from "./apiConfig";

const genAI = new GoogleGenerativeAI(API_CONFIG.GEMINI_API_KEY);

// 🔹 Step 1: Optional Scaledown processing
async function processWithScaledown(text: string) {
  try {
    const res = await fetch(API_CONFIG.SCALEDOWN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_CONFIG.SCALEDOWN_API_KEY}`,
      },
      body: JSON.stringify({ text }),
    });

    const data = await res.json();
    return data?.output || text;
  } catch (error) {
    console.log("Scaledown failed, using original text");
    return text;
  }
}

// 🔹 Step 2: Gemini Fact Checking
export async function checkFact(text: string) {
  try {
    const processedText = await processWithScaledown(text);

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `
Analyze the following claim:

"${processedText}"

Respond ONLY in JSON format like this:

{
  "verdict": "TRUE or FALSE or MISLEADING",
  "explanation": "short explanation"
}
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const output = response.text();

    let parsed;

    try {
      parsed = JSON.parse(output);
    } catch {
      parsed = {
        verdict: "UNKNOWN",
        explanation: output,
      };
    }

    return parsed;

  } catch (error) {
    return {
      verdict: "ERROR",
      explanation: "Something went wrong",
    };
  }
}