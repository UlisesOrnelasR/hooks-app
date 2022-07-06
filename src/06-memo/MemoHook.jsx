import { useCounter } from "../hooks/useCounter";
import { useMemo, useState } from "react";

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("Ahi vamos...");
  }
  return `${iterationNumber} iterations done`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(4000);
  const [show, setShow] = useState(true);
  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>
        <small>Counter: {counter}</small>
      </h1>
      <hr />

      <h4>{memorizedValue}</h4>
      <button className="btn btn-warning btn-sm" onClick={() => increment(1)}>
        +1
      </button>
      <button className="btn btn-success" onClick={() => setShow(!show)}>
        Show/Hide <strong className="text-dark">{JSON.stringify(show)}</strong>
      </button>
    </>
  );
};
