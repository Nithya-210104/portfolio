"use client";

import { motion } from "framer-motion";
import { PROFILE } from "@/lib/constants";

export function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#040814]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.35, ease: "easeInOut" } }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative flex items-center justify-center">
          {/* Outer glowing pulsing ring */}
          <motion.div
            className="absolute h-16 w-16 rounded-full border border-cyan-400/20 bg-cyan-400/5"
            animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Rotating spinner */}
          <motion.div
            className="h-12 w-12 rounded-full border-2 border-slate-800 border-t-cyan-400 border-r-cyan-400"
            animate={{ rotate: 360 }}
            transition={{ duration: 0.85, ease: "linear", repeat: Infinity }}
          />
        </div>

        <div className="text-center space-y-1">
          <p className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            {PROFILE.name}
          </p>
          <p className="text-[10px] text-slate-400 font-medium">
            {PROFILE.shortRole}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
