import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;

  return (
    <div className="main ">
      <div className="now-playing lg:mb-[39px] mb-[5px] md:mb-[10px]">
        <h1 className="md:mb-[10px] mb-[5px] lg:text-[14.33px] md:text-[12px] xl:text-[20px] text-[12px] text-white font-semibold">
          {title}
        </h1>

        <div className="cards flex-center gap-2 overflow-x-scroll scrollbar-hidden scroll-smooth">
          {movies.map((movie) => (
            <MovieCard key={movie?.id} poster_path={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
