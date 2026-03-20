import { motion } from "framer-motion";

export function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center gap-4 py-8">
      <motion.div
        className="w-10 h-10 rounded-full border-2 border-primary/30 border-t-primary"
        animate={{ rotate: 360 }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
      />
      <motion.p
        className="text-muted-foreground text-sm font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Analyzing claim…
      </motion.p>
    </div>
  );
}
