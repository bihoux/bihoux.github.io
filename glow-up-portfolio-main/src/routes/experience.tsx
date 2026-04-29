import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Award, BookOpen, Briefcase, FlaskConical, BookOpenCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/HomeSections";
import { useI18n } from "@/lib/i18n";
import { experiences, education, certifications, publications } from "@/data/cv";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience & Teaching — Hoby Randriatsarafara" },
      { name: "description", content: "Education, university teaching, publications and certifications." },
      { property: "og:title", content: "Experience & Teaching — Hoby Randriatsarafara" },
      { property: "og:description", content: "Education, university teaching, publications and certifications." },
    ],
  }),
  component: ExperiencePage,
});

const CAT_ICON = {
  research: FlaskConical,
  engineering: Briefcase,
  teaching: BookOpenCheck,
} as const;

function ExperiencePage() {
  const { t, lang } = useI18n();

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16 space-y-20">
      {/* ---- Experience timeline ---- */}
      <div>
        <Reveal>
          <SectionHeading eyebrow={t.experience.eyebrow} title={t.experience.title} subtitle={t.experience.subtitle} />
        </Reveal>

        <ol className="mt-12 relative border-l border-border ml-3 md:ml-6 space-y-8">
          {experiences.map((e, i) => {
            const Icon = CAT_ICON[e.category];
            return (
              <Reveal key={e.org + i} delay={i * 60}>
                <li className="relative pl-8 md:pl-10">
                  <span className="absolute -left-[13px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-brand ring-4 ring-background text-primary-foreground">
                    <Icon className="h-3 w-3" />
                  </span>
                  <article className="surface-card rounded-2xl p-6 transition hover:-translate-y-0.5">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
                      <div>
                        <h3 className="font-semibold leading-tight">{e.role[lang]}</h3>
                        <p className="text-sm text-muted-foreground">
                          {e.org}{e.location ? ` · ${e.location}` : ""}
                        </p>
                      </div>
                      <span className="text-xs font-mono text-primary whitespace-nowrap">{e.period[lang]}</span>
                    </div>
                    <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                      {e.bullets[lang].map((b) => (
                        <li key={b} className="flex gap-2.5">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    {e.tags && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {e.tags.map((tag) => (
                          <span key={tag} className="inline-flex items-center rounded-md border border-border bg-surface-elevated/60 px-2 py-1 text-[11px] text-muted-foreground">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </article>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>

      {/* ---- Education ---- */}
      <div>
        <Reveal>
          <SectionHeading eyebrow={t.experience.ed_eyebrow} title={t.experience.ed_title} />
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {education.map((e, i) => {
            const org = typeof e.org === "string" ? e.org : e.org[lang];
            return (
              <Reveal key={e.year + i} delay={i * 60}>
                <div className="surface-card rounded-2xl p-5 h-full transition hover:-translate-y-1 hover:glow-ring">
                  <div className="flex items-center gap-2 text-xs font-mono text-primary">
                    <GraduationCap className="h-3.5 w-3.5" /> {e.year}
                  </div>
                  <h3 className="mt-3 font-semibold leading-tight">{e.title[lang]}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{org}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* ---- Publications & Certifications ---- */}
      <div className="grid md:grid-cols-2 gap-6">
        <Reveal>
          <div className="surface-card rounded-3xl p-7 h-full">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary"><BookOpen className="h-5 w-5" /></span>
              <h3 className="font-semibold">{t.experience.pub_title}</h3>
            </div>
            <ul className="mt-5 space-y-4">
              {publications.map((p) => (
                <li key={p.title.en} className="border-l-2 border-primary/40 pl-4">
                  <p className="font-medium text-sm">{p.title[lang]}</p>
                  <p className="text-xs text-muted-foreground mt-1">{p.authors} · {p.venue} · {p.year}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="surface-card rounded-3xl p-7 h-full">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent"><Award className="h-5 w-5" /></span>
              <h3 className="font-semibold">{t.experience.cert_title}</h3>
            </div>
            <ul className="mt-5 space-y-3">
              {certifications.map((c) => (
                <li key={c.en} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="text-[11px] font-mono text-primary mt-0.5 shrink-0 w-16">{c.year}</span>
                  <span>{c[lang]}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
