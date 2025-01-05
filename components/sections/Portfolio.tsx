import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "VIPP INTERSTIS",
    description: "Refonte complète du site corporate, migration de WordPress vers une stack moderne Vue.js/Laravel",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    technologies: ["Vue.js", "Laravel", "MySQL", "Tailwind CSS"],
    url: "https://www.vippinterstis.com/",
  },
  {
    title: "Alta Voce",
    description: "Application de présentation pour un casque à conduction osseuse innovant",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800",
    technologies: ["Nuxt.js", "Laravel", "PostgreSQL", "TailwindCSS"],
    url: "https://alta-voce.tech/",
  },
  {
    title: "Je Dépense Trop",
    description: "Blog d'accompagnement sur la gestion financière avec CMS personnalisé",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=800",
    technologies: ["Nuxt.js", "Laravel", "MySQL", "Tailwind CSS"],
    url: "https://jedepensetrop.fr/",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Portfolio</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Voir le projet
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}