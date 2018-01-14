import React from "react";
import PropTypes from "prop-types";
import LinesEllipsis from "react-lines-ellipsis";
import "./Movie.css";

function Movie({ title, poster, genres, synopsis, rating }) {
  return (
    <div className="movie">
      <div className="movie_columns">
        <MoviePoster poster={poster} alt={title} />
      </div>
      <div className="movie_columns">
        <h1>{title}</h1>
        <div className="movie_genres">
          {genres.map((genre, index) => (
            <MovieGenre genre={genre} key={index} />
          ))}
        </div>
        <div className="movie_rating">
          <MovieRating rating={rating} />
        </div>
        <div className="movie_synopsis">
          <MovieSynopsis synopsis={synopsis} />
        </div>
      </div>
    </div>
  );
}

const star = ["★", "★★", "★★★", "★★★★", "★★★★★"];
const star_space = ["★★★★", "★★★", "★★", "★", ""];

function MoviePoster({ poster, alt }) {
  return <img className="movie_poster" src={poster} alt={alt} />;
}

function MovieGenre({ genre }) {
  return <span className="movie_genre">{genre}</span>;
}

function MovieRating({ rating }) {
  let i = Math.round(Number(rating) / 2) - 1;

  return (
    <p className="movie_stars">
      <span className="movie_star">{star[i]}</span>
      <span className="movie_star_space">{star_space[i]}</span>
    </p>
  );
}

function MovieSynopsis({ synopsis }) {
  return (
    <LinesEllipsis
      text={synopsis}
      maxLine="3"
      ellipsis="..."
      trimRight
      basedOn="letters"
    />
  );
}

Movie.propType = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};
MoviePoster.propType = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};
MovieGenre.propType = {
  genre: PropTypes.string.isRequired
};

export default Movie;
