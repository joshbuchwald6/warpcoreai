function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="hero-vignette" />
      </div>

      <div className="container hero-content">
        <Reveal><div className="hero-eyebrow mono">
          <span className="dot" /> Native AI Manufacturing · v4.2
        </div></Reveal>

        <Reveal delay={0.1}><h1 className="display">
          <span className="grad">Autonomous intelligence</span><br/>
          <span className="grad">for modern </span><span className="accent">manufacturing</span>.
        </h1></Reveal>

        <Reveal delay={0.2}><p className="hero-sub">
          WarpCore AI connects ERP, CAM, machine monitoring, quality, and production
          workflows into one continuously learning operating layer — from quote to delivery.
        </p></Reveal>

        <Reveal delay={0.3}><div className="hero-ctas">
          <a className="btn btn-primary" href="#cta">
            Request Demo
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a className="btn btn-ghost" href="#how">
            See How It Works
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <span className="hero-meta mono">SOC 2 · ISO 27001 · On-prem ready</span>
        </div></Reveal>

        <div className="hero-stats">
          <Reveal delay={0.4} className="hero-stat">
            <div className="hero-stat-num">34<span className="unit">%</span></div>
            <div className="hero-stat-label mono">Avg. throughput lift</div>
          </Reveal>
          <Reveal delay={0.45} className="hero-stat">
            <div className="hero-stat-num">11<span className="unit">d</span></div>
            <div className="hero-stat-label mono">Median deploy time</div>
          </Reveal>
          <Reveal delay={0.5} className="hero-stat">
            <div className="hero-stat-num">200+</div>
            <div className="hero-stat-label mono">Integrations</div>
          </Reveal>
          <Reveal delay={0.55} className="hero-stat">
            <div className="hero-stat-num">24<span className="unit">/7</span></div>
            <div className="hero-stat-label mono">Continuous learning</div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
