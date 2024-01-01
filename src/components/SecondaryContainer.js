import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import { lang } from "../utils/lang";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const langKey = useSelector((store) => store.config.lang);

  if (!movies) return;

  return (
    <div className="secondary-main bg-black ">
      <div className="movie-lists ml-[51px] md:-mt-[15rem] pb-[39px] z-50 relative">
        <MovieList
          title={lang[langKey].nowPlaying}
          movies={movies?.nowPlayingMovies}
        />
        <MovieList
          title={lang[langKey].topRated}
          movies={movies?.topRatedMovies}
        />
        <MovieList
          title={lang[langKey].upcoming}
          movies={movies?.upcomingMovies}
        />
        <MovieList
          title={lang[langKey].popular}
          movies={movies?.popularMovies}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
