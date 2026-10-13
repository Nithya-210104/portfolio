"use client";

import { Mail, Phone } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { PROFILE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="section-shell pb-12 pt-8">
      <div className="glass-card flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl p-6 sm:p-8 border-slate-800/80">
        <div className="space-y-1 text-center md:text-left">
          <p className="font-heading font-semibold text-white text-sm">
            {PROFILE.name} · {PROFILE.shortRole}
          </p>
          <p className="text-xs text-slate-400">
            {PROFILE.location} · {PROFILE.email}
          </p>
          <p className="text-[11px] text-slate-400">
            © {new Date().getFullYear()} Nithya Gopalsamy. Crafted with Next.js & Tailwind CSS.
          </p>
        </div>

        {/* Social and Contact Quick Links */}
        <div className="flex items-center gap-2.5">
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/30 transition-colors"
          >
            <LinkedInIcon size={18} />
          </a>

          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/30 transition-colors"
          >
            <GitHubIcon size={18} />
          </a>

          <a
            href={`mailto:${PROFILE.email}`}
            aria-label="Email Nithya"
            className="p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/30 transition-colors"
          >
            <Mail size={18} />
          </a>

          <a
            href={`tel:${PROFILE.phoneRaw}`}
            aria-label="Call Nithya"
            className="p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/30 transition-colors"
          >
            <Phone size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
