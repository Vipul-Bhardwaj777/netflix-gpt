import React from "react";
import { useSelector } from "react-redux";
import useMovieData from "../utils/useMovieData";
import VideoTitle from "./VideoTitle";
import VideoBg from "./VideoBg";

const MainContainer = () => {
  useMovieData();

  const nowPlayingMovies = useSelector(
    (store) => store?.movies?.nowPlayingMovies
  );

  if (!nowPlayingMovies) return;

  const mainMovie = nowPlayingMovies[3];
  const { title, overview, id } = mainMovie;
  return (
    <div className="main-container ">
      <VideoTitle title={title} overview={overview} />
      <VideoBg id={id} />
    </div>
  );
};

export default MainContainer;
