function Problem() {
  const ref = React.useRef(null);
  const [reconnected, setReconnected] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      // reconnect as user scrolls past problem into solution
      const rect = el.getBoundingClientRect();
      const progress = 1 - (rect.bottom / window.innerHeight);
      if (progress > 0.5) setReconnected(true);
    }, { threshold: [0, 0.25, 0.5, 0.75, 1] });
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const progress = 1 - (rect.bottom / window.innerHeight);
      setReconnected(progress > 0.35);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const fragments = [
    { cls: 'f1', label: 'ERP', title: 'Quotes stuck in spreadsheets', desc: 'Margins guessed, not modeled. Revisions lost in email.', icon: '◩' },
    { cls: 'f2', label: 'CAM', title: 'Toolpaths disconnected from the floor', desc: 'Programs ship blind to actual machine state.', icon: '≋' },
    { cls: 'f3', label: 'MES', title: 'Schedules obsolete by 9am', desc: 'Static plans meet live chaos.', icon: '▤' },
    { cls: 'f4', label: 'QUALITY', title: 'Inspection data stranded', desc: 'CMM reports never reach the programmer.', icon: '◇' },
    { cls: 'f5', label: 'MONITORING', title: 'Downtime visible, never actioned', desc: 'Dashboards without decisions.', icon: '◉' },
    { cls: 'f6', label: 'DELIVERY', title: 'Customer promises slip silently', desc: 'Delays surface only at shipment.', icon: '◬' },
  ];

  return (
    <section className="problem" id="problem" ref={ref}>
      <div className="container">
        <Reveal><div className="section-label mono">
          <span className="rule" /><span className="num">01</span><span>The Problem</span>
        </div></Reveal>
        <Reveal delay={0.1}><h2 className="section-title display">
          Modern shops run on <br/>disconnected islands of data.
        </h2></Reveal>
        <Reveal delay={0.2}><p className="section-kicker">
          Every quote, toolpath, inspection, and delivery lives in its own tool.
          Decisions take hours. Knowledge walks out the door. Margins leak.
        </p></Reveal>

        <div className={`problem-grid ${reconnected ? 'reconnected' : ''}`}>
          {fragments.map((f, i) => (
            <Reveal key={i} delay={0.1 + i * 0.05} className={`fragment ${f.cls} ${reconnected ? 'reconnected' : ''}`}>
              <div>
                <div className="fragment-icon mono">{f.icon}</div>
                <div className="fragment-label mono">{f.label}</div>
                <div className="fragment-title display">{f.title}</div>
                <div className="fragment-desc">{f.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Problem = Problem;
