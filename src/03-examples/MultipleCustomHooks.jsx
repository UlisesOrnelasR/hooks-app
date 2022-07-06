import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const { data, isLoading, hasError } = useFetch(
    "https://www.breakingbadapi.com/api/quotes/1"
  );
  console.log(data, isLoading, hasError);
  return (
    <>
      <div>BreakingBad Quotes</div>
      <hr />
    </>
  );
};
