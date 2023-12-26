import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSuggestions = () => {
  const movieNames = useSelector((store) => store.gpt.gptMovieArray);
  const movieData = useSelector((store) => store.gpt.gptMovieData);
  if (!movieNames || !movieData) return null;

  return (
    <div className="suggestions-main bg-black h-full pb-[39px] shadow-2xl">
      <div className="movie-list -mt-[22rem] ml-[51px] relative">
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
