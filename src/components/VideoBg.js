import React from "react";
import { useSelector } from "react-redux";
import useTrailerData from "../utils/useTrailerData";

const VideoBg = ({ id }) => {
  useTrailerData(id);

  const trailer = useSelector((store) => store?.movies?.trailer);

  return (
    <div className="main">
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + trailer?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBg;
