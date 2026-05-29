export default function Stats({ t }) {
  return (
    <section id="exploration" className="stats-wrap" aria-label="Press Up statistics">
      <div className="stats-card">
        <h2>{t.stats.title}</h2>
        <div className="stat-item">
          <strong>10K+</strong>
          <span>{t.stats.totalUsers}</span>
        </div>
        <div className="stat-item">
          <strong>8K+</strong>
          <span>{t.stats.dailyUsers}</span>
        </div>
        <div className="stat-item">
          <strong>5.0</strong>
          <span>{t.stats.rating}</span>
        </div>
      </div>
    </section>
  );
}
