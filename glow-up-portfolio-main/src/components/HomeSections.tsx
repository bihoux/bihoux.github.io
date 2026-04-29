import { Link } from "@tanstack/react-router";
import { ArrowRight, Download, Github, Linkedin, Sparkles, Brain, Code2, Database, Server, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";
import avatar from "@/assets/avatar.webp";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10 grid-bg opacity-60" />
      <div className="mx-auto max-w-6xl px-4 pt-12 pb-20 md:pt-20 md:pb-28">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 items-center">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                {t.hero.status}
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-4xl md:text-6xl lg:text-[68px] font-bold leading-[1.05] tracking-tight">
                {t.hero.title_1} <span className="text-gradient">{t.hero.title_2}</span> {t.hero.title_3}
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-5 flex items-center gap-2 text-muted-foreground">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="font-mono text-sm md:text-base text-primary">{t.hero.role}</span>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
                {t.hero.intro}
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link to="/projects" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-95 transition">
                  {t.hero.cta_projects}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface/60 px-5 py-3 text-sm font-medium hover:bg-surface-elevated transition backdrop-blur">
                  {t.hero.cta_contact}
                </Link>
                <a
                  href="/CV_Miandrisoa_Hoby_RANDRIATSARAFARA.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-xl px-3 py-3 text-sm text-muted-foreground hover:text-foreground transition"
                >
                  <Download className="h-4 w-4" />
                  {t.hero.cta_cv}
                </a>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-10 flex items-center gap-5 text-muted-foreground">
                <a href="https://github.com/bihoux" target="_blank" rel="noreferrer" className="hover:text-foreground transition" aria-label="GitHub"><Github className="h-5 w-5" /></a>
                <a href="https://linkedin.com/in/hoby-ai-computer-vision" target="_blank" rel="noreferrer" className="hover:text-foreground transition" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
                <span className="h-4 w-px bg-border" />
                <span className="inline-flex items-center gap-1.5 text-xs"><MapPin className="h-3.5 w-3.5" /> Fianarantsoa · Madagascar</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-brand opacity-30 blur-3xl rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-border surface-card aspect-square">
                <img
                  src={avatar}
                  alt="Miandrisoa Hoby Randriatsarafara"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-background via-background/70 to-transparent">
                  <div className="grid grid-cols-3 gap-3">
                    <Stat label={t.hero.stats.coding} value="6+" />
                    <Stat label={t.hero.stats.focus} value="AI / CV" />
                    <Stat label={t.hero.stats.stack} value="Full" />
                  </div>
                </div>
              </div>
              <FloatingBadge icon={<Brain className="h-3.5 w-3.5" />} label="YOLOv8 · PyTorch" className="top-6 -left-3" />
              <FloatingBadge icon={<Code2 className="h-3.5 w-3.5" />} label="React · Spring Boot" className="bottom-24 -right-4" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-surface-elevated/70 border border-border px-3 py-2 backdrop-blur">
      <div className="font-display text-lg font-semibold">{value}</div>
      <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}

function FloatingBadge({ icon, label, className = "" }: { icon: React.ReactNode; label: string; className?: string }) {
  return (
    <div className={`absolute hidden md:flex items-center gap-1.5 rounded-full surface-card px-3 py-1.5 text-xs font-medium ${className}`}>
      <span className="text-primary">{icon}</span>
      {label}
    </div>
  );
}

/* ---------- About ---------- */
export function About() {
  const { t } = useI18n();
  const icons = [Brain, Code2, Database];
  return (
    <section className="mx-auto max-w-6xl px-4 py-20" id="about">
      <Reveal>
        <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />
      </Reveal>
      <div className="mt-10 grid lg:grid-cols-[1fr_1.2fr] gap-8">
        <Reveal>
          <div className="surface-card rounded-3xl p-7">
            <p className="text-muted-foreground leading-relaxed">{t.about.lead}</p>
            <ul className="mt-6 space-y-2.5 text-sm">
              {t.about.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-4">
          {t.about.pillars.map((it, i) => {
            const Icon = icons[i] ?? Server;
            return (
              <Reveal key={it.t} delay={i * 80}>
                <div className="group surface-card rounded-2xl p-6 h-full transition hover:-translate-y-1 hover:glow-ring">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold">{it.t}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{it.d}</p>
                </div>
              </Reveal>
            );
          })}
          <Reveal delay={240}>
            <div className="surface-card rounded-2xl p-6 h-full bg-gradient-to-br from-primary/10 to-accent/10">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {t.about.now}
              </div>
              <p className="mt-3 text-sm leading-relaxed">{t.about.now_text}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Skills ---------- */
const SKILL_GROUPS = [
  { title: { fr: "IA & Vision", en: "AI & Vision" }, key: "ai", skills: ["Python", "PyTorch", "TensorFlow", "OpenCV", "YOLOv8", "Mobile AI"] },
  { title: { fr: "Backend", en: "Backend" }, key: "back", skills: ["Spring Boot", "Django", "Laravel", "Node.js", "JEE", "Hibernate", "JUnit"] },
  { title: { fr: "Frontend", en: "Frontend" }, key: "front", skills: ["React", "JavaScript", "TypeScript", "HTML/CSS", "Vue.js"] },
  { title: { fr: "Bases de données", en: "Databases" }, key: "db", skills: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server"] },
  { title: { fr: "Langages", en: "Languages" }, key: "lang", skills: ["Java", "C/C++", "Python", "PHP", "JavaScript", "VB", "Assembleur"] },
  { title: { fr: "DevOps & Outils", en: "DevOps & Tools" }, key: "ops", skills: ["Git", "GitHub", "GitLab", "CI/CD", "Linux", "Windows"] },
  { title: { fr: "Méthodes", en: "Methods" }, key: "meth", skills: ["Agile", "SCRUM", "UML", "Merise", "SOLID", "Clean Code", "Design Patterns"] },
  { title: { fr: "Design & Bureautique", en: "Design & Office" }, key: "design", skills: ["Figma", "Canva", "Word", "Excel", "PowerPoint"] },
];

export function Skills() {
  const { t, lang } = useI18n();
  const ICONS: Record<string, typeof Brain> = {
    ai: Brain, back: Server, front: Code2, db: Database,
    lang: Code2, ops: Server, meth: Sparkles, design: Sparkles,
  };
  return (
    <section className="mx-auto max-w-6xl px-4 py-20" id="skills">
      <Reveal>
        <SectionHeading eyebrow={t.skills.eyebrow} title={t.skills.title} subtitle={t.skills.subtitle} />
      </Reveal>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SKILL_GROUPS.map((g, i) => {
          const Icon = ICONS[g.key] ?? Server;
          return (
            <Reveal key={g.key} delay={i * 50}>
              <div className="surface-card rounded-2xl p-5 h-full transition hover:-translate-y-1 hover:glow-ring">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className="font-semibold text-sm">{g.title[lang]}</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {g.skills.map((s) => (
                    <span key={s} className="inline-flex items-center rounded-md border border-border bg-surface-elevated/60 px-2 py-1 text-xs text-muted-foreground hover:text-foreground hover:border-primary/40 transition">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow, title, subtitle, center = false,
}: { eyebrow: string; title: string; subtitle?: string; center?: boolean }) {
  return (
    <div className={center ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-mono uppercase tracking-wider text-primary backdrop-blur">
        <span className="h-1 w-1 rounded-full bg-primary" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight tracking-tight">{title}</h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
