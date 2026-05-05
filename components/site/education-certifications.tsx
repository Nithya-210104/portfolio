import { GraduationCap } from "lucide-react";

import { SectionHeading } from "@/components/site/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CERTIFICATIONS } from "@/lib/constants";

export function EducationAndCertificationsSection() {
  return (
    <section id="education" className="section-shell section-spacing">
      <SectionHeading eyebrow="Education" title="Academic background and certifications" />
      <div className="grid gap-5 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap size={20} />
              PSG College of Technology
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-slate-200">
            <p>B.Sc Computer Systems and Design</p>
            <p>CGPA: 7.8</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-slate-200">
              {CERTIFICATIONS.map((certification) => (
                <li key={certification} className="list-inside list-disc">
                  {certification}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
