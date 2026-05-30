import { useState } from 'react';
import { handleDownload, handleEmail } from '../utils';

export default function CurtainCTA({ t }) {
  const [isCurtainOpen, setIsCurtainOpen] = useState(false);

  const toggleCurtain = () => {
    setIsCurtainOpen((isOpen) => !isOpen);
  };

  return (
    <section
      className={`curtain-section${isCurtainOpen ? ' open' : ''}`}
      aria-label={t.cta.aria}
    >
      <div
        className="curtain-stage"
        onClick={(event) => {
          if (event.target.closest('.curtain-cta-actions')) return;
          if (isCurtainOpen) toggleCurtain();
        }}
      >
        <div className="curtain-cta-content">
          <div className="curtain-cta-visual" aria-hidden="true">
            <img
              className="curtain-cta-image"
              src="/assets/webp/Foto Barengan.webp"
              alt=""
            />
          </div>

          <div className="curtain-cta-copy">
            <h2>{t.cta.title}</h2>
            <p>{t.cta.body}</p>
            <div className="curtain-cta-actions">
              <a className="curtain-primary" href="#download" onClick={handleDownload}>{t.cta.getApp}</a>
              <a className="curtain-secondary" href="mailto:nirwanatim@gmail.com" onClick={handleEmail}>{t.cta.question}</a>
            </div>
          </div>
        </div>

        <button
          className="curtain-overlay"
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            toggleCurtain();
          }}
          aria-label={isCurtainOpen ? t.cta.closeCurtain : t.cta.openCurtain}
          aria-expanded={isCurtainOpen}
        >
          <img
            className="curtain-img-desktop"
            src="/assets/webp/Gorden Terbuka Dekstop.webp"
            alt=""
          />
          <img
            className="curtain-img-mobile"
            src="/assets/webp/Gorden Terbuka Mobile.webp"
            alt=""
          />
        </button>
      </div>
    </section>
  );
}
