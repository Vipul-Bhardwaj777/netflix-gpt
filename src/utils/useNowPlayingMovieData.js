import { useEffect } from "react";
import { API_OPTIONS, MOVIE_API } from "./constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "./movieSlice";

const useNowPlayingMovieData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    try {
      const data = await fetch(MOVIE_API, API_OPTIONS);
      const json = await data.json();
      dispatch(addNowPlayingMovies(json?.results));
    } catch (error) {
      alert(error);
    }
  };
};

export default useNowPlayingMovieData;
