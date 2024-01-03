import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import GptShimmer from "./GptShimmer";

const GptSuggestions = () => {
  const movieNames = useSelector((store) => store.gpt.gptMovieArray);
  const movieData = useSelector((store) => store.gpt.gptMovieData);

  return !movieNames || !movieData ? (
    <GptShimmer />
  ) : (
    <div className="suggestions-main bg-black h-full pb-[39px] shadow-2xl">
      <div className="movie-list md:-mt-[20rem] -mt-[20rem] md:ml-[51px] ml-[21px] relative">
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieData[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptSuggestions;
