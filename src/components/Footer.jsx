const SocialIcon = ({ type }) => {
  const paths = {
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    instagram: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17" cy="7" r="0.7" />
      </>
    ),
    youtube: (
      <>
        <rect x="3" y="6" width="18" height="12" rx="4" />
        <path d="m11 10 4 2-4 2z" />
      </>
    ),
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      {paths[type]}
    </svg>
  );
};

import { handleDownload, handleEmail } from '../utils';

export default function Footer({ t }) {
  return (
    <footer id="download" className="footer-section">
      <div className="footer-diagonal" aria-hidden="true" />
      <img className="footer-monkey" src="/assets/Monyet Duduk.png" alt="Jumpy sitting above the footer" />

      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src="/assets/logo.png" alt="" />
            <span>Press Up</span>
          </div>
          <p>{t.footer.description}</p>
        </div>

        <div className="footer-column">
          <h3>{t.footer.aboutUs}</h3>
          <a href="#exploration">{t.nav.exploration}</a>
          <a href="#characters">{t.nav.story}</a>
          <a href="#how-it-works">{t.nav.howItWorks}</a>
          <a href="#reviews">{t.nav.review}</a>
        </div>

        <div className="footer-column">
          <h3>{t.footer.contactUs}</h3>
          <a href="#download">Dengkikok, NYC</a>
          <a href="mailto:nirwanatim@gmail.com" onClick={handleEmail}>nirwanatim@gmail.com</a>
          <a href="tel:+123456789">+ (123) 456 789</a>
          <a href="#download">@pressup.official</a>
        </div>

        <div className="footer-column">
          <h3>{t.footer.support}</h3>
          <a href="#download" onClick={handleDownload}>{t.footer.getApp}</a>
          <a href="#gameplay">{t.footer.watchGameplay}</a>
          <a href="#download">{t.footer.privacy}</a>
          <a href="#download">{t.footer.terms}</a>
        </div>

        <div className="footer-bottom">
          <div className="footer-credit">
            <p>&copy; 2026 Press Up. {t.footer.rights}</p>
            <p>{t.footer.developed}</p>
          </div>
          <div className="social-icons">
            <a href="mailto:nirwanatim@gmail.com" aria-label="Email" onClick={handleEmail}><SocialIcon type="mail" /></a>
            <a href="#download" aria-label="Instagram"><SocialIcon type="instagram" /></a>
            <a href="#gameplay" aria-label="YouTube"><SocialIcon type="youtube" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
