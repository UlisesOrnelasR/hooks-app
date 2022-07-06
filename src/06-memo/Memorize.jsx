import { useCounter } from "./../hooks/useCounter";
import { useState } from "react";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, increment } = useCounter(0);

  const [show, setShow] = useState(true);

  return (
    <>
      <h1>
        <Small value={counter} />
      </h1>
      <hr />
      <button className="btn btn-warning btn-sm" onClick={() => increment(1)}>
        +1
      </button>

      <button className="btn btn-success" onClick={() => setShow(!show)}>
        Show/Hide <strong className="text-dark">{JSON.stringify(show)}</strong>
      </button>
    </>
  );
};
