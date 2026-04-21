function Vision() {
  return (
    <section className="vision" id="vision">
      <div className="container vision-content">
        <Reveal><div className="section-label mono" style={{ justifyContent: 'center' }}>
          <span className="rule" /><span className="num">06</span><span>Vision</span><span className="rule" />
        </div></Reveal>
        <Reveal delay={0.15}><p className="vision-quote display">
          The next decade of manufacturing won't be built by adding more dashboards.
          It will be built by systems that <em>think alongside</em> the people running the floor.
        </p></Reveal>
        <Reveal delay={0.3}><p className="mono" style={{ marginTop: 40, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-mute)' }}>
          — WarpCore AI · Founding Thesis · 2024
        </p></Reveal>
      </div>
    </section>
  );
}
window.Vision = Vision;
