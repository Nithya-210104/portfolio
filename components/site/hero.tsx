"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PROFILE } from "@/lib/constants";

export function HeroSection() {
  return (
    <section id="home" className="section-shell section-spacing pt-36">
      <motion.div
        className="glass rounded-3xl p-8 md:p-12"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
            {PROFILE.location}
          </p>
          <div className="space-y-3">
            <h1 className="font-heading text-4xl font-semibold md:text-6xl">
              {PROFILE.name}
            </h1>
            <p className="gradient-text text-lg md:text-2xl">{PROFILE.role}</p>
            <p className="max-w-2xl text-slate-300/90">{PROFILE.tagline}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#projects">
              <Button size="lg">
                View Projects <ArrowRight size={18} />
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" size="lg">
                Contact Me <Mail size={18} />
              </Button>
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <MapPin size={15} /> {PROFILE.location}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
