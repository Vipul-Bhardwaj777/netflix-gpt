import React from "react";
import Header from "./Header";
import useMovieData from "../utils/useMovieData";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const Browse = () => {
  const movieData = useMovieData();
  const dispatch = useDispatch();
  dispatch(addNowPlayingMovies(movieData));
  return (
    <div className="browse-main">
      <Header />
    </div>
  );
};

export default Browse;
