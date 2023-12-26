import { useEffect } from "react";
import { API_OPTIONS, POPULAR_MOVIES_API } from "./constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "./movieSlice";

const usePopularMoviesData = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  useEffect(() => {
    !popularMovies && fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    try {
      const data = await fetch(POPULAR_MOVIES_API, API_OPTIONS);
      const json = await data.json();
      dispatch(addPopularMovies(json?.results));
    } catch (error) {
      alert(error);
    }
  };
};

export default usePopularMoviesData;
