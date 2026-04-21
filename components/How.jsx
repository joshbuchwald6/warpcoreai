function How() {
  const ref = React.useRef(null);
  const [activeIdx, setActiveIdx] = React.useState(-1);
  const [rail, setRail] = React.useState(0);

  const steps = [
    { num: 'Step 01 · Ingest', title: 'Connect every signal, instantly.',
      desc: 'Read-only connectors to ERP, CAM, MES, CMM and monitoring. No rip-and-replace. Works with what you already run.',
      panel: [['Connectors', 'Epicor · HxGN · Mastercam · MachineMetrics'], ['Latency', '< 200ms'], ['Mode', 'Read-only bootstrap']] },
    { num: 'Step 02 · Learn', title: 'Model your shop, not an average one.',
      desc: 'A private model of your parts, machines, operators, and customers — trained on your history, isolated in your tenant.',
      panel: [['Tenancy', 'Single · isolated'], ['Data residency', 'Your cloud or on-prem'], ['Retraining', 'Hourly · incremental']] },
    { num: 'Step 03 · Recommend', title: 'Act where it matters.',
      desc: 'Quote pricing, scheduling moves, tool life calls, inspection priorities. Every suggestion is ranked, reasoned, and reversible.',
      panel: [['Surface', 'Inline · API · Slack'], ['Explainability', 'Every call audited'], ['Override', 'Always human-in-loop']] },
    { num: 'Step 04 · Improve', title: 'Compound every job.',
      desc: 'Outcomes feed back into the model. Quote accuracy, cycle time, scrap rate — all learning, continuously.',
      panel: [['Feedback loop', 'Closed · per-part'], ['Review cadence', 'Weekly · automated'], ['KPIs tracked', '40+ by default']] },
  ];

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.7;
      const end = vh * 0.2;
      const total = rect.height;
      const scrolled = Math.max(0, Math.min(total, start - rect.top));
      const pct = Math.min(1, scrolled / (total - (start - end)));
      setRail(pct * 100);
      const idx = Math.min(steps.length - 1, Math.floor(pct * steps.length * 1.2));
      setActiveIdx(idx);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="how" id="how">
      <div className="container">
        <Reveal><div className="section-label mono">
          <span className="rule" /><span className="num">03</span><span>How it works</span>
        </div></Reveal>
        <Reveal delay={0.1}><h2 className="section-title display">
          Four steps. One continuous loop.
        </h2></Reveal>
        <Reveal delay={0.2}><p className="section-kicker">
          Deployments start in days, not quarters — and get smarter every shift.
        </p></Reveal>

        <div className="how-steps" ref={ref}>
          <div className="how-rail">
            <div className="how-rail-fill" style={{ height: `${rail}%` }} />
          </div>
          {steps.map((s, i) => (
            <div key={i} className={`step ${i <= activeIdx ? 'active' : ''}`}>
              <div className="step-dot" />
              <Reveal delay={0.05}><div className="step-num mono">{s.num}</div></Reveal>
              <Reveal delay={0.1}><h3 className="display">{s.title}</h3></Reveal>
              <Reveal delay={0.15}><p>{s.desc}</p></Reveal>
              <Reveal delay={0.2}><div className="step-panel">
                {s.panel.map(([k, v], j) => (
                  <div className="kv" key={j}>
                    <div className="k">{k}</div>
                    <div className={`v ${j === 0 ? 'cy' : ''}`}>{v}</div>
                  </div>
                ))}
              </div></Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.How = How;
