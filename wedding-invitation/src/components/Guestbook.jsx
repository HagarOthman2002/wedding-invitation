import { useState } from "react";
import { Heart, Send } from "lucide-react";

export default function Guestbook({ t, wishes, onAddWish }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim() || !message.trim()) return;

    onAddWish(name.trim(), message.trim());

    setName("");
    setMessage("");
  }

  return (
    <section className="section guestbook-section">
      <Heart className="hero-heart" size={25} />
      <p className="eyebrow">{t.guestbook}</p>
      <h2>{t.wishes}</h2>

      <form className="guestbook-form" onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder={t.name}
          maxLength={60}
          required
        />

        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder={t.message}
          maxLength={500}
          rows={4}
          required
        />

        <button className="primary-button" type="submit">
          <Send size={16} />
          {t.send}
        </button>
      </form>

      <div className="wishes-list">
        {wishes.map((wish) => (
          <article className="wish-card" key={wish.id}>
            <Heart size={16} />
            <h3>{wish.name}</h3>
            <p>{wish.message}</p>
          </article>
        ))}
      </div>
    </section>
  );
}