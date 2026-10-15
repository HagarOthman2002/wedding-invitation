import { X } from "lucide-react";

export default function Lightbox({ photo, onClose }) {
  if (!photo) return null;

  return (
    <div className="lightbox" onClick={onClose}>
      <button
        className="close-button"
        aria-label="Close photo"
        onClick={onClose}
      >
        <X size={24} />
      </button>

      <img
        src={photo}
        alt="Amira and Hady's selected memory"
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  );
}