import { useEffect, useRef, useState } from 'react';
import { languageOptions } from '../translations';
import { handleDownload } from '../utils';

function LanguageSwitcher({ lang, setLang }) {
  const [isOpen, setIsOpen] = useState(false);
  const switcherRef = useRef(null);
  const currentLanguage = languageOptions.find((option) => option.code === lang) ?? languageOptions[0];

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleDocumentClick = (event) => {
      if (!switcherRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleDocumentClick);
    return () => document.removeEventListener('mousedown', handleDocumentClick);
  }, [isOpen]);

  return (
    <div className="lang-switcher" ref={switcherRef}>
      <button
        className="lang-button"
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label="Switch language"
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        <span className={`flag-icon ${currentLanguage.flagClass}`} aria-hidden="true" />
      </button>

      {isOpen && (
        <div className="lang-menu" role="menu" aria-label="Choose language">
          {languageOptions.map((option) => (
            <button
              className={option.code === lang ? 'active' : ''}
              type="button"
              role="menuitemradio"
              aria-checked={option.code === lang}
              key={option.code}
              onClick={() => {
                setLang(option.code);
                setIsOpen(false);
              }}
            >
              {option.menuLabel}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar({ lang, setLang, t }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`site-nav${isMenuOpen ? " mobile-open" : ""}`}
      aria-label="Primary navigation"
    >
      <a
        className="brand"
        href="#top"
        aria-label="Press Up home"
        onClick={closeMenu}
      >
        <img src="/assets/webp/logo.webp" alt="" />
        <span>Press Up</span>
      </a>

      <nav className="nav-links" aria-label="Landing sections">
        <a href="#exploration">{t.nav.exploration}</a>
        <a href="#characters">{t.nav.story}</a>
        <a href="#how-it-works">{t.nav.howItWorks}</a>
        <a href="#reviews">{t.nav.review}</a>
      </nav>

      <div className="nav-actions">
        <LanguageSwitcher lang={lang} setLang={setLang} />
        <a className="download-button" href="#download" onClick={handleDownload}>{t.nav.download}</a>
      </div>

      <button
        className="mobile-menu-button"
        type="button"
        aria-label={
          isMenuOpen ? "Close navigation menu" : "Open navigation menu"
        }
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

      <div className="mobile-nav-panel">
        <a href="#exploration" onClick={closeMenu}>{t.nav.exploration}</a>
        <a href="#characters" onClick={closeMenu}>{t.nav.story}</a>
        <a href="#how-it-works" onClick={closeMenu}>{t.nav.howItWorks}</a>
        <a href="#reviews" onClick={closeMenu}>{t.nav.review}</a>
        <div className="mobile-nav-actions">
          <a className="download-button" href="#download" onClick={(e) => { closeMenu(); handleDownload(e); }}>{t.nav.download}</a>
          <LanguageSwitcher lang={lang} setLang={setLang} />
        </div>
      </div>
    </header>
  );
}
