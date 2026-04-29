import { Github, Linkedin, Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Miandrisoa Hoby Randriatsarafara. {t.footer.tagline}</p>
        <div className="flex items-center gap-3">
          <a href="https://github.com/bihoux" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-lg hover:bg-muted/50 hover:text-foreground transition"><Github className="h-4 w-4" /></a>
          <a href="https://linkedin.com/in/hoby-ai-computer-vision" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg hover:bg-muted/50 hover:text-foreground transition"><Linkedin className="h-4 w-4" /></a>
          <a href="mailto:miandriasoahobyr@gmail.com" aria-label="Email" className="p-2 rounded-lg hover:bg-muted/50 hover:text-foreground transition"><Mail className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}
