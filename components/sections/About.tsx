import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">À propos de moi</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="/portfolio.jpeg"
              alt="Geoffroy Otegbeye"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Passionné par le développement logiciel, j'ai réussi ma reconversion d'un BTS Banque et Finance au métier de développeur full-stack. Grâce à ma rigueur analytique, ma créativité et mon aisance dans le travail en équipe, j'excelle dans la résolution de problèmes.
            </p>
            <p className="text-lg text-muted-foreground">
              Après une expérience enrichissante en alternance, j'allie innovation et technologie pour concevoir des solutions impactantes. Curieux et passionné de veille technologique, je continue à développer mes compétences pour contribuer à des projets ambitieux.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-2xl mb-2">2+</h3>
                  <p className="text-muted-foreground">Années d'expérience</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-2xl mb-2">5+</h3>
                  <p className="text-muted-foreground">Projets majeurs</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}