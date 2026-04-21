function Integrations() {
  const nodes = [
    { name: 'Epicor', cat: 'ERP', x: 14, y: 22 },
    { name: 'SAP', cat: 'ERP', x: 86, y: 20 },
    { name: 'Mastercam', cat: 'CAM', x: 8, y: 50 },
    { name: 'Fusion 360', cat: 'CAM', x: 92, y: 50 },
    { name: 'MachineMetrics', cat: 'Monitoring', x: 18, y: 78 },
    { name: 'Hexagon', cat: 'Quality', x: 82, y: 78 },
    { name: 'PolyWorks', cat: 'Quality', x: 50, y: 14 },
    { name: 'Plex MES', cat: 'MES', x: 50, y: 86 },
    { name: 'NetSuite', cat: 'ERP', x: 30, y: 35 },
    { name: 'Siemens NX', cat: 'CAM', x: 70, y: 35 },
    { name: 'ProShop', cat: 'ERP', x: 30, y: 65 },
    { name: 'Zeiss CALYPSO', cat: 'Quality', x: 70, y: 65 },
  ];

  // build connection lines from core (50,50) to each node, in pct coords
  const stageRef = React.useRef(null);
  const [dims, setDims] = React.useState({ w: 1000, h: 640 });
  React.useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      setDims({ w: el.clientWidth, h: el.clientHeight });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <section className="integrations" id="integrations">
      <div className="container">
        <Reveal><div className="section-label mono">
          <span className="rule" /><span className="num">04</span><span>Integrations</span>
        </div></Reveal>
        <Reveal delay={0.1}><h2 className="section-title display">
          Plugs into your stack.<br/>Talks to everything.
        </h2></Reveal>
        <Reveal delay={0.2}><p className="section-kicker">
          200+ native connectors across ERP, CAM, machine monitoring, and quality.
          No rip-and-replace — WarpCore listens, enriches, and routes.
        </p></Reveal>

        <Reveal delay={0.3}><div className="int-stage" ref={stageRef}>
          <svg className="int-svg" viewBox={`0 0 ${dims.w} ${dims.h}`} preserveAspectRatio="none">
            <defs>
              <linearGradient id="int-l" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="oklch(0.82 0.14 215 / 0)"/>
                <stop offset="0.5" stopColor="oklch(0.82 0.14 215 / 0.5)"/>
                <stop offset="1" stopColor="oklch(0.82 0.14 215 / 0)"/>
              </linearGradient>
            </defs>
            {nodes.map((n, i) => {
              const x1 = dims.w * 0.5, y1 = dims.h * 0.5;
              const x2 = dims.w * n.x / 100, y2 = dims.h * n.y / 100;
              return (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                      stroke="url(#int-l)" strokeWidth="1" strokeDasharray="3 5"
                      style={{ animation: `flow 4s linear infinite`, animationDelay: `${i * 0.2}s` }}/>
              );
            })}
          </svg>

          <div className="int-core">
            <div className="int-core-ring r3" />
            <div className="int-core-ring r2" />
            <div className="int-core-ring" />
            <div className="int-core-inner">
              <div className="int-core-label">
                <strong className="display">WarpCore</strong>
                Operating Layer
              </div>
            </div>
            <div className="int-pulse" />
            <div className="int-pulse p2" />
            <div className="int-pulse p3" />
          </div>

          {nodes.map((n, i) => (
            <div key={i} className="int-node" style={{ left: `${n.x}%`, top: `${n.y}%`, animationDelay: `${(i * 0.4) % 4}s` }}>
              <span className="idot" />
              <span>{n.name}</span>
              <span className="icat mono">{n.cat}</span>
            </div>
          ))}
        </div></Reveal>

        <Reveal delay={0.1}><div className="int-legend mono">
          <div className="int-legend-item"><span className="sw" /> Bi-directional signal</div>
          <div className="int-legend-item"><span className="sw" style={{ background: 'oklch(0.55 0.18 290)' }} /> Enrichment stream</div>
          <div className="int-legend-item"><span className="sw" style={{ background: 'oklch(0.65 0.18 255)' }} /> Governance envelope</div>
        </div></Reveal>
      </div>
    </section>
  );
}
window.Integrations = Integrations;
