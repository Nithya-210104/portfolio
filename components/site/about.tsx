"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  CheckCircle2,
  GitBranch,
  Globe,
  Layers,
  Smartphone,
  Sparkles,
} from "lucide-react";

import { SectionHeading } from "@/components/site/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { PROFILE } from "@/lib/constants";

const engineeringPillars = [
  {
    icon: Layers,
    title: "Multitenant SaaS Architectures",
    description:
      "Specialized in architecting isolated data models with MongoDB using database-per-tenant and collection-level segregation, paired with per-tenant RBAC.",
    badge: "Scalability & Security",
  },
  {
    icon: Smartphone,
    title: "Cross-Platform Mobile Apps",
    description:
      "Crafting fluent mobile experiences on iOS and Android using React Native and NativeWind styling, integrating real-time API communications.",
    badge: "iOS & Android",
  },
  {
    icon: GitBranch,
    title: "CI/CD & Cloud Automation",
    description:
      "Building GitHub Actions pipelines for automated linting, tests, build checks, and zero-downtime cloud releases — reducing manual deployment overhead by >60%.",
    badge: "DevOps & Cloud",
  },
  {
    icon: BrainCircuit,
    title: "AI & Retrieval Pipelines (RAG)",
    description:
      "Integrating OpenAI embeddings, LangChain retrieval chains, and ChromaDB vector stores with strict context constraints to prevent hallucinations.",
    badge: "Applied AI / LLM",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="section-shell section-spacing">
      <SectionHeading
        eyebrow="About Me"
        title="Full Stack Software Engineer bridging Web, Mobile, and Cloud"
        description={PROFILE.summary}
      />

      <div className="grid gap-6 lg:grid-cols-12">
        {/* Left Column: Pillars */}
        <div className="lg:col-span-8 grid gap-4 sm:grid-cols-2">
          {engineeringPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                      <Icon size={22} />
                    </div>
                    <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {pillar.badge}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-300/80 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right Column: Strengths & Languages */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <Card className="glass-card border-slate-800/80">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-cyan-300">
                <Sparkles size={16} /> Key Strengths
              </div>
              <div className="space-y-3">
                {PROFILE.strengths.map((strength) => (
                  <div key={strength} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                    <CheckCircle2 size={15} className="text-cyan-400 shrink-0 mt-0.5" />
                    <span>{strength}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-slate-800/80 flex-1">
            <CardContent className="p-6 space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-cyan-300">
                <Globe size={16} /> Languages Spoken
              </div>
              <div className="space-y-2">
                {PROFILE.languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs"
                  >
                    <span className="font-semibold text-white">{lang.name}</span>
                    <span className="text-slate-400">{lang.level}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
