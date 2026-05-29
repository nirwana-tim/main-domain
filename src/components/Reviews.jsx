export default function Reviews({ t }) {
  return (
    <section id="reviews" className="reviews-section">
      <div className="section-heading">
        <span>[ 4 ] {t.reviews.section}</span>
        <h2>{t.reviews.heading}</h2>
      </div>

      <div className="review-grid">
        {t.reviews.items.map(([author, quote], index) => (
          <article className="review-card" key={author}>
            <div className={`avatar avatar-${index + 1}`} aria-hidden="true">
              {author.charAt(0)}
            </div>
            <div>
              <p>{quote}</p>
              <strong>{author}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
