import React from "react";
import { HEADER_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="header-main h-[92px] w-screen absolute ml-[153px] ">
      <div className="img w-[148px] h-10 ">
        <img src={HEADER_LOGO} alt="logo" />
      </div>
    </div>
  );
};

export default Header;
