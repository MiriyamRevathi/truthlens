# TruthLens AI – Multilingual Fact Checker

## Overview

TruthLens AI is a web-based application designed to detect misinformation in social media and news content. Users can input text in multiple languages, and the system analyzes the claim, verifies its authenticity, and provides a clear verdict along with an explanation.

The platform leverages AI models and intelligent preprocessing to ensure accurate, fast, and user-friendly fact-checking.

---

## Features

* Multilingual support (English, Telugu, Hindi, Tamil, Bengali)
* AI-powered fact verification
* Fast preprocessing using ScaleDown API
* Context-aware reasoning using Gemini AI
* Clear verdicts: TRUE / FALSE / UNVERIFIABLE
* Confidence score for each result
* Clean and responsive user interface

---

## How It Works

1. User inputs a claim in any supported language
2. ScaleDown API processes and compresses the context
3. Gemini AI analyzes the claim
4. The system returns:

   * Verdict
   * Explanation
   * Confidence score

---

## Tech Stack

* Frontend: React.js, TypeScript, Vite
* Styling: Tailwind CSS
* AI Model: Google Gemini API
* Processing: ScaleDown API
* Other Tools: Framer Motion, Lucide Icons

---

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/MiriyamRevathi/truthlens.git
cd truthlens
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add environment variables

Create a `.env` file in the root directory:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key
VITE_SCALEDOWN_API_KEY=your_scaledown_api_key
```

### 4. Run the project

```bash
npm run dev
```

---

## Project Structure

```
src/
 ├── components/
 ├── hooks/
 ├── lib/
 │    ├── factChecker.ts
 │    ├── apiConfig.ts
 ├── pages/
 ├── public/
```

---

## Important Notes

* Do not expose API keys publicly
* Ensure `.env` is included in `.gitignore`
* Gemini API must be enabled in Google Cloud Console

---

## Future Improvements

* Real-time fact-checking from URLs
* Mobile application support
* Source citation for explanations
* Improved model accuracy
* Support for additional languages

---

## Team

* Miriyam Revathi

---

## Conclusion

TruthLens AI helps users verify information before sharing, reducing misinformation and promoting responsible digital communication.
