"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BrainCircuit,
  Cloud,
  Database,
  Layers,
  Server,
  Smartphone,
  Sparkles,
  Wrench,
} from "lucide-react";

import { SectionHeading } from "@/components/site/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SKILL_CATEGORIES, SkillCategory } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Sparkles: BrainCircuit,
  Cloud: Cloud,
  Smartphone: Smartphone,
  Server: Server,
  Database: Database,
  Workflow: Wrench,
};

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = Object.keys(SKILL_CATEGORIES) as SkillCategory[];
  const filterOptions = ["All", ...categories];

  const displayedCategories =
    selectedCategory === "All"
      ? categories
      : categories.filter((c) => c === selectedCategory);

  return (
    <section id="skills" className="section-shell section-spacing">
      <SectionHeading
        eyebrow="Skills & Stack"
        title="Comprehensive Tech Stack across Frontend, Backend, AI & DevOps"
        description="Production-tested tools and frameworks used to engineer, secure, deploy, and scale high-performance applications."
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {filterOptions.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                isActive
                  ? "bg-cyan-400 text-slate-950 font-semibold shadow-md shadow-cyan-400/20"
                  : "bg-slate-900/60 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid of Categories */}
      <motion.div layout className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {displayedCategories.map((category) => {
            const data = SKILL_CATEGORIES[category];
            const Icon = iconMap[data.iconName] || Layers;

            return (
              <motion.div
                key={category}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="glass-card h-full flex flex-col justify-between border-slate-800/80 hover:border-cyan-400/30">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-cyan-400/10 text-cyan-300 border border-cyan-400/20 shrink-0">
                        <Icon size={20} />
                      </div>
                      <div>
                        <CardTitle className="text-base font-semibold text-white">
                          {category}
                        </CardTitle>
                        <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                          {data.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {data.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center text-xs px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-200 border border-slate-700/60 hover:border-cyan-400/40 hover:text-cyan-200 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
