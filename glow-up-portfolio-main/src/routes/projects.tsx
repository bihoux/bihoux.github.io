import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Github, Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/HomeSections";
import { useI18n } from "@/lib/i18n";
import banknote from "@/assets/project-banknote.jpg";
import bi from "@/assets/project-bi.jpg";
import javaImg from "@/assets/project-java.jpg";
import gov from "@/assets/project-gov.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Hoby Randriatsarafara" },
      { name: "description", content: "Selected research and engineering projects: real-time YOLOv8 banknote recognition, government data platform, BI dashboards." },
      { property: "og:title", content: "Projects — Hoby Randriatsarafara" },
      { property: "og:description", content: "Selected research and engineering projects." },
      { property: "og:image", content: "/og-projects.jpg" },
    ],
  }),
  component: ProjectsPage,
});

type Project = {
  title: { fr: string; en: string };
  desc: { fr: string; en: string };
  image?: string;
  tags: string[];
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: {
      fr: "Reconnaissance temps réel des billets Ariary (Recherche)",
      en: "Real-time Recognition of Malagasy Banknotes (Research)",
    },
    desc: {
      fr: "Détection et classification temps réel sur mobile via YOLO. Pipeline complet : collecte, annotation, entraînement et déploiement Android.",
      en: "Real-time mobile detection and classification with YOLO. End-to-end pipeline — data, training, and Android deployment.",
    },
    image: banknote,
    tags: ["Python", "YOLOv8", "OpenCV", "C++", "Java", "Android Studio"],
    featured: true,
  },
  {
    title: {
      fr: "Plateforme nationale PNCTDC (Gouvernement)",
      en: "PNCTDC National Platform (Government)",
    },
    desc: {
      fr: "Collecte, validation et analyse de données citoyennes : React, Spring Boot, Keycloak SSO, PostgreSQL et workflows multi-niveaux.",
      en: "Citizen data collection, validation and analytics: React, Spring Boot, Keycloak SSO, PostgreSQL, multi-level workflows.",
    },
    image: gov,
    tags: ["React", "Spring Boot", "Keycloak", "PostgreSQL", "REST", "SSO"],
    featured: true,
  },
  {
    title: {
      fr: "BI · Data Warehouse avec Jitterbit & Power BI",
      en: "BI · Data Warehouse with Jitterbit & Power BI",
    },
    desc: {
      fr: "Intégration de données, modélisation, dashboards et reports. Pipelines BI livrés de bout en bout.",
      en: "Data integration, modeling, dashboards & reports. End-to-end BI pipelines delivered.",
    },
    image: bi,
    tags: ["Jitterbit", "Power BI", "SQL Server", "ETL"],
  },
  {
    title: {
      fr: "Suite gestion stock & formation (Java)",
      en: "Stock & Training Management Suite (Java)",
    },
    desc: {
      fr: "Conception, développement et déploiement d'applications de gestion (stock & formation) en Java SE avec MySQL.",
      en: "Design, development and deployment of stock and training management apps with Java SE and MySQL.",
    },
    image: javaImg,
    tags: ["Java SE", "JavaFX", "Swing", "MySQL"],
  },
];

function ProjectsPage() {
  const { t, lang } = useI18n();
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <Reveal>
        <SectionHeading eyebrow={t.projects.eyebrow} title={t.projects.title} subtitle={t.projects.subtitle} />
      </Reveal>

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.title.en} delay={i * 80} className={p.featured ? "md:col-span-2" : ""}>
            <article className="group surface-card rounded-3xl overflow-hidden h-full flex flex-col transition hover:-translate-y-1 hover:glow-ring">
              {p.image && (
                <div className="relative overflow-hidden aspect-[16/9] border-b border-border">
                  <img
                    src={p.image}
                    alt={p.title[lang]}
                    loading="lazy"
                    width={1280}
                    height={800}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  {p.featured && (
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-gradient-brand px-2.5 py-1 text-[11px] font-medium text-primary-foreground shadow-[var(--shadow-glow)]">
                      <Star className="h-3 w-3" /> {t.projects.featured}
                    </span>
                  )}
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg md:text-xl font-semibold">{p.title[lang]}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{p.desc[lang]}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center rounded-md border border-border bg-surface-elevated/60 px-2 py-1 text-xs text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-2">
                  <button className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium hover:bg-surface-elevated transition">
                    <ExternalLink className="h-3.5 w-3.5" /> {t.projects.demo}
                  </button>
                  <button className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium hover:bg-surface-elevated transition">
                    <Github className="h-3.5 w-3.5" /> {t.projects.code}
                  </button>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
