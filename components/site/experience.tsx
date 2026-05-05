import { BriefcaseBusiness } from "lucide-react";

import { SectionHeading } from "@/components/site/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const responsibilities = [
  "Built web and mobile applications for internal and client workflows.",
  "Integrated APIs for timesheets, sustainability, and operational tools.",
  "Handled deployment and maintenance on VPS environments.",
];

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell section-spacing">
      <SectionHeading eyebrow="Experience" title="Professional journey" />
      <Card>
        <CardHeader>
          <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
            <BriefcaseBusiness size={14} /> March 2025 - Present
          </div>
          <CardTitle>Software Engineer Trainee - Solidpro Engineering Pvt Ltd</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-slate-200">
            {responsibilities.map((item) => (
              <li key={item} className="list-inside list-disc">
                {item}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}
