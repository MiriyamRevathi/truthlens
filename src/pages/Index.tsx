import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Shield, Sparkles, Globe } from "lucide-react";
import { checkFact, type FactCheckResult } from "@/lib/factChecker";
import { LANGUAGES, type SupportedLanguage } from "@/lib/translations";
import { VerdictCard } from "@/components/VerdictCard";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Index() {
  const [post, setPost] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<FactCheckResult | null>(null);
  const [language, setLanguage] = useState<SupportedLanguage>("English");
  const { toast } = useToast();

  const handleCheck = async () => {
    const trimmed = post.trim();
    if (!trimmed) {
      toast({ title: "Empty input", description: "Please paste a social media post to fact-check.", variant: "destructive" });
      return;
    }
    setLoading(true);
    setResult(null);
    try {
      const res = await checkFact(trimmed, language);
      setResult(res);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      toast({ title: "Error", description: message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-10 bg-background/80">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-3">
          <Shield className="w-6 h-6 text-primary" />
          <span className="text-lg font-bold font-heading text-foreground">TruthLens</span>
          <span className="text-xs font-mono text-muted-foreground ml-1">v1.1</span>
          <div className="ml-auto flex items-center gap-2">
            <Globe className="w-4 h-4 text-muted-foreground" />
            <Select value={language} onValueChange={(v) => setLanguage(v as SupportedLanguage)}>
              <SelectTrigger className="w-[140px] h-8 text-xs bg-card border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {LANGUAGES.map((lang) => (
                  <SelectItem key={lang} value={lang} className="text-xs">
                    {lang}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-start px-4 pt-16 md:pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-mono mb-6">
            <Sparkles className="w-3 h-3" /> AI-Powered Multilingual Fact Checking
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-4 tracking-tight">
            Verify Before You Share
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-lg mx-auto">
            Paste any post in any language. Get fact-check results in your preferred language.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="w-full max-w-2xl mb-8"
        >
          <div className="relative">
            <textarea
              value={post}
              onChange={(e) => setPost(e.target.value)}
              placeholder='Paste a post in any language… e.g. "The Earth is flat" or "భూమి చదునుగా ఉంది"'
              className="w-full min-h-[140px] bg-card border border-border rounded-xl p-4 pr-4 text-foreground placeholder:text-muted-foreground/50 resize-none focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all text-sm md:text-base"
              onKeyDown={(e) => {
                if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) handleCheck();
              }}
            />
          </div>
          <div className="flex items-center justify-between mt-3">
            <span className="text-xs text-muted-foreground font-mono">
              {post.length > 0 ? `${post.length} chars` : "⌘ + Enter to check"}
            </span>
            <button
              onClick={handleCheck}
              disabled={loading}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold text-sm hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Search className="w-4 h-4" />
              {loading ? "Checking…" : "Check Fact"}
            </button>
          </div>
        </motion.div>

        {loading && <LoadingSpinner />}
        {result && !loading && <VerdictCard result={result} />}

        {!result && !loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="w-full max-w-2xl mt-4"
          >
            <p className="text-xs text-muted-foreground font-mono mb-3">Try an example:</p>
            <div className="flex flex-wrap gap-2">
              {[
                "The Earth is flat",
                "Honey never expires",
                "5G causes COVID-19",
                "భూమి చదునుగా ఉంది",
                "शहद कभी खराब नहीं होता",
                "Octopuses have three hearts",
              ].map((example) => (
                <button
                  key={example}
                  onClick={() => setPost(example)}
                  className="text-xs bg-secondary text-secondary-foreground px-3 py-1.5 rounded-lg hover:bg-secondary/80 transition-colors"
                >
                  {example}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </main>

      <footer className="border-t border-border/50 py-4">
        <p className="text-center text-xs text-muted-foreground font-mono">
          TruthLens uses AI pattern matching. Supports English, Telugu, Hindi, Tamil & Bengali.
        </p>
      </footer>
    </div>
  );
}
