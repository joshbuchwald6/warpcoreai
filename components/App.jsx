function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <How />
      <Integrations />
      <Outcomes />
      <Vision />
      <FinalCTA />
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
