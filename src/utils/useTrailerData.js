import { useEffect } from "react";
import { API_OPTIONS } from "./constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "./movieSlice";

const useTrailerData = (id) => {
  const dispatch = useDispatch();

  const trailer = useSelector((store) => store.movies.trailer);

  useEffect(() => {
    !trailer && fetchTrailerData(id);
  }, []); 

  const fetchTrailerData = async (id) => {
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
