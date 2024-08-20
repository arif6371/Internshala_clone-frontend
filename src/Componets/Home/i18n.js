import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Add your English translations here
      welcome: "Make your dream career a reality",
      trending: "Trending on InternArea 🔥",
      // other translations...
    },
  },
  es: {
    translation: {
      welcome: "Haz realidad tu carrera soñada",
      trending: "Tendencias en InternArea 🔥",
      // other translations...
    },
  },
  hi: {
    translation: {
      welcome: "अपने सपनों के करियर को हकीकत बनाएं",
      trending: "इंटर्नएरिया पर ट्रेंडिंग 🔥",
      // other translations...
    },
  },
  pt: {
    translation: {
      welcome: "Torne sua carreira dos sonhos uma realidade",
      trending: "Tendências no InternArea 🔥",
      // other translations...
    },
  },
  zh: {
    translation: {
      welcome: "让您的梦想职业成为现实",
      trending: "InternArea 上的趋势 🔥",
      // other translations...
    },
  },
  fr: {
    translation: {
      welcome: "Réalisez votre carrière de rêve",
      trending: "Tendance sur InternArea 🔥",
      // other translations...
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
