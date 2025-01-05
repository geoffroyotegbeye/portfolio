import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-primary/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Développeur Web Fullstack
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Spécialisé dans la création d'applications web modernes et performantes
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="#portfolio">Voir mes projets</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#contact">Me contacter</Link>
          </Button>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link href="#about">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </Link>
        </div>
      </div>
    </section>
  );
}