import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Alternance en Développement Web Full-Stack",
    company: "VIPP INTERSTIS",
    period: "Avril 2023 - Décembre 2024",
    description: [
      "Développement d'une plateforme de Call Center avec Vue.js",
      "Refonte complète du site corporate avec Vue.js et Laravel",
      "Création d'une plateforme de formation en ligne",
      "Développement d'une application pour casque à conduction osseuse avec Nuxt.js",
      "Création d'un blog sur la gestion financière"
    ],
    technologies: ["Vue.js", "Nuxt.js", "Laravel", "TypeScript", "MySQL"],
    projects: [
      {
        name: "VIPP INTERSTIS",
        url: "https://www.vippinterstis.com/"
      },
      {
        name: "Alta Voce",
        url: "https://alta-voce.tech/"
      },
      {
        name: "Je Dépense Trop",
        url: "https://jedepensetrop.fr/"
      }
    ]
  },
  {
    title: "Formation Bootcamp",
    company: "HIGHFIVE UNIVERSITY",
    period: "Août 2022 - Mars 2023",
    description: [
      "Apprentissage intensif des technologies web, mobile et IA",
      "Réalisation de projets concrets en équipe",
      "Maîtrise des concepts fondamentaux du développement"
    ],
    technologies: ["JavaScript", "Python", "React", "Node.js", "MongoDB"],
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Parcours professionnel</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription>{exp.company}</CardDescription>
                  </div>
                  <Badge variant="secondary">{exp.period}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                {exp.projects && (
                  <div className="mb-4">
                    <p className="font-medium mb-2">Projets :</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.projects.map((project) => (
                        <a
                          key={project.name}
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {project.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}