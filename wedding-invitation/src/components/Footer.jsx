import { Heart } from "lucide-react";

export default function Footer({ t }) {
  return (
    <footer className="footer" id="footer">
      <Heart size={20} />
      <h2>Amira & Hady</h2>
      <p>{t.footer}</p>
      <p>12 · 11 · 2026</p>
    </footer>
  );
}