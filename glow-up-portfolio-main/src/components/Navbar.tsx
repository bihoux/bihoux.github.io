import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Sparkles, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";
import { ThemeToggle } from "./ThemeToggle";
import { LangSwitcher } from "./LangSwitcher";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { t } = useI18n();

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/projects", label: t.nav.projects },
    { to: "/experience", label: t.nav.experience },
    { to: "/contact", label: t.nav.contact },
  ] as const;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className="mx-auto max-w-6xl px-4">
        <nav
          className={cn(
            "flex items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-300",
            scrolled ? "surface-card" : "bg-transparent border border-transparent"
          )}
        >
          <Link to="/" className="flex items-center gap-2 group pl-1">
            <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-brand shadow-[var(--shadow-glow)]">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </span>
            <span className="font-display font-semibold tracking-tight">
              Hoby<span className="text-gradient">.</span>
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className={cn(
                      "relative px-3.5 py-2 text-sm rounded-lg transition-colors",
                      active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {active && (
                      <span className="absolute inset-0 rounded-lg bg-primary/10 ring-1 ring-primary/20" />
                    )}
                    <span className="relative">{l.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:flex items-center gap-2">
            <LangSwitcher />
            <ThemeToggle />
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-brand px-4 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-90 transition"
            >
              {t.nav.hire}
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <LangSwitcher />
            <ThemeToggle />
            <button
              className="p-2 rounded-lg hover:bg-muted/50"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="md:hidden mt-2 surface-card rounded-2xl p-2 animate-[fade-up_0.3s_ease-out]">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "block px-4 py-3 rounded-lg text-sm transition-colors",
                  pathname === l.to
                    ? "bg-primary/10 text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="/CV_Miandrisoa_Hoby_RANDRIATSARAFARA.pdf"
              download
              className="mt-1 flex items-center gap-2 px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50"
            >
              <Download className="h-4 w-4" /> CV
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
