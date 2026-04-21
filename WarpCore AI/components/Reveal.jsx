function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { setShown(true); io.unobserve(el); }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? 'in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
window.Reveal = Reveal;
