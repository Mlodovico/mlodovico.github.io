import { ptBR } from "../../ling/pt-br";
import { enUs } from "../../ling/en-us";
import { esES } from "../../ling/es-es";
import "./styles.css";

const LANGS = [
  { data: ptBR, label: "PT" },
  { data: enUs, label: "EN" },
  { data: esES, label: "ES" },
];

export function LanguageSwitcher({ current, onChange }) {
  return (
    <div className="lang-switch" role="group" aria-label={current.langLabel}>
      {LANGS.map((item) => (
        <button
          key={item.data.code}
          type="button"
          className={current.code === item.data.code ? "is-active" : ""}
          onClick={() => onChange(item.data)}
          aria-pressed={current.code === item.data.code}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
