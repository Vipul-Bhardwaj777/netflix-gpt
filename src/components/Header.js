import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { USER_ICON } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [showSignout, setShowSignout] = useState(false);

  useEffect(() => {
    // We call onAuthStateChanged only once so useEffect is used
    onAuthStateChanged(auth, (user) => {
      // If the user is signed in update the store
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // If the user is signed out clear the store
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  const HandleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleEnter = () => {
    setShowSignout(true);
  };

  return (
    <div className="header-main flex-center justify-between h-[68px] w-full absolute bg-gradient-to-b from-black">
      {!user && (
        <div className="img  pl-8 ml-[38px] mt-[25px] ">
          <img className="h-[45px]  " src="./netflixLogo.svg" alt="logo" />
        </div>
      )}

      {user && (
        <div className="head-left flex-center justify-between">
          <div className="img  pl-8 ">
            <img
              className="h-[25px] w-[92px] "
              src="./netflixLogo.svg"
              alt="logo"
            />
          </div>

          <ul className="head-list flex-center gap-[18px] text-white texyt-[14px] ml-[43px] font-medium ">
            <li>
              <Link className="" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="" to={"/"}>
                TV Shows
              </Link>
            </li>
            <li>
              <Link className="" to={"/"}>
                Movies
              </Link>
            </li>
            <li>
              <Link className="" to={"/"}>
                New & Popular
              </Link>
            </li>
            <li>
              <Link className="" to={"/"}>
                My List
              </Link>
            </li>
            <li>
              <Link className="" to={"/"}>
                Browse by Languages
              </Link>
            </li>
          </ul>
        </div>
      )}

      {user && (
        <div className="head-right flex-center gap-[18px]">
          <i className="fa-solid fa-magnifying-glass text-white text-[18px] pb-1 font-extralight cursor-pointer"></i>

          <div className="children">
            <p className="text-white text-[14px] cursor-pointer font-medium">
              Children
            </p>
          </div>

          <i className="fa-regular fa-bell cursor-pointer text-[20px] text-white "></i>

          <div
            className="user-icon relative  h-8 w-[51px] flex-center mr-[51px]"
            onMouseEnter={handleEnter}
            onClick={() => setShowSignout(!showSignout)}
          >
            <img
              src={USER_ICON}
              alt="userIcon"
              className="rounded-md shadow-sm cursor-pointer"
            />

            {showSignout ? (
              <i className="fa-solid fa-caret-up text-white pl-[10px] text-xs cursor-pointer "></i>
            ) : (
              <i className=" fa-solid fa-caret-down  text-white pl-[10px] text-xs cursor-pointer "></i>
            )}

            {showSignout && (
              <div
                className="signout bg-black opacity-80 w-[218px]  absolute py-[10px] top-12 right-0 transition ease-in-out duration-[2s] flex flex-col   "
                onMouseEnter={handleEnter}
              >
                <div className="user h-[43px] flex-center gap-[10px] ml-[10px] cursor-pointer">
                  <img
                    src={USER_ICON}
                    alt="userIcon"
                    className="rounded-md shadow-sm"
                  />
                  <h1 className="text-[13px] text-white hover:underline">
                    {user?.displayName}
                  </h1>
                </div>

                <ul className="text-white cursor-pointer ">
                  <li className="text-[13px] flex-center gap-[10px] ml-[10px] h-[43px]">
                    <i className="fa-solid fa-pen text-[19px] w-6  text-center"></i>
                    <p className="hover:underline">Manage Profiles </p>
                  </li>
                  <li className="text-[13px] flex-center gap-[10px] ml-[10px] h-[43px]">
                    <i className="fa-solid fa-repeat text-[19px] w-6  text-center"></i>
                    <p className="hover:underline">Transfer Profile </p>
                  </li>
                  <li className="text-[13px] flex-center gap-[10px] ml-[10px] h-[43px]">
                    <i className="fa-solid fa-user text-[19px] w-6  text-center"></i>
                    <p className="hover:underline">Account </p>
                  </li>
                  <li className="text-[13px] flex-center gap-[10px] ml-[10px] h-[43px]">
                    <i className="fa-solid fa-circle-info text-[19px] w-6  text-center"></i>
                    <p className="hover:underline">Help centre </p>
                  </li>
                </ul>

                <h1
                  className="py-[10px] text-[13px] text-white text-center font-medium mt-[10px] pt-[10px] border-t border-gray-500 cursor-pointer hover:underline"
                  onClick={HandleSignOut}
                >
                  Sign out of Netflix
                </h1>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
