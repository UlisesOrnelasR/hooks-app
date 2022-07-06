import { LoadingQuote, Quote } from "./../03-examples";
import { useCounter, useFetch } from "../hooks";

export const Layout = () => {
  const { counter, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];
  return (
    <>
      <div>BreakingBad Quotes</div>
      <hr />
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
