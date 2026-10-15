export const eventDate = new Date("2026-11-12T18:00:00");

export const photos = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=900&q=85",
];

export const translations = {
  en: {
    invitation: "YOU ARE INVITED",
    dear: "Together with our families",
    title: "We're Getting Married",
    intro: "Two hearts, one love, and a lifetime of memories.",
    date: "SAVE THE DATE",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    story: "Our Love Story",
    gallery: "Our Beautiful Memories",
    venue: "Join Us on Our Special Day",
    location: "View Location on Google Maps",
    guestbook: "Leave Us Your Wishes",
    name: "Your name",
    message: "Write your wishes here...",
    send: "Send Wishes",
    wishes: "Wishes from Our Loved Ones",
    footer: "With love, Amira & Hady.",
    music: "Play our song",
    opening: "Open Your Invitation",
  },
  ar: {
    invitation: "أنتم مدعوون لحضور حفل زفافنا",
    dear: "بكل الحب وبمشاركة عائلتينا",
    title: "سنتزوج قريبًا",
    intro: "قلبان جمعهما الحب، وعمر كامل من الذكريات.",
    date: "احفظوا موعد زفافنا",
    days: "أيام",
    hours: "ساعات",
    minutes: "دقائق",
    seconds: "ثوانٍ",
    story: "حكاية حبنا",
    gallery: "أجمل ذكرياتنا",
    venue: "شاركونا فرحتنا في يومنا المميز",
    location: "الموقع على خرائط جوجل",
    guestbook: "اتركوا لنا تهنئة",
    name: "اسمك",
    message: "اكتب تهنئتك هنا...",
    send: "إرسال التهنئة",
    wishes: "تهاني وأمنيات أحبائنا",
    footer: "بكل الحب، أميرة وهادي.",
    music: "شغّل أغنيتنا",
    opening: "افتح دعوة الزفاف",
  },
};

export function getCountdown() {
  const difference = Math.max(
    0,
    eventDate.getTime() - Date.now()
  );

  return {
    days: Math.floor(difference / 86400000),
    hours: Math.floor((difference / 3600000) % 24),
    minutes: Math.floor((difference / 60000) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}