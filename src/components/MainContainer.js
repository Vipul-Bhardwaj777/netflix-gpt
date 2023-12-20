import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBg from "./VideoBg";
import usePopularMoviesData from "../utils/usePopularMoviesData";
import useTopRatedData from "../utils/useTopRatedData";
import useUpcomingData from "../utils/useUpcomingData";
import useNowPlayingMovieData from "../utils/useNowPlayingMovieData";

const MainContainer = () => {
  useNowPlayingMovieData();
  usePopularMoviesData();
  useTopRatedData();
  useUpcomingData();

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
