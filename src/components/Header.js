import React from "react";
import { HEADER_LOGO } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const HandleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="header-main h-[88px] w-full pl-8 absolute  ">
      <div className="head-container flex justify-between">
        <div className="img w-[160px]  overflow-hidden">
          <img className="h-[88px] w-full" src={HEADER_LOGO} alt="logo" />
        </div>

        {user && (
          <div className="signout">
            <button
              className="signOut w-[75px] h-[32px]  bg-netflix-color my-7 mr-12 text-white font-medium rounded-md "
              onClick={HandleSignOut}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
