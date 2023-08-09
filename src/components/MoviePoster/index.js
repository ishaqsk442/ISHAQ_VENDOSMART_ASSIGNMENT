import {
  MoviePosterCont,
  PosterImg,
  Heading,
  ReleaseRatingCont,
  ReleaseDate,
  Overview,
} from "./styledComponents";

import "./index.css";

const MoviePoster = (props) => {
  const { movieDetails } = props;

  const {
    title,
    posterPath,
    releaseDate,
    overview,
    voteAverage,
  } = movieDetails;

  const imgKeyUrl = "https://image.tmdb.org/t/p/w500";
  const posterImg = imgKeyUrl + posterPath;

  const rating = voteAverage.toFixed(1);
  //   console.log(rating);

  let ratingClass = null;
  if (rating >= 8) {
    ratingClass = "good";
  } else if (rating >= 5) {
    ratingClass = "average";
  } else {
    ratingClass = "bad";
  }
  return (
    <MoviePosterCont>
      <PosterImg src={posterImg} alt={title} />
      <div className="large-screen">
        <Heading>{title}</Heading>
        <ReleaseRatingCont>
          <ReleaseDate>
            <span className="date">Release date</span>
            <br />
            {releaseDate}
          </ReleaseDate>
          <p>
            <span className="rating">Rating</span>
            <br />
            <span className={ratingClass}>{rating}</span>
          </p>
        </ReleaseRatingCont>
        <Overview>{overview}</Overview>
      </div>
    </MoviePosterCont>
  );
};
export default MoviePoster;
