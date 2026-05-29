export default function Description({ t }) {
  return (
    <section className="about-section">
      <p>
        {t.about.text}{' '}
        <span>{t.about.highlight}</span>
      </p>
    </section>
  );
}
