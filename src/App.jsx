import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Description from './components/Description';
import Characters from './components/Characters';
import PhoneSimulator from './components/PhoneSimulator';
import Steps from './components/Steps';
import Reviews from './components/Reviews';
import CurtainCTA from './components/CurtainCTA';
import Footer from './components/Footer';
import { translations } from './translations';

const getInitialLanguage = () => {
  if (typeof window === 'undefined') return 'en';

  const storedLanguage = window.localStorage.getItem('press-up-language');
  return translations[storedLanguage] ? storedLanguage : 'en';
};

export default function App() {
  const [lang, setLangState] = useState(getInitialLanguage);
  const t = translations[lang] ?? translations.en;

  const setLang = (nextLang) => {
    if (!translations[nextLang]) return;
    setLangState(nextLang);
    window.localStorage.setItem('press-up-language', nextLang);
  };

  return (
    <div className="landing-page">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <Hero t={t} />
      <div className="mobile-exploration-card">
        <Stats t={t} />
        <Description t={t} />
      </div>
      <Characters t={t} />
      <PhoneSimulator t={t} />
      <Steps t={t} />
      <Reviews t={t} />
      <CurtainCTA t={t} />
      <Footer t={t} />
    </div>
  );
}
