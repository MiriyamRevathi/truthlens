import { motion } from "framer-motion";
import { CheckCircle2, XCircle, AlertTriangle, Globe } from "lucide-react";
import type { FactCheckResult } from "@/lib/factChecker";
import { getVerdictLabel } from "@/lib/translations";

const config = {
  TRUE: {
    icon: CheckCircle2,
    bg: "bg-verdict-true-bg",
    text: "text-verdict-true",
    border: "border-verdict-true/30",
    glow: "glow-true",
  },
  FALSE: {
    icon: XCircle,
    bg: "bg-verdict-false-bg",
    text: "text-verdict-false",
    border: "border-verdict-false/30",
    glow: "glow-false",
  },
  UNVERIFIABLE: {
    icon: AlertTriangle,
    bg: "bg-verdict-unverifiable-bg",
    text: "text-verdict-unverifiable",
    border: "border-verdict-unverifiable/30",
    glow: "glow-unverifiable",
  },
};

export function VerdictCard({ result }: { result: FactCheckResult }) {
  const c = config[result.verdict];
  const Icon = c.icon;
  const label = getVerdictLabel(result.verdict, result.language);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full max-w-2xl mx-auto rounded-2xl border ${c.border} ${c.bg} ${c.glow} p-6 md:p-8`}
    >
      <div className="flex items-center gap-3 mb-4">
        <Icon className={`w-8 h-8 ${c.text}`} strokeWidth={2} />
        <span className={`text-2xl font-bold font-heading ${c.text}`}>{label}</span>
        <span className={`ml-auto text-sm font-mono ${c.text} opacity-70`}>
          {Math.round((result.confidence ?? 0.7) * 100)}%
        </span>
      </div>

      <p className="text-foreground/80 text-base leading-relaxed mb-4">
        {result.explanation}
      </p>

      <div className="flex items-center gap-2 pt-3 border-t border-border/30">
        <Globe className="w-3.5 h-3.5 text-muted-foreground" />
        <span className="text-xs font-mono text-muted-foreground">
          {result.language}
        </span>
      </div>
    </motion.div>
  );
}
