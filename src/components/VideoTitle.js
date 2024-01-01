import React from "react";
import { lang } from "../utils/lang";
import { useSelector } from "react-redux";

const VideoTitle = ({ title, overview }) => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="title-main absolute  text-white  pt-[100px] bg-gradient-to-tr from-black z-10 h-full aspect-video w-full ">
      <div className="container z-20 absolute md:w-[400px] w-[153px] md:h-[335px] h-[130px]  md:pt-[100px] pt-[60px] lg:top-[40px] xl:top-[105px] top-[0px] xl:left-[51px] lg:left-[41px] md:left-[31px] left-[17px]">
        <h1 className="  font-black w-[70%] md:text-lg lg:text-2xl text-xs lg:mb-[15px] md:mb-[10px] mb-[5px] ">
          {title}
        </h1>
        <p className="lg:text-[12.36px] md:text-[9px] text-[5px] md:mb-[10px] lg:mb-[19px] w-[80%]  line-clamp-2 overflow-ellipsis overflow-hidden mb-[5px] ">
          {overview}
        </p>
        <div className="btns ">
          <button className=" lg:w-[90px] lg:h-[40px] md:w-[100px] md:h-[36px] w-[56px] h-[20px] md:text-[14px] text-[10px] bg-white text-black font-bold mr-[8px] rounded-md  shadow-md hover:bg-opacity-80 transition-all ease-in">
            <i className="fa-solid fa-play mr-[10px] "></i> {lang[langKey].play}
          </button>
          <button className=" md:w-[137px] md:h-[36px] lg:w-[120px] lg:h-[40px] w-[77px] h-[20px] bg-gray-700 bg-opacity-70 text-[10px]  text-white font-semibold md:text-[14px] rounded-md shadow-md hover:bg-opacity-80 transition-all ease-in">
            <i className="fa-solid fa-circle-info  mr-[10px] "></i>
            {lang[langKey].moreInfo}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
