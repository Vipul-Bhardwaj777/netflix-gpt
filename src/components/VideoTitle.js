import React from "react";

const VideoTitle = ({ title, overview}) => {

  return (
    <div className="main">
      <h1>{title} </h1>
      <p>{overview}</p>
      <div className="btns">
        <button className="play"></button>
        <button className="more-info"></button>
      </div>
    </div>
  );
};

export default VideoTitle;
