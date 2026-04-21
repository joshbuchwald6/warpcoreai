function SolutionViz() {
  return (
    <div className="solution-viz">
      <svg width="100%" height="100%" viewBox="0 0 1200 520" preserveAspectRatio="xMidYMid meet"
           style={{ position: 'absolute', inset: 0 }}>
        <defs>
          <linearGradient id="sv-line" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="oklch(0.82 0.14 215 / 0)"/>
            <stop offset="0.5" stopColor="oklch(0.82 0.14 215 / 0.7)"/>
            <stop offset="1" stopColor="oklch(0.82 0.14 215 / 0)"/>
          </linearGradient>
          <radialGradient id="sv-core">
            <stop offset="0" stopColor="oklch(0.88 0.14 215)"/>
            <stop offset="0.6" stopColor="oklch(0.5 0.15 240)"/>
            <stop offset="1" stopColor="oklch(0.2 0.08 250)"/>
          </radialGradient>
        </defs>

        {/* Input streams (left) → core */}
        {[130, 190, 250, 310, 370].map((y, i) => (
          <path key={'in' + i}
            d={`M 100 ${y} C 350 ${y}, 450 260, 600 260`}
            stroke="url(#sv-line)" strokeWidth="1.2" fill="none"
            strokeDasharray="3 6"
            style={{ animation: `flow 3s linear infinite`, animationDelay: `${i * 0.3}s` }}
          />
        ))}
        {/* Output streams (right) */}
        {[160, 230, 300, 370].map((y, i) => (
          <path key={'out' + i}
            d={`M 600 260 C 780 260, 860 ${y}, 1100 ${y}`}
            stroke="url(#sv-line)" strokeWidth="1.2" fill="none"
            strokeDasharray="3 6"
            style={{ animation: `flow 3s linear infinite reverse`, animationDelay: `${i * 0.25}s` }}
          />
        ))}

        {/* Input labels */}
        {[
          ['ERP', 130], ['CAM', 190], ['Machines', 250], ['CMM', 310], ['Planning', 370]
        ].map(([t, y], i) => (
          <g key={'il' + i} transform={`translate(60 ${y})`}>
            <circle cx="0" cy="0" r="4" fill="oklch(0.82 0.14 215)" filter="drop-shadow(0 0 4px oklch(0.82 0.14 215))"/>
            <text x="-12" y="4" textAnchor="end" fill="oklch(0.72 0.015 240)" fontSize="11" fontFamily="JetBrains Mono" letterSpacing="0.12em">{t}</text>
          </g>
        ))}

        {/* Output labels */}
        {[
          ['Quotes', 160], ['Schedules', 230], ['Alerts', 300], ['Forecasts', 370]
        ].map(([t, y], i) => (
          <g key={'ol' + i} transform={`translate(1140 ${y})`}>
            <circle cx="0" cy="0" r="4" fill="oklch(0.55 0.18 290)" filter="drop-shadow(0 0 4px oklch(0.55 0.18 290))"/>
            <text x="12" y="4" fill="oklch(0.72 0.015 240)" fontSize="11" fontFamily="JetBrains Mono" letterSpacing="0.12em">{t}</text>
          </g>
        ))}

        {/* Core */}
        <g transform="translate(600 260)">
          <circle r="80" fill="url(#sv-core)" opacity="0.6" />
          <circle r="60" fill="none" stroke="oklch(0.82 0.14 215 / 0.5)" strokeDasharray="2 4"
                  style={{ transformOrigin: 'center', animation: 'coreRotate 20s linear infinite' }} />
          <circle r="44" fill="oklch(0.15 0.05 250)" stroke="oklch(0.82 0.14 215 / 0.8)" strokeWidth="1"/>
          <text textAnchor="middle" y="-2" fill="#fff" fontSize="11" fontFamily="Space Grotesk" letterSpacing="0.15em">WARPCORE</text>
          <text textAnchor="middle" y="14" fill="oklch(0.82 0.14 215)" fontSize="9" fontFamily="JetBrains Mono" letterSpacing="0.1em">CO-MANAGER</text>
        </g>
      </svg>
    </div>
  );
}

function Solution() {
  const pillars = [
    { num: 'I', title: 'Unified data plane', desc: 'One continuously learning layer across ERP, CAM, MES, monitoring, and quality — no more stranded tables.' },
    { num: 'II', title: 'Decision co-pilot', desc: 'Recommends quotes, schedules, tool changes and routing in real time. Humans still sign.' },
    { num: 'III', title: 'Closed-loop learning', desc: 'Every job refines the next. Tribal knowledge becomes compounding intelligence.' },
  ];
  return (
    <section className="solution" id="solution">
      <div className="container">
        <Reveal><div className="section-label mono">
          <span className="rule" /><span className="num">02</span><span>The Solution</span>
        </div></Reveal>
        <Reveal delay={0.1}><h2 className="section-title display">
          One operating layer.<br/>From quote to delivery.
        </h2></Reveal>
        <Reveal delay={0.2}><p className="section-kicker">
          WarpCore AI is a co-manager that sits across your existing stack —
          aligning every system, every shift, every decision.
        </p></Reveal>

        <Reveal delay={0.3}><SolutionViz /></Reveal>

        <div className="solution-pillars">
          {pillars.map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.08} className="pillar">
              <div className="pillar-num mono">{p.num}</div>
              <h3 className="display">{p.title}</h3>
              <p>{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Solution = Solution;
