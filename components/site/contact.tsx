"use client";

import { Mail, Phone } from "lucide-react";

import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PROFILE } from "@/lib/constants";

export function ContactSection() {
  return (
    <section id="contact" className="section-shell section-spacing">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something impactful"
        description="Feel free to reach out for collaborations, freelance projects, or full-time opportunities."
      />
      <div className="grid gap-5 md:grid-cols-2">
        <Card>
          <CardContent className="space-y-4 pt-6">
            <a
              href={`mailto:${PROFILE.email}`}
              className="flex items-center gap-3 rounded-xl border border-slate-400/20 bg-slate-900/40 p-4 text-slate-200"
            >
              <Mail size={18} className="text-cyan-300" />
              {PROFILE.email}
            </a>
            <div className="flex items-center gap-3 rounded-xl border border-slate-400/20 bg-slate-900/40 p-4 text-slate-200">
              <Phone size={18} className="text-cyan-300" />
              {PROFILE.phone}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <form className="space-y-4">
              <Input placeholder="Your Name" required />
              <Input type="email" placeholder="Your Email" required />
              <Textarea placeholder="Your Message" required />
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
