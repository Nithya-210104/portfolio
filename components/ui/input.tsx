import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "flex h-11 w-full rounded-xl border border-slate-400/30 bg-white/5 px-4 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-cyan-300/50",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
