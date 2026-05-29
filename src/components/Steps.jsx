const steps = [
  ['1', '/assets/How It Works 1.png', 'step-green'],
  ['2', '/assets/How It Works 2.png', 'step-teal'],
  ['3', '/assets/How It Works 3.png', 'step-gray'],
  ['4', '/assets/How It Works 4.png', 'step-blue'],
];

export default function Steps({ t }) {
  return (
    <section id="how-it-works" className="steps-section">
      <div className="section-heading">
        <span>[ 3 ] {t.steps.section}</span>
        <h2>
          {t.steps.headingTop}
          <br />
          {t.steps.headingBottom}
        </h2>
      </div>

      <div className="steps-grid">
        {steps.map(([num, img, color], index) => (
          <article className={`step-card ${color}`} key={num}>
            <span className="step-num">{num}</span>
            <h3>{t.steps.items[index][0]}</h3>
            <p>{t.steps.items[index][1]}</p>
            <img src={img} alt="" />
          </article>
        ))}
      </div>
    </section>
  );
}
