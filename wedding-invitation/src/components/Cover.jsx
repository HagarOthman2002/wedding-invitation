import { Heart } from "lucide-react";

export default function Cover({ t, onOpen }) {
  return (
    <section className="cover">
      <div className="cover-card">
        <Heart className="cover-heart" size={30} />

        <p className="eyebrow">{t.invitation}</p>
        <h1>Amira <span>&</span> Hady</h1>
        <p className="cover-date">12 · 11 · 2026</p>

        <div className="cover-line" />

        <button className="primary-button" onClick={onOpen}>
          {t.opening}
          <Heart size={16} />
        </button>
      </div>

      <span className="cover-decoration decoration-one">✿</span>
      <span className="cover-decoration decoration-two">✿</span>
    </section>
  );
}