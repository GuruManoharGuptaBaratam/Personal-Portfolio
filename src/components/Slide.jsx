import React from "react";

function Slide({ title, active, position, children }) {
  const classes = ["slide"];

  if (active) {
    classes.push("slide--active");
  } else if (position < 0) {
    classes.push("slide--left");
  } else if (position > 0) {
    classes.push("slide--right");
  }

  return (
    <section
      className={classes.join(" ")}
      aria-hidden={!active}
      aria-label={title}
    >
      <div className="slide-inner">{children}</div>
    </section>
  );
}

export default Slide;

