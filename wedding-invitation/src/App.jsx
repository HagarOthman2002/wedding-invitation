import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Cover from "./components/Cover";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Gallery from "./components/Gallery";
import Venue from "./components/Venue";
import Guestbook from "./components/Guestbook";
import Footer from "./components/Footer";
import Lightbox from "./components/Lightbox";

import {
  eventDate,
  photos,
  translations,
  getCountdown,
} from "./data/weddingData";

function App() {
  const [opened, setOpened] = useState(false);
  const [language, setLanguage] = useState("en");
  const [countdown, setCountdown] = useState(getCountdown);
  const [playing, setPlaying] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const [wishes, setWishes] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem("guestbook") || "[]"
      );
    } catch {
      return [];
    }
  });

  const t = translations[language];
  const isArabic = language === "ar";

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
  }, [language, isArabic]);

  function addWish(name, message) {
    const newWish = {
      id: Date.now(),
      name,
      message,
    };

    setWishes((currentWishes) => {
      const updated = [newWish, ...currentWishes];

      localStorage.setItem(
        "guestbook",
        JSON.stringify(updated)
      );

      return updated;
    });
  }

  async function toggleMusic() {
    const audio = document.getElementById("background-music");

    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
        setPlaying(true);
      } else {
        audio.pause();
        setPlaying(false);
      }
    } catch {
      alert("Please add public/music/song.mp3");
    }
  }

  return (
    <main className={isArabic ? "app arabic" : "app"}>
      <audio id="background-music" loop>
        <source src="/music/song.mp3" type="audio/mpeg" />
      </audio>

      <Header
        language={language}
        setLanguage={setLanguage}
        playing={playing}
        toggleMusic={toggleMusic}
      />

      {!opened && (
        <Cover
          t={t}
          onOpen={() => setOpened(true)}
        />
      )}

      <div className={opened ? "invitation visible" : "invitation hidden"}>
        <Hero t={t} />

        <Countdown
          t={t}
          countdown={countdown}
        />

        <Gallery
          t={t}
          photos={photos}
          onSelectPhoto={setSelectedPhoto}
        />

        <Venue t={t} />

        <Guestbook
          t={t}
          wishes={wishes}
          onAddWish={addWish}
        />

        <Footer t={t} />
      </div>

      <Lightbox
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />
    </main>
  );
}

export default App;