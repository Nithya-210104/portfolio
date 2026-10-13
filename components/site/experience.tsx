"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Building2,
  Calendar,
  CheckCircle2,
  MapPin,
  TrendingUp,
} from "lucide-react";

import { SectionHeading } from "@/components/site/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { EXPERIENCE } from "@/lib/constants";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell section-spacing">
      <SectionHeading
        eyebrow="Experience"
        title="Professional Engineering Journey"
        description="Hands-on experience developing and deploying cloud-native applications, multitenant architectures, and automated pipelines."
      />

      <div className="relative pl-0 md:pl-6 space-y-8">
        {EXPERIENCE.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="glass-card rounded-2xl border-slate-800/80 overflow-hidden relative">
              {/* Top gradient highlight */}
              <div className="h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500" />

              <CardContent className="p-6 sm:p-8 space-y-6">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="p-1.5 rounded-lg bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                        <Building2 size={16} />
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                        {exp.company}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base font-semibold gradient-text-cyan pl-8">
                      {exp.role}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 pl-8 sm:pl-0">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-xs font-medium">
                      <Calendar size={13} /> {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs">
                      <MapPin size={13} /> {exp.location}
                    </span>
                  </div>
                </div>

                {/* Impact Metric Callout */}
                <div className="flex flex-wrap items-center gap-3 p-3.5 rounded-xl bg-slate-900/50 border border-cyan-400/15">
                  <div className="p-1.5 rounded-lg bg-cyan-400/10 text-cyan-300">
                    <TrendingUp size={16} />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 font-medium">
                    <strong className="text-cyan-300 font-semibold">Key Impact:</strong> Automated CI/CD deployment pipelines cutting manual release effort by &gt;60%, and engineered strict MongoDB tenant data isolation.
                  </p>
                </div>

                {/* Responsibilities list */}
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Core Responsibilities & Delivery
                  </h4>
                  <ul className="grid gap-2.5">
                    {exp.achievements.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-xs sm:text-sm text-slate-300/90 leading-relaxed"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-cyan-400 shrink-0 mt-0.5"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack used */}
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Technologies & Environments
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-lg bg-slate-800/60 text-slate-300 border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
