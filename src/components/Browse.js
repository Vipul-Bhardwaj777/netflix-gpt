import React from "react";
import Header from "./Header";
import useMovieData from "../utils/useMovieData";

const Browse = () => {
  useMovieData();

  return (
    <div className="browse-main">
      <Header />
    </div>
  );
};

export default Browse;
