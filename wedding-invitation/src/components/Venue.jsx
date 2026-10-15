import { MapPin } from "lucide-react";

export default function Venue({ t }) {
  return (
    <section className="venue-section section">
      <MapPin size={30} />

      <p className="eyebrow">{t.venue}</p>
      <h2>Our Celebration</h2>

      <p className="venue-address">
        المسجد الجامع بمدينتي، Cairo, Egypt
      </p>

      <a
        className="primary-button"
        href="https://www.google.com/maps/place/%D8%A7%D9%84%D9%85%D8%B3%D8%AC%D8%AF+%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9+%D8%A8%D9%85%D8%AF%D9%8A%D9%86%D8%AA%D9%8A%E2%80%AD/@30.0934605,31.6282879,17z/data=!3m1!4b1!4m6!3m5!1s0x1457f574e44cb2b3:0x8ea937d886df0dec!8m2!3d30.0934559!4d31.6308628!16s%2Fg%2F11h7g4c3th"
        target="_blank"
        rel="noreferrer"
      >
        <MapPin size={17} />
        {t.location}
      </a>
    </section>
  );
}