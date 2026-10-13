"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, CheckCircle, GraduationCap, MapPin } from "lucide-react";

import { SectionHeading } from "@/components/site/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CERTIFICATIONS, EDUCATION } from "@/lib/constants";

export function EducationAndCertificationsSection() {
  return (
    <section id="education" className="section-shell section-spacing">
      <SectionHeading
        eyebrow="Credentials"
        title="Education & Technical Certifications"
        description="Formal computer systems education paired with continuous skill verification."
      />

      <div className="grid gap-6 lg:grid-cols-12">
        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-5"
        >
          <Card className="glass-card h-full flex flex-col justify-between border-slate-800/80 rounded-2xl">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                  <GraduationCap size={22} />
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-400/15 text-cyan-300 border border-cyan-400/30">
                  CGPA: {EDUCATION.cgpa}
                </span>
              </div>

              <CardTitle className="font-heading text-xl font-bold text-white">
                {EDUCATION.institution}
              </CardTitle>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                <MapPin size={13} className="text-cyan-400" />
                <span>{EDUCATION.location}</span>
              </div>
            </CardHeader>

            <CardContent className="space-y-4 pt-0">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-xs font-bold text-slate-100">
                  {EDUCATION.degree}
                </div>
                <div className="text-[11px] text-cyan-300 mt-0.5">
                  {EDUCATION.graduation}
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Academic Focus
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  {EDUCATION.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 leading-relaxed">
                      <CheckCircle size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Certifications Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="lg:col-span-7 flex flex-col gap-4"
        >
          {CERTIFICATIONS.map((cert) => (
            <Card
              key={cert.title}
              className="glass-card border-slate-800/80 rounded-2xl hover:border-cyan-400/30 transition-all"
            >
              <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      <Award size={16} />
                    </span>
                    <h4 className="font-heading text-base font-bold text-white">
                      {cert.title}
                    </h4>
                  </div>
                  <p className="text-xs text-cyan-300 font-medium pl-8">
                    Issued by: {cert.issuer}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pl-8 pt-1">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 self-end sm:self-center">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-3 py-1.5 rounded-full bg-emerald-400/10 text-emerald-300 border border-emerald-400/20">
                    <CheckCircle size={12} /> Verified Skill
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
