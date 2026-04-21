function FinalCTA() {
  const rays = Array.from({ length: 24 }).map((_, i) => {
    const a = (i / 24) * Math.PI * 2;
    const x2 = 900 + Math.cos(a) * 900;
    const y2 = 900 + Math.sin(a) * 900;
    return <line key={i} x1="900" y1="900" x2={x2} y2={y2} />;
  });
  return (
    <section className="final-cta" id="cta">
      <div className="final-rays">
        <svg viewBox="0 0 1800 1800">{rays}</svg>
      </div>
      <div className="container final-content">
        <Reveal><div className="section-label mono" style={{ justifyContent: 'center' }}>
          <span className="rule" /><span className="num">07</span><span>Start</span><span className="rule" />
        </div></Reveal>
        <Reveal delay={0.1}><h2>
          Profits at every size.<br/>
          <span style={{ background: 'linear-gradient(180deg, oklch(0.88 0.14 215), oklch(0.6 0.17 255))', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
            Intelligence at every shift.
          </span>
        </h2></Reveal>
        <Reveal delay={0.2}><p>
          See WarpCore AI running against a sample of your own data. Deployments start in days — not quarters.
        </p></Reveal>
        <Reveal delay={0.3}><div className="final-ctas">
          <a className="btn btn-primary" href="#">
            Request Demo
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a className="btn btn-ghost" href="#">Talk to engineering</a>
        </div></Reveal>
      </div>
    </section>
  );
}
window.FinalCTA = FinalCTA;
