export default function Countdown({ t, countdown }) {
  const units = [
    ["days", t.days],
    ["hours", t.hours],
    ["minutes", t.minutes],
    ["seconds", t.seconds],
  ];

  return (
    <section
      className="section countdown-section"
      id="countdown"
    >
      <p className="eyebrow">{t.date}</p>
      <h2>{t.title}</h2>

      <div className="countdown">
        {units.map(([key, label]) => (
          <div className="countdown-box" key={key}>
            <strong>
              {String(countdown[key]).padStart(2, "0")}
            </strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}