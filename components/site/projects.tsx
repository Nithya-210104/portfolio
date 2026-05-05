"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import { SectionHeading } from "@/components/site/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PROJECTS } from "@/lib/constants";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell section-spacing">
      <SectionHeading
        eyebrow="Projects"
        title="Recent work"
        description="Selected projects built with modern technologies and production-focused architecture."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
          >
            <Card className="h-full transition-colors hover:border-cyan-300/40">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex h-full flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="mt-auto inline-flex items-center gap-2 text-sm text-cyan-200 hover:text-cyan-100"
                  target={project.link.startsWith("http") ? "_blank" : undefined}
                  rel={project.link.startsWith("http") ? "noreferrer" : undefined}
                >
                  View project <ExternalLink size={16} />
                </a>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
