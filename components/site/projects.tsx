"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Code2,
  ExternalLink,
  Globe,
  Layers,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";

import { SectionHeading } from "@/components/site/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PROJECTS } from "@/lib/constants";

export function ProjectsSection() {
  const [expandedId, setExpandedId] = useState<string | null>(PROJECTS[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="section-shell section-spacing">
      <SectionHeading
        eyebrow="Key Projects"
        title="Production Systems, SaaS Architectures & AI Applications"
        description="Engineered for scalability, strict data isolation, zero-downtime deployment, and grounded retrieval."
      />

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
        {PROJECTS.map((project, index) => {
          const isExpanded = expandedId === project.id;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <Card className="glass-card flex-1 flex flex-col justify-between border-slate-800/80 hover:border-cyan-400/40 transition-all rounded-2xl overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300">
                      {project.category}
                    </span>
                    {project.isLive ? (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Live in Production
                      </span>
                    ) : (
                      <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300">
                        Production System
                      </span>
                    )}
                  </div>

                  <CardTitle className="font-heading text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm text-slate-300/90 mt-1 line-clamp-2">
                    {project.tagline}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex flex-col gap-4 flex-1 justify-between pt-0">
                  {/* Metrics Badges */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    {project.metrics.slice(0, 2).map((metric) => (
                      <div
                        key={metric.label}
                        className="p-2 rounded-xl bg-slate-900/60 border border-slate-800 text-center"
                      >
                        <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                          {metric.label}
                        </div>
                        <div className="text-xs font-semibold text-cyan-300 mt-0.5 truncate">
                          {metric.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Architecture Details */}
                  <div className="pt-2 border-t border-slate-800/80">
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="w-full flex items-center justify-between text-xs text-slate-300 hover:text-cyan-300 py-1 transition-colors"
                    >
                      <span className="font-medium">
                        {isExpanded ? "Hide Architecture Details" : "View Architecture Details"}
                      </span>
                      {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden pt-2"
                        >
                          <ul className="space-y-2 text-xs text-slate-300 bg-slate-950/40 p-3 rounded-xl border border-slate-800/80">
                            {project.highlights.map((bullet, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-2 leading-relaxed">
                                <CheckCircle2 size={13} className="text-cyan-400 shrink-0 mt-0.5" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Action Link Button */}
                  <div className="pt-3 flex items-center justify-between">
                    {project.isLive ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-cyan-400 text-slate-950 hover:bg-cyan-300 transition-colors shadow-sm shadow-cyan-400/20"
                      >
                        Visit Live Portal <ArrowUpRight size={14} />
                      </a>
                    ) : (
                      <a
                        href={project.link === "#" ? "#contact" : project.link}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl border border-slate-700 bg-slate-900/60 text-slate-200 hover:text-white hover:border-cyan-400/40 transition-colors"
                      >
                        {project.link.startsWith("http") ? "View Repository" : "Request Demo"}
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
