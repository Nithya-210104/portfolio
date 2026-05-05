import { CheckCircle2 } from "lucide-react";

import { SectionHeading } from "@/components/site/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { PROFILE } from "@/lib/constants";

const highlights = [
  "Full-stack development",
  "API integration",
  "Deployment (Linux, Nginx, PM2)",
];

export function AboutSection() {
  return (
    <section id="about" className="section-shell section-spacing">
      <SectionHeading
        eyebrow="About"
        title="Engineer focused on reliable product delivery"
        description={PROFILE.about}
      />
      <Card>
        <CardContent className="grid gap-4 pt-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-slate-400/20 bg-slate-900/50 p-4 text-sm text-slate-200"
            >
              <div className="mb-2 flex items-center gap-2 text-cyan-300">
                <CheckCircle2 size={16} />
                Highlight
              </div>
              <p>{item}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
