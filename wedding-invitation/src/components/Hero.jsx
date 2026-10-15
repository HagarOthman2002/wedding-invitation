import { Heart, ChevronDown } from "lucide-react";

export default function Hero({ t }) {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="eyebrow">{t.dear}</p>
        <h1>Amira <span>&</span> Hady</h1>
        <p className="hero-description">{t.intro}</p>

        <Heart className="hero-heart" size={24} />

        <p className="eyebrow">{t.date}</p>
        <p className="event-date">
          12 November 2026 · 6:00 PM
        </p>

        <a href="#countdown" className="scroll-link">
          <ChevronDown size={22} />
        </a>
      </div>
    </section>
  );
}