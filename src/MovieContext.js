import { createContext, useContext, useReducer } from "react";

const MovieContext = createContext();

const initialState = {
  movies: [], //array of movie results
  favorites: [], //array of favorited movies, also in localstorage
  searchTerm: "", //the search term
  error: "", //error message
  maxPages: null, //track total pages from fetch results
  currentPage: null, //track current page
  savedTitle: null, //searched title, saved for loading future pages. Otherwise changing searchTerm can cause additional pages to load from new searchTerm. Workaround is clearing movies if searchTerm changes.
};

function reducer() {}

function MovieProvider({ children }) {
  const [
    { movies, favorites, searchTerm, error, maxPages, currentPage, savedTitle },
    dispatch,
  ] = useReducer(reducer, initialState);

  // need useEffect to load & save favorites to localstorage

  return (
    <MovieContext.Provider value={{ movies, favorites }}>
      {children}
    </MovieContext.Provider>
  );
}

function useMovie() {
  const context = useContext(MovieContext);
  if (context === undefined)
    throw new Error("useMovie was used outside of MovieProvider");
  return context;
}

export { MovieProvider, useMovie };
