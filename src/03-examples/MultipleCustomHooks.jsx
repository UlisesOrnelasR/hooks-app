import { LoadingQuote, Quote } from "./";
import { useCounter, useFetch } from "../hooks";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];
  return (
    <>
      {isLoading ? <LoadingQuote /> : <Quote quote={quote} author={author} />}

      <button
        className="btn btn-primary"
        onClick={() => increment(1)}
        disabled={isLoading}
      >
        Next quote
      </button>
    </>
  );
};
