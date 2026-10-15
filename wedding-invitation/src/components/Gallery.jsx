export default function Gallery({ t, photos, onSelectPhoto }) {
  return (
    <section className="section gallery-section">
      <p className="eyebrow">{t.story}</p>
      <h2>{t.gallery}</h2>

      <div className="gallery">
        {photos.map((photo, index) => (
          <button
            className="photo-button"
            key={photo}
            onClick={() => onSelectPhoto(photo)}
            aria-label={`View photo ${index + 1}`}
          >
            <img
              src={photo}
              alt={`Amira and Hady memory ${index + 1}`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}