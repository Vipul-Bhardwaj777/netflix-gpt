import { useEffect, useState } from "react";
import { API_OPTIONS, MOVIE_API } from "./constants";

const useMovieData = () => {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    try {
      const data = await fetch(MOVIE_API, API_OPTIONS);
      const json = await data.json();
      setMovieData(json?.results);
    } catch (error) {
      alert(error);
    }
  };

  return movieData;
};

export default useMovieData;
