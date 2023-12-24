import React from "react";
import { lang } from "../utils/lang";
import { useSelector } from "react-redux";

const VideoTitle = ({ title, overview }) => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="title-main absolute  text-white  pt-[100px] bg-gradient-to-tr from-black z-10 h-full aspect-video w-full ">
      <div className="container z-20 absolute w-[400px] h-[335px]  pt-[100px] top-[145px] left-[51px]">
        <h1 className="  font-black w-[70%] text-2xl mb-[15px] ">{title} </h1>
        <p className="text-[12.36px] mb-[19px] w-[80%]  line-clamp-2 overflow-ellipsis overflow-hidden ">
          {overview}
        </p>
        <div className="btns ">
          <button className=" w-[90px] h-[40px] text-[14px] bg-white text-black font-bold mr-[8px] rounded-md  shadow-md hover:bg-opacity-80 transition-all ease-in">
            <i className="fa-solid fa-play mr-[10px] "></i> {lang[langKey].play}
          </button>
          <button className="w-[120px] h-[40px] bg-gray-700 bg-opacity-70  text-white font-semibold text-[14px] rounded-md shadow-md hover:bg-opacity-80 transition-all ease-in">
            <i className="fa-solid fa-circle-info  mr-[10px] "></i>
            {lang[langKey].moreInfo}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
