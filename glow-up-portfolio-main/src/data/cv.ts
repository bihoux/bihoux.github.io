import type { Lang } from "./i18n-dict";

export type ExpItem = {
  role: { fr: string; en: string };
  org: string;
  location?: string;
  period: { fr: string; en: string };
  bullets: { fr: string[]; en: string[] };
  tags?: string[];
  category: "research" | "engineering" | "teaching";
};

export const experiences: ExpItem[] = [
  {
    role: {
      fr: "Plateforme nationale de collecte, validation et analyse de données citoyennes",
      en: "National platform for citizen data collection, validation & analytics",
    },
    org: "Projet gouvernemental — PNCTDC",
    location: "Antananarivo, Madagascar",
    period: { fr: "Depuis avril 2026", en: "Since April 2026" },
    category: "engineering",
    tags: ["React", "Spring Boot", "Keycloak", "PostgreSQL", "REST API", "SSO", "Git"],
    bullets: {
      fr: [
        "Front-end React.js : interfaces, formulaires dynamiques, tableaux de bord",
        "Back-end Spring Boot : API REST, workflows de validation multi-niveaux",
        "Authentification Keycloak (SSO) et gestion des rôles utilisateurs",
        "Modélisation et gestion de la base de données PostgreSQL",
        "Système de collecte multi-source (formulaires, PDF, audio)",
        "Architecture scalable, sécurisée et modulaire — travail en équipe (Git)",
      ],
      en: [
        "React.js front-end: UI, dynamic forms, dashboards",
        "Spring Boot back-end: REST APIs, multi-level validation workflows",
        "Keycloak authentication (SSO) and user role management",
        "PostgreSQL data modeling and management",
        "Multi-source collection system (forms, PDF, audio)",
        "Scalable, secure and modular architecture — team work with Git",
      ],
    },
  },
  {
    role: { fr: "Enseignant universitaire", en: "University lecturer" },
    org: "City University Antananarivo",
    location: "Madagascar",
    period: { fr: "Depuis décembre 2025", en: "Since December 2025" },
    category: "teaching",
    tags: ["Java", "C++", "Web · Java", "Computer Vision"],
    bullets: {
      fr: [
        "Programming in Java",
        "Programming in C++",
        "Advanced Web Development with Java",
        "Computer Vision",
      ],
      en: [
        "Programming in Java",
        "Programming in C++",
        "Advanced Web Development with Java",
        "Computer Vision",
      ],
    },
  },
  {
    role: { fr: "Assistant de recherche et d'enseignement", en: "Research & teaching assistant" },
    org: "ENI Fianarantsoa",
    period: { fr: "Depuis mai 2025", en: "Since May 2025" },
    category: "teaching",
    tags: ["SEO", "Bases de données", "Encadrement"],
    bullets: {
      fr: [
        "Conception et évaluation de modules SEO et Bases de Données",
        "Encadrement des étudiants et analyse des examens",
        "Collaboration académique : autonomie, rigueur, encadrement",
      ],
      en: [
        "Design and assessment of SEO and Databases modules",
        "Student supervision and exam analysis",
        "Academic collaboration: autonomy, rigor, supervision",
      ],
    },
  },
  {
    role: { fr: "Chercheur / Auteur", en: "Researcher / Author" },
    org: "EDMI / LIMAD",
    location: "Fianarantsoa, Madagascar",
    period: { fr: "Depuis 2024", en: "Since 2024" },
    category: "research",
    tags: ["YOLOv8", "Python", "Computer Vision", "Mobile AI", "Java", "C++"],
    bullets: {
      fr: [
        "Article scientifique : reconnaissance temps réel des billets malgaches (Ariary)",
        "Technologies : YOLOv8, Python, Vision par ordinateur, Mobile AI (Java, C++)",
      ],
      en: [
        "Scientific paper: real-time recognition of Malagasy banknotes (Ariary)",
        "Tech: YOLOv8, Python, Computer Vision, Mobile AI (Java, C++)",
      ],
    },
  },
  {
    role: { fr: "Développeur Full Stack", en: "Full-Stack Developer" },
    org: "FIFAMANOR",
    location: "Antsirabe, Madagascar",
    period: { fr: "Mars 2021 — Mai 2021", en: "March 2021 — May 2021" },
    category: "engineering",
    tags: ["Java Swing", "NetBeans", "MySQL", "Launch4j", "InnoSetup"],
    bullets: {
      fr: [
        "Conception et déploiement de l'application de gestion des entrées/sorties de stock",
        "Outils : Java Swing, NetBeans, MySQL, Launch4j, InnoSetup",
      ],
      en: [
        "Design and deployment of a stock in/out management application",
        "Tools: Java Swing, NetBeans, MySQL, Launch4j, InnoSetup",
      ],
    },
  },
  {
    role: { fr: "Stagiaire développeur", en: "Developer intern" },
    org: "Compagnie d'assurance ARO",
    location: "Fianarantsoa, Madagascar",
    period: { fr: "Nov. 2019 — Fév. 2020", en: "Nov. 2019 — Feb. 2020" },
    category: "engineering",
    tags: ["VB.NET", "Visual Studio", "SQL Server"],
    bullets: {
      fr: [
        "Conception et réalisation d'une application de gestion des assurances automobiles",
        "Outils : Visual Basic.NET, Visual Studio, SQL Server",
      ],
      en: [
        "Design and implementation of a car insurance management app",
        "Tools: Visual Basic.NET, Visual Studio, SQL Server",
      ],
    },
  },
];

export const education = [
  { year: "2024 — 2027", title: { fr: "Doctorat en Informatique", en: "PhD in Computer Science" }, org: "EDMI — Université de Fianarantsoa" },
  { year: "2022 — 2024", title: { fr: "Master 2 Recherche", en: "Master 2 Research" }, org: "ENI Fianarantsoa" },
  { year: "2017 — 2021", title: { fr: "Licence Professionnelle", en: "Professional Bachelor" }, org: "ENI Fianarantsoa" },
  { year: "2017", title: { fr: "Baccalauréat Série D", en: "High School Diploma — Series D" }, org: { fr: "Candidat libre — Fianarantsoa", en: "Independent candidate — Fianarantsoa" } },
  { year: "2016", title: { fr: "Baccalauréat Série C", en: "High School Diploma — Series C" }, org: "Lycée Raherivelo Ramamonjy, Fianarantsoa" },
];

export const certifications = [
  {
    fr: "Certification Pix — Niveau Indépendant 2 (AUF / CEF Fianarantsoa) · Code P-TK343K3J",
    en: "Pix Certification — Independent Level 2 (AUF / CEF Fianarantsoa) · ID P-TK343K3J",
    year: "2025",
  },
  {
    fr: "Développez votre leadership orienté actions et résultats — Orange Digital Center",
    en: "Action & results-oriented leadership — Orange Digital Center",
    year: "Sept. 2025",
  },
  {
    fr: "Gérez efficacement votre temps — Orange Digital Center",
    en: "Manage your time effectively — Orange Digital Center",
    year: "Oct. 2025",
  },
  {
    fr: "Colloque international : Enseignement supérieur et IA — MESUPRES, Université de Fianarantsoa",
    en: "International conference: Higher Education & AI — MESUPRES, University of Fianarantsoa",
    year: "2025",
  },
  {
    fr: "Communication scientifique orale — Journées de la Recherche MESUPRES (UA / UF)",
    en: "Oral scientific communication — MESUPRES Research Days (UA / UF)",
    year: "2024",
  },
  {
    fr: "Atelier scientifique : produire, diffuser et valoriser la recherche — AUF",
    en: "Scientific workshop: producing, sharing & promoting research — AUF",
    year: "2023",
  },
];

export const publications = [
  {
    title: {
      fr: "Reconnaissance en temps réel des billets malgaches (Ariary)",
      en: "Real-time recognition of Malagasy banknotes (Ariary)",
    },
    authors: "M. H. Randriatsarafara et al.",
    venue: "EDMI / LIMAD",
    year: "2024 — en cours",
  },
];

export function pickLang<T>(value: T | { fr: T; en: T }, lang: Lang): T {
  if (value && typeof value === "object" && "fr" in (value as object) && "en" in (value as object)) {
    return (value as { fr: T; en: T })[lang];
  }
  return value as T;
}
