import { createFileRoute } from "@tanstack/react-router";
import { Mail, Github, Linkedin, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/HomeSections";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Hoby Randriatsarafara" },
      { name: "description", content: "Get in touch for research collaboration, freelance, or full-stack engineering work. Replies within 48h." },
      { property: "og:title", content: "Contact — Hoby Randriatsarafara" },
      { property: "og:description", content: "Get in touch for research collaboration or engineering work." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useI18n();
  const [sending, setSending] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const subject = String(data.get("subject") || "");
    const message = String(data.get("message") || "");
    const body = encodeURIComponent(`From: ${name}\n\n${message}`);
    const mailto = `mailto:miandriasoahobyr@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = mailto;
    setTimeout(() => {
      setSending(false);
      toast.success(t.contact.ready, { description: t.contact.ready_desc });
    }, 600);
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <Reveal>
        <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} subtitle={t.contact.subtitle} />
      </Reveal>

      <div className="mt-12 grid lg:grid-cols-[1fr_1.2fr] gap-8">
        <Reveal>
          <div className="space-y-3">
            <ContactCard
              icon={<Mail className="h-4 w-4" />}
              label={t.contact.labels.email}
              value="miandriasoahobyr@gmail.com"
              href="mailto:miandriasoahobyr@gmail.com"
            />
            <ContactCard
              icon={<Phone className="h-4 w-4" />}
              label={t.contact.labels.phone}
              value="+261 34 62 763 86"
              href="https://wa.me/261346276386"
            />
            <ContactCard
              icon={<Github className="h-4 w-4" />}
              label={t.contact.labels.github}
              value="github.com/bihoux"
              href="https://github.com/bihoux"
            />
            <ContactCard
              icon={<Linkedin className="h-4 w-4" />}
              label={t.contact.labels.linkedin}
              value="linkedin.com/in/hoby-ai-computer-vision"
              href="https://linkedin.com/in/hoby-ai-computer-vision"
            />
            <ContactCard
              icon={<MapPin className="h-4 w-4" />}
              label={t.contact.labels.location}
              value={t.contact.location_value}
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={onSubmit} className="surface-card rounded-3xl p-6 md:p-8 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label={t.contact.name} name="name" required />
              <Field label={t.contact.email} name="email" type="email" required />
            </div>
            <Field label={t.contact.subject} name="subject" required />
            <Field label={t.contact.message} name="message" textarea required />
            <button
              type="submit"
              disabled={sending}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-95 transition disabled:opacity-60"
            >
              {sending ? t.contact.sending : t.contact.send}
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function ContactCard({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <div className="surface-card rounded-2xl p-4 flex items-center gap-4 transition hover:-translate-y-0.5 hover:glow-ring">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">{icon}</span>
      <div className="min-w-0">
        <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="text-sm font-medium truncate">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noreferrer">{content}</a> : content;
}

function Field({
  label, name, type = "text", required, textarea,
}: { label: string; name: string; type?: string; required?: boolean; textarea?: boolean }) {
  const base = "w-full rounded-xl border border-border bg-surface-elevated/50 px-4 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition";
  return (
    <label className="block">
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      <div className="mt-1.5">
        {textarea ? (
          <textarea name={name} required={required} rows={5} className={base} placeholder={`${label}…`} />
        ) : (
          <input type={type} name={name} required={required} className={base} placeholder={`${label}…`} />
        )}
      </div>
    </label>
  );
}
