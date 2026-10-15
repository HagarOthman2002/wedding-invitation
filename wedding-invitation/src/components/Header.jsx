import { Music2, Pause, Languages } from "lucide-react";

export default function Header({
  language,
  setLanguage,
  playing,
  toggleMusic,
}) {
  return (
    <header className="topbar">
      <a className="brand" href="#home">A & H</a>

      <div className="top-actions">
        <button
          className="icon-button"
          onClick={() =>
            setLanguage(language === "en" ? "ar" : "en")
          }
          aria-label="Switch language"
        >
          <Languages size={18} />
          {language === "en" ? "العربية" : "English"}
        </button>

        <button
          className="icon-button"
          onClick={toggleMusic}
          aria-label="Toggle music"
        >
          {playing ? <Pause size={17} /> : <Music2 size={17} />}
        </button>
      </div>
    </header>
  );
}