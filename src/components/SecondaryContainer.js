import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  if (!movies) return;

  return (
    <div className="secondary-main bg-black ">
      <div className="movie-lists ml-[51px] -mt-[15rem] pb-[39px] z-50 relative">
        <MovieList title={"Now Playing"} movies={movies} />
        <MovieList title={"Now Playing"} movies={movies} />
        <MovieList title={"Now Playing"} movies={movies} />
        <MovieList title={"Now Playing"} movies={movies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
