import arrow from "./assets/up-arrow.svg";

function ScrollToTop() {
  return (
    <button className="scroll-to-top" onClick={() => window.scrollTo(0, 0)}>
      <img src={arrow} alt="" />
    </button>
  );
}

export default ScrollToTop;
