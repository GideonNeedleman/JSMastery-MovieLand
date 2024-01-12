import { useEffect } from "react";
import { useMovie } from "./MovieContext";

function ErrorMessage() {
  const { error, searchTerm, dispatch } = useMovie();

  // display 'enter search term' msg when blank search bar
  useEffect(() => {
    if (searchTerm.length === 0)
      dispatch({ type: "error", payload: "Enter search term" });
  }, [dispatch, searchTerm.length]);

  return <h2 className="error">{error}</h2>;
}

export default ErrorMessage;
