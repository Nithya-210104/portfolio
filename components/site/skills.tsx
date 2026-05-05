import { SectionHeading } from "@/components/site/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SKILLS } from "@/lib/constants";

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell section-spacing">
      <SectionHeading
        eyebrow="Skills"
        title="Modern stack across web, mobile, and backend"
      />
      <div className="grid gap-4 md:grid-cols-2">
        {Object.entries(SKILLS).map(([category, skills]) => (
          <Card key={category}>
            <CardHeader>
              <CardTitle>{category}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
