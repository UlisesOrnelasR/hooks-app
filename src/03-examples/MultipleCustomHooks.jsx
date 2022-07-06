import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const { data, isLoading, hasError } = useFetch(
    "https://www.breakingbadapi.com/api/quotes/1"
  );

  return (
    <>
      <div>BreakingBad Quotes</div>
      <hr />
      {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-2">Hola mundo</p>
          <footer className="blockquote-footer">Ulises Ornelas</footer>
        </blockquote>
      )}
    </>
  );
};
