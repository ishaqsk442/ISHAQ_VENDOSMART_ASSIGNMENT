import React from "react";

const MoviesListContext = React.createContext({
  searchInput: "",
  latestRelease: () => {},
  changeSearchInput: () => {},
  moviesList: [],
  changeMoviesList: () => {},
  pageNumber: 1,
  increasePageNumber: () => {},
  decreasePageNumber: () => {},
  getResults: () => {},
  ChangeRating: () => {},
});

export default MoviesListContext;
