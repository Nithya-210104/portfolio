import { Code2, Globe, SquareUserRound } from "lucide-react";

import { PROFILE } from "@/lib/constants";

const socials = [
  { label: "GitHub", href: "#", icon: Code2 },
  { label: "LinkedIn", href: "#", icon: SquareUserRound },
  { label: "Website", href: "#", icon: Globe },
];

export function Footer() {
  return (
    <footer className="section-shell pb-8">
      <div className="glass flex flex-col items-center justify-between gap-4 rounded-2xl px-6 py-6 text-sm text-slate-300 md:flex-row">
        <p>Copyright {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
        <div className="flex items-center gap-3">
          {socials.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="rounded-lg border border-slate-400/20 p-2 text-slate-300 transition-colors hover:text-cyan-200"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
