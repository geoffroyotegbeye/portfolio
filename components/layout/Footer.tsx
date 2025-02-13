import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Portfolio</h3>
            <p className="text-muted-foreground">
              Développeur Web Fullstack passionné par la création d'applications web modernes et performantes.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank">
                  Compétences
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-4">
              <Link href="https://github.com/geoffroyotegbeye" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors" target="_blank">
                <Github className="h-5 w-5" />
                GitHub
              </Link>
              <Link href="https://bj.linkedin.com/in/geoffroy-otegbeye-287038247" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors" target="_blank">
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </Link>
              <Link href="mailto:otegbeyegeoffroy@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors" target="_blank">
                <Mail className="h-5 w-5" />
                otegbeyegeoffroy@gmail.com
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Portfolio. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
