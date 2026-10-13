"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Mail, MapPin, Sparkles } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { PROFILE } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="home" className="section-shell section-spacing pt-32 md:pt-40 relative">
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <motion.div
        className="glass-card rounded-3xl p-6 sm:p-10 md:p-14 relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Subtle top subtle border glow accent */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60" />

        <div className="space-y-8">
          {/* Status Badge & Location */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 text-xs font-medium tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              {PROFILE.availability}
            </div>

            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
              <MapPin size={14} className="text-cyan-400" />
              <span>{PROFILE.location}</span>
            </div>
          </div>

          {/* Heading and Intro */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/90">
              <Sparkles size={14} /> Full Stack · Cloud & DevOps · Mobile
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              Hi, I&apos;m{" "}
              <span className="gradient-text">{PROFILE.name}</span>
            </h1>

            <p className="text-lg sm:text-xl font-medium text-slate-200 max-w-3xl leading-relaxed">
              {PROFILE.tagline}
            </p>

            <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
              {PROFILE.summary}
            </p>
          </div>

          {/* Call to Actions & Social Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a href="#projects">
              <Button size="lg" className="shadow-lg shadow-cyan-500/20 font-semibold gap-2">
                View Projects <ArrowRight size={18} />
              </Button>
            </a>

            <a href="#contact">
              <Button variant="outline" size="lg" className="font-semibold gap-2">
                Contact Me <Mail size={18} />
              </Button>
            </a>

            <div className="flex items-center gap-2 pl-1">
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl border border-slate-700/60 bg-slate-900/60 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/40 transition-colors"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon size={18} />
              </a>

              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl border border-slate-700/60 bg-slate-900/60 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/40 transition-colors"
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <GitHubIcon size={18} />
              </a>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-slate-800/80">
            {PROFILE.stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                className="p-3.5 rounded-2xl bg-slate-900/40 border border-slate-800/60 hover:border-cyan-500/30 transition-colors"
              >
                <div className="font-heading text-2xl sm:text-3xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-slate-200 mt-0.5">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400">
                  {stat.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
