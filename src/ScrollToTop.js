function ScrollToTop() {
  return (
    <div className="scroll-to-top" onClick={() => window.scrollTo(0, 0)}>
      🔝
    </div>
  );
}

export default ScrollToTop;
