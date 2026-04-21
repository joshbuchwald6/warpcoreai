function Counter({ value, suffix = '', prefix = '', decimals = 0 }) {
  const [n, setN] = React.useState(0);
  const ref = React.useRef(null);
  const started = React.useRef(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1600;
        const start = performance.now();
        const animate = (t) => {
          const p = Math.min(1, (t - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(value * eased);
          if (p < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
        io.unobserve(el);
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  const formatted = decimals ? n.toFixed(decimals) : Math.round(n).toLocaleString();
  return (
    <span ref={ref}>
      {prefix}{formatted}<span className="suf">{suffix}</span>
    </span>
  );
}

function Sparkline({ seed = 0, up = true }) {
  const pts = React.useMemo(() => {
    const arr = [];
    for (let i = 0; i < 14; i++) {
      const base = up ? i / 13 : 1 - i / 13;
      const noise = (Math.sin(i * (seed + 1.1)) + 1) / 2 * 0.25;
      arr.push(base * 20 + noise * 10);
    }
    return arr;
  }, [seed, up]);
  const max = Math.max(...pts);
  const d = pts.map((v, i) => `${i === 0 ? 'M' : 'L'} ${i * 5} ${28 - (v / max) * 24}`).join(' ');
  return (
    <svg className="metric-spark" viewBox="0 0 70 30">
      <path d={d} stroke="oklch(0.82 0.14 215)" strokeWidth="1.2" fill="none"
            strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Outcomes() {
  const metrics = [
    { label: 'Throughput lift', value: 34, suf: '%', delta: '+12 pts vs prior year', desc: 'Bottlenecks identified and routed around before they stall production.' },
    { label: 'Quote accuracy', value: 97, suf: '%', delta: 'Margin slip reduced 3×', desc: 'Pricing driven by real part, machine, and operator history — not gut feel.' },
    { label: 'Scrap rate', value: 42, suf: '% ↓', delta: 'First-article pass +28%', desc: 'CMM outcomes loop back into toolpath and setup recommendations.' },
    { label: 'On-time delivery', value: 99.4, suf: '%', delta: 'From 91% baseline', decimals: 1, desc: 'Schedules that adapt to the real shop floor, not yesterday\'s plan.' },
  ];
  return (
    <section className="outcomes" id="outcomes">
      <div className="container">
        <Reveal><div className="section-label mono">
          <span className="rule" /><span className="num">05</span><span>Outcomes</span>
        </div></Reveal>
        <Reveal delay={0.1}><h2 className="section-title display">
          Measured in margin,<br/>not dashboards.
        </h2></Reveal>
        <Reveal delay={0.2}><p className="section-kicker">
          Aggregate results across WarpCore customers, first year in production.
        </p></Reveal>

        <div className="out-grid">
          {metrics.map((m, i) => (
            <Reveal key={i} delay={0.1 + i * 0.06} className="metric in-view">
              <Sparkline seed={i} up={i !== 2} />
              <div className="metric-label mono">{m.label}</div>
              <div className="metric-num display">
                <Counter value={m.value} suffix={m.suf} decimals={m.decimals || 0} />
              </div>
              <div className="metric-delta mono">{m.delta}</div>
              <div className="metric-desc">{m.desc}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Outcomes = Outcomes;
