function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div>
            <img src="assets/warpcore-logo.svg" alt="WarpCore" style={{ height: 20, filter: 'brightness(0) invert(1)', opacity: 0.9 }}/>
            <p className="foot-brand-text">
              Native AI Manufacturing. AI Co-Manager Software empowering profits at all sizes.
            </p>
          </div>
          <div className="foot-col">
            <h4 className="mono">Platform</h4>
            <a href="#">Co-Manager</a>
            <a href="#">Quoting Engine</a>
            <a href="#">Scheduler</a>
            <a href="#">Quality Loop</a>
            <a href="#">Integrations</a>
          </div>
          <div className="foot-col">
            <h4 className="mono">Company</h4>
            <a href="#">About</a>
            <a href="#">Customers</a>
            <a href="#">Security</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
          </div>
          <div className="foot-col">
            <h4 className="mono">Resources</h4>
            <a href="#">Docs</a>
            <a href="#">Changelog</a>
            <a href="#">Field Reports</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="foot-bottom mono">
          <div>© 2026 WarpCore AI, Inc. All rights reserved.</div>
          <div className="foot-status"><span className="dot" /> All systems nominal · v4.2.1</div>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
