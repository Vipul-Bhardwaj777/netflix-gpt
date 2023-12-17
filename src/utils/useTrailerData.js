import { useEffect } from "react";
import { API_OPTIONS } from "./constants";
import { useDispatch } from "react-redux";
import { addTrailer } from "./movieSlice";

const useTrailerData = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchTrailerData();
  }, []);

  const fetchTrailerData = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
      const filterTrailers = json?.results?.filter(
        (video) => video?.type === "Trailer"
      );

      const trailer =
        filterTrailers.length === 0 ? json?.results[0] : filterTrailers[0];

      dispatch(addTrailer(trailer));
    } catch (error) {
      alert(error);
    }
  };
};

export default useTrailerData;
