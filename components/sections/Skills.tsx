import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "Vue.js/Nuxt.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Angular", level: 80 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Laravel/PHP", level: 85 },
      { name: "Node.js/Nest.js", level: 80 },
      { name: "Python/Django", level: 75 },
      { name: "Spring Boot", level: 70 },
    ],
  },
  {
    category: "DevOps & Outils",
    items: [
      { name: "Git/GitHub/GitLab", level: 90 },
      { name: "Docker", level: 75 },
      { name: "MySQL/PostgreSQL", level: 85 },
      { name: "MongoDB", level: 70 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Compétences</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((category) => (
            <Card key={category.category}>
              <CardHeader>
                <CardTitle>{category.category}</CardTitle>
                <CardDescription>Technologies maîtrisées</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}