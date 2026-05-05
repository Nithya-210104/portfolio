"use client";

import { motion } from "framer-motion";

import { PROFILE } from "@/lib/constants";

export function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-70 flex items-center justify-center bg-[#050816]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <div className="flex flex-col items-center gap-5">
        <motion.div
          className="h-12 w-12 rounded-full border-2 border-cyan-300/30 border-t-cyan-300"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
        />
        <p className="font-heading text-sm uppercase tracking-[0.28em] text-slate-300">
          {PROFILE.name}
        </p>
      </div>
    </motion.div>
  );
}
