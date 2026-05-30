import { useState } from 'react';

const characters = [
  {
    name: 'Mr Owi',
    key: 'mrOwi',
    img: '/assets/webp/Display Mr Owi.webp',
    tone: 'blue',
    className: 'mr-owi',
  },
  {
    name: 'Nerva',
    key: 'nerva',
    img: '/assets/webp/Display Nerva.webp',
    tone: 'green',
    className: 'nerva',
  },
  {
    name: 'Patro',
    key: 'patro',
    img: '/assets/webp/Display Patro.webp',
    tone: 'blue',
    className: 'patro',
  },
  {
    name: 'Jumpy',
    key: 'jumpy',
    img: '/assets/webp/Display Jumpy.webp',
    tone: 'green',
    className: 'jumpy',
  },
  {
    name: 'Luna',
    key: 'luna',
    img: '/assets/webp/Display Luna.webp',
    tone: 'blue',
    className: 'luna',
  },
  {
    name: 'Kael',
    key: 'kael',
    img: '/assets/webp/Display Kael.webp',
    tone: 'green',
    className: 'kael',
  },
  {
    name: 'Goatie',
    key: 'goatie',
    img: '/assets/webp/Display Goatie.webp',
    tone: 'green',
    className: 'goatie',
  },
];

export default function Characters({ t }) {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleCard = (name) => {
    setFlippedCards((current) => ({
      ...current,
      [name]: !current[name],
    }));
  };

  return (
    <section id="characters" className="character-section">
      <div className="section-heading">
        <span>[ 2 ] {t.characters.section}</span>
        <h2>{t.characters.heading}</h2>
      </div>

      <div className="character-grid">
        {characters.map(({ name, key, img, tone, className }) => {
          const role = t.characters.roles[key];
          const description = t.characters.descriptions[key];
          const isFlipped = Boolean(flippedCards[name]);

          return (
            <article className={`character-flashcard ${tone} ${className}`} key={name}>
              <button
                className={`character-flip-card${isFlipped ? ' flipped' : ''}`}
                type="button"
                onClick={() => toggleCard(name)}
                aria-label={`${isFlipped ? t.characters.showIllustration : t.characters.showDescription} ${name}`}
                aria-pressed={isFlipped}
              >
                <div className="character-flip-inner">
                  <div className="character-card character-card-front">
                    <div className="character-card-copy">
                      <h3>{name}</h3>
                      <p>{role}</p>
                    </div>
                    <div className="character-ground" aria-hidden="true" />
                    <img src={img} alt={`${name}, ${role}`} />
                  </div>

                  <div className="character-description-card character-card-back">
                    <h3>{name}</h3>
                    <p className="character-role">{role}</p>
                    <p className="character-description">{description}</p>
                  </div>
                </div>
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
