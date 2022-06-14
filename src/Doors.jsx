import "./App.scss";

import { useState } from "react";

const Doors = () => {
  const [locked, setLocked] = useState(true);
  return (
    <div className="doors">
      <div className={locked ? "elm lock" : "elm opened"}>
        <div
          onClick={() => setLocked(false)}
          onKeyDown={() => setLocked(false)}
          role="button"
          className="elm"
          tabIndex={0}
        >
          <div className="elm" />
          <div className="elm" />
        </div>
      </div>
      <div
        className={
          locked
            ? "elm sliding-door sliding-door--left"
            : "elm sliding-door sliding-door--left opened"
        }
      />
      <div
        className={
          locked
            ? "elm sliding-door sliding-door--right"
            : "elm sliding-door sliding-door--right opened"
        }
      />
    </div>
  );
};

export default Doors;
