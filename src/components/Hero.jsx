export default function Hero({ t }) {
  return (
    <section id="top" className="hero-section">
      <div className="hero-copy">
        <h1>
          {t.hero.titleTop}
          <span>{t.hero.titleBottom}</span>
        </h1>
        <p>{t.hero.body}</p>
        <div className="hero-buttons">
          <a className="hero-button hero-button-white" href="#exploration">{t.hero.getStarted}</a>
          <a className="hero-button hero-button-green" href="#gameplay">
            {t.hero.watchGameplay} <span aria-hidden="true">▶</span>
          </a>
        </div>
      </div>
      <div className="hero-wave" aria-hidden="true" />
    </section>
  );
}
