import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, UPCOMING_MOVIES_API } from "./constants";
import { addupcomingMovies } from "./movieSlice";

const useUpcomingData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    try {
      const data = await fetch(UPCOMING_MOVIES_API, API_OPTIONS);
      const json = await data.json();
      dispatch(addupcomingMovies(json?.results));
    } catch (error) {
      alert(error);
    }
  };
};

export default useUpcomingData;
