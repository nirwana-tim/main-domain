const labels = [
  ['voice', '♪', 'label-voice'],
  ['waste', '▦', 'label-waste'],
  ['delivery', '◷', 'label-delivery'],
  ['pause', '↙', 'label-pause'],
  ['eye', '◉', 'label-eye'],
];

export default function PhoneSimulator({ t }) {
  return (
    <section id="gameplay" className="gameplay-section">
      <div className="gameplay-inner">
        <div className="mini-logo">
          <img src="/assets/logo.png" alt="" />
          <span>Press Up</span>
        </div>
        <img className="phone-mockup" src="/assets/Mockup.png" alt="Press Up gameplay phone mockup" />
        {labels.map(([key, icon, className]) => (
          <div className={`floating-label ${className}`} key={key}>
            <span>{icon}</span>
            {t.gameplay[key]}
          </div>
        ))}
      </div>
    </section>
  );
}
