import React from "react";
import { CDN_IMG_URL } from "../utils/constants";

const MovieCard = ({ poster_path }) => {
  if (!poster_path) return;
  return (
    <div className="main">
      <div className="poster w-[138px] h-[176px] overflow-hidden rounded-sm cursor-pointer">
        <img
          className="-translate-y-2"
          src={CDN_IMG_URL + poster_path}
          alt="poster"
        />
      </div>
    </div>
  );
};

export default MovieCard;
