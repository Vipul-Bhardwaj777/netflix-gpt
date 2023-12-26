import React, { useRef } from "react";
import { API_OPTIONS, LOGIN_BG } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { lang } from "../utils/lang";
import openai from "../utils/openAI";
import {
  addGptMovieData,
  addGptMovieNames,
  removeGptMovies,
} from "../utils/gptSlice";

const GptSearch = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const fetchGptMoviesData = async (movieName) => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );

      const json = await data.json();
      return json?.results;
    } catch (error) {
      alert(error);
    }
  };

  const handleGptSearch = async () => {
    if (!searchText.current.value) {
      dispatch(removeGptMovies());
      return;
    }
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give me names of five movies, comma separated like the given example ahead. Example: movie1, movie2, movie3, movie4, movie5";

    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const gptMovieArray = gptResult.choices[0]?.message?.content.split(", ");
    dispatch(addGptMovieNames(gptMovieArray));

    const MovieDataPromiseArray = gptMovieArray.map((movie) =>
      fetchGptMoviesData(movie)
    );

    const gptSearchMoviesData = await Promise.all(MovieDataPromiseArray);
    dispatch(addGptMovieData(gptSearchMoviesData));
    searchText.current.value = null;
  };

  const bgStyle = {
    backgroundImage: `url(${LOGIN_BG})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="gpt-main h-screen relative" style={bgStyle}>
      <div className="overlay-container  object-cover absolute top-0 left-0 h-full w-full ">
        <div className="overlay h-full w-full bg-black opacity-50"></div>
      </div>

      <div className="gpt-search z-10 relative h-[60%] w-full flex-center justify-center ">
        <form
          className=" w-[45%] flex justify-between"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            placeholder={lang[langKey].placeholder}
            className="shadow-lg w-[73%] h-[45px] rounded-md p-4 text-[15px] outline-none"
          />
          <button
            className="shadow-lg  bg-netflix-color hover:bg-red-700 h-[45px] w-[25%] text-white text-[16px] font-semibold rounded-md py-[6px] mb-4 cursor-pointer"
            onClick={handleGptSearch}
          >
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearch;
