import { MovieCardContainer } from "./styledComponents";

import MoviePoster from "../MoviePoster";

const MoviesCard = (props) => {
  const { moviesList } = props;
  return (
    <MovieCardContainer>
      {moviesList.map((eachMovie) => (
        <MoviePoster movieDetails={eachMovie} key={eachMovie.id} />
      ))}
    </MovieCardContainer>
  );
};
export default MoviesCard;
