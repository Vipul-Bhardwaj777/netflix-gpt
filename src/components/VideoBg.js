import React, { useState } from "react";
import { useSelector } from "react-redux";
import useTrailerData from "../utils/useTrailerData";
import Shimmer from "./Shimmer";

const VideoBg = ({ id }) => {
  useTrailerData(id);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const trailer = useSelector((store) => store?.movies?.trailer);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <div className="main -translate-y-[90px] relative">
      {!videoLoaded && <Shimmer />}
      <iframe
        className=" md:aspect-video w-full"
        src={
          "https://www.youtube.com/embed/" +
          trailer?.key +
          `?playlist=${trailer?.key}&loop=1&autoplay=1&controls=0&showinfo=0&mute=1`
        }
        title="YouTube video player"
        allow="accelerometer; autoplay;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        onLoad={handleVideoLoad}
      ></iframe>
    </div>
  );
};

export default VideoBg;
