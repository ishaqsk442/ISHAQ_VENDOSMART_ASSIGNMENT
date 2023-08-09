import MoviesCard from "../MoviesCard";
import MoviesListContext from "../../context/MoviesListContext";
const Movies = () => (
  <MoviesListContext.Consumer>
    {(value) => {
      const { moviesList } = value;

      return (
        <div className="main">
          <MoviesCard moviesList={moviesList} />
        </div>
      );
    }}
  </MoviesListContext.Consumer>
);

export default Movies;
