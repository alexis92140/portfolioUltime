/* eslint-disable jsx-a11y/control-has-associated-label */
import "./App.scss";
import { useState } from "react";

const Doors = () => {
  const [locked, setLocked] = useState(true);
  const [hidden, setHidden] = useState(false);

  return (
    <div className="doors">
      <div className={locked ? "elm lock" : "elm lock lock--opened"}>
        <div
          onClick={() => setLocked(false)}
          onKeyDown={() => setLocked(false)}
          role="button"
          className="elm"
          tabIndex={0}
        >
          <div
            onClick={() => setHidden(true)}
            onKeyDown={() => setHidden(true)}
            role="button"
            tabIndex={0}
            className={hidden ? "elmhidden" : "elm --opened"}
          />

          <div
            onClick={() => setHidden(true)}
            onKeyDown={() => setHidden(true)}
            role="button"
            tabIndex={0}
            className={hidden ? "elmhidden" : "elm --opened"}
          />
        </div>
      </div>
      <div
        className={
          locked
            ? "elm sliding-door sliding-door--left"
            : "elm sliding-door sliding-door--left sliding-door--left--opened"
        }
      />
      <div
        className={
          locked
            ? "elm sliding-door sliding-door--right"
            : "elm sliding-door sliding-door--right sliding-door--right--opened"
        }
      />
    </div>
  );
};

export default Doors;
