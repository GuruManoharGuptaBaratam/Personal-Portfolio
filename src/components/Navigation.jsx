import React from "react";

function Navigation({ onNext, onPrev, disableNext, disablePrev }) {
  return (
    <div className="navigation">
      <div className="navigation-hint">
        <span>Use</span>
        <span className="hint-key">&larr;</span>
        <span>/</span>
        <span className="hint-key">&rarr;</span>
        <span>keys</span>
      </div>
      <div className="navigation-arrows">
        <button
          type="button"
          className="nav-button"
          onClick={onPrev}
          disabled={disablePrev}
          aria-label="Previous slide"
        >
          &larr;
        </button>
        <button
          type="button"
          className="nav-button"
          onClick={onNext}
          disabled={disableNext}
          aria-label="Next slide"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}

export default Navigation;

