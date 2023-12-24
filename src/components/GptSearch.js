import React from "react";
import { LOGIN_BG } from "../utils/constants";
import { useSelector } from "react-redux";
import { lang } from "../utils/lang";

const GptSearch = () => {
  const langKey = useSelector((store) => store.config.lang);

  const bgStyle = {
    backgroundImage: `url(${LOGIN_BG})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="gpt-main h-screen" style={bgStyle}>
      <div className="overlay-container  object-cover absolute top-0 left-0 h-full w-full ">
        <div className="overlay h-full w-full bg-black opacity-50"></div>
      </div>

      <div className="gpt-search z-10 relative h-full w-full flex-center justify-center">
        <form className=" w-[45%] flex justify-between">
          <input
            type="text"
            placeholder={lang[langKey].placeholder}
            className=" w-[73%] h-[45px] rounded-md p-2 text-[15px] outline-none"
          />
          <button className=" bg-netflix-color hover:bg-red-700 h-[45px] w-[25%] text-white text-[16px] font-semibold rounded-md py-[6px] mb-4 cursor-pointer">
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearch;
