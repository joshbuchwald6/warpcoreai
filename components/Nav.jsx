function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#top" aria-label="WarpCore AI" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <img src="assets/warpcore-logo.svg" alt="WarpCore" className="nav-logo" style={{ filter: 'brightness(0) invert(1)' }}/>
      </a>
      <div className="nav-links">
        <a className="nav-link" href="#problem">Problem</a>
        <a className="nav-link" href="#solution">Platform</a>
        <a className="nav-link" href="#how">How it works</a>
        <a className="nav-link" href="#integrations">Integrations</a>
        <a className="nav-link" href="#outcomes">Outcomes</a>
        <a className="nav-cta" href="#cta">Request Demo →</a>
      </div>
    </nav>
  );
}
window.Nav = Nav;
