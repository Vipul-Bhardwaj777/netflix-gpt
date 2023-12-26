import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TOP_RATED_MOVIES_API } from "./constants";
import { addtopRatedMovies } from "./movieSlice";

const useTopRatedData = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  useEffect(() => {
    !topRatedMovies && fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    try {
      const data = await fetch(TOP_RATED_MOVIES_API, API_OPTIONS);
      const json = await data.json();
      dispatch(addtopRatedMovies(json?.results));
    } catch (error) {
      alert(error);
    }
  };
};

export default useTopRatedData;
