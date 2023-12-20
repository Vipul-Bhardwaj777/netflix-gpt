import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="main ">
      <div className="now-playing mb-[39px]">
        <h1 className="mb-[14px] text-[17.92px] text-white font-semibold">
          {title}
        </h1>

        <div className="cards flex-center gap-2 overflow-x-scroll scrollbar-hidden">
          {movies.map((movie) => (
            <MovieCard poster_path={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
