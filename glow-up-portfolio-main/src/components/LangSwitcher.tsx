import { useI18n } from "@/lib/i18n";
import { Languages } from "lucide-react";

export function LangSwitcher() {
  const { lang, setLang } = useI18n();
  return (
    <div className="inline-flex items-center rounded-lg border border-border bg-surface/60 p-0.5 text-xs font-medium backdrop-blur">
      <Languages className="h-3.5 w-3.5 mx-2 text-muted-foreground" />
      <button
        onClick={() => setLang("fr")}
        className={`px-2.5 py-1 rounded-md transition ${lang === "fr" ? "bg-gradient-brand text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
        aria-label="Français"
      >
        FR
      </button>
      <button
        onClick={() => setLang("en")}
        className={`px-2.5 py-1 rounded-md transition ${lang === "en" ? "bg-gradient-brand text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
