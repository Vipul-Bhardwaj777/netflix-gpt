import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { SUPPORTED_LANGS, USER_ICON } from "../utils/constants";
import { removeMovies } from "../utils/movieSlice";
import { removeGptMovies, setShowGpt, toggleShowGpt } from "../utils/gptSlice";
import { setLang } from "../utils/configSlice";
import { lang } from "../utils/lang";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [showSignout, setShowSignout] = useState(false);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const langKey = useSelector((store) => store.config.lang);

  useEffect(() => {
    // We call onAuthStateChanged only once so useEffect is used
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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

    return () => unsubscribe();
  }, []);

  const HandleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeGptMovies());
        dispatch(removeMovies());
        dispatch(setShowGpt());
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleEnter = () => {
    setShowSignout(true);
  };
  const handleLeave = () => {
    setShowSignout(false);
  };

  const handleToggleGpt = () => {
    dispatch(toggleShowGpt());
  };

  const handleLang = (e) => {
    dispatch(setLang(e.target.value));
  };

  return (
    <div className="header-main  z-40 flex-center  justify-between md:h-[68px] h-[80px] w-full absolute bg-gradient-to-b from-black flex-col md:flex-row">
      {!user && (
        <div className="img  pl-8 ml-[38px] mt-[25px] ">
          <img className="h-[45px]  " src="./netflixLogo.svg" alt="logo" />
        </div>
      )}

      {user && (
        <div className="head-left flex-center justify-between">
          <div className="img  pl-8 ">
            <Link to={"/"}>
              <img
                className="h-[25px] w-[92px] "
                src="./netflixLogo.svg"
                alt="logo"
              />
            </Link>
          </div>

          <ul className="head-list flex-center gap-[18px] text-white text-[14px] ml-[43px] font-medium invisible md:visible ">
            <li>
              <Link className="" to={"/"}>
                {lang[langKey].tvShow}
              </Link>
            </li>
            <li>
              <Link className="" to={"/"}>
                {lang[langKey].movies}
              </Link>
            </li>
            <li>
              <Link className="" to={"/"}>
                {lang[langKey].news}
              </Link>
            </li>
            <li>
              <Link className="" to={"/"}>
                {lang[langKey].myList}
              </Link>
            </li>
          </ul>
        </div>
      )}

      {user && (
        <div className="head-right flex-center md:gap-[15px] ml-24 md:ml-0 gap-[30px]">
          <div className="lang ">
            <select
              className="bg-gray-800 text-white text-[14px]  w-[74px] h-[27px] rounded-md text-center cursor-pointer outline-none"
              onChange={handleLang}
            >
              {SUPPORTED_LANGS.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>

          <div
            className="Gpt-seatch flex-center gap-[8px] cursor-pointer"
            onClick={handleToggleGpt}
          >
            {!showGptSearch && (
              <i className="fa-solid fa-magnifying-glass text-white text-[18px] pb-1 font-extralight cursor-pointer"></i>
            )}
            <p className="text-white text-[14px] cursor-pointer font-medium">
              {showGptSearch
                ? `${lang[langKey].home}`
                : `${lang[langKey].gptSearch}`}
            </p>
          </div>

          <i className="fa-regular fa-bell cursor-pointer text-[20px] text-white "></i>

          <div
            className="user-icon relative  h-8 w-[51px] flex-center md:mr-[51px] mr-0"
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
                className="signout bg-black opacity-90 w-[350px] md:w-[218px]  absolute py-[10px] top-12 right-0 transition ease-in-out duration-[2s] flex flex-col   "
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
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
                    <p className="hover:underline">
                      {lang[langKey].manageProfiles}{" "}
                    </p>
                  </li>
                  <li className="text-[13px] flex-center gap-[10px] ml-[10px] h-[43px]">
                    <i className="fa-solid fa-repeat text-[19px] w-6  text-center"></i>
                    <p className="hover:underline">
                      {lang[langKey].transferProfile}
                    </p>
                  </li>
                  <li className="text-[13px] flex-center gap-[10px] ml-[10px] h-[43px]">
                    <i className="fa-solid fa-user text-[19px] w-6  text-center"></i>
                    <p className="hover:underline">{lang[langKey].account} </p>
                  </li>
                  <li className="text-[13px] flex-center gap-[10px] ml-[10px] h-[43px]">
                    <i className="fa-solid fa-circle-info text-[19px] w-6  text-center"></i>
                    <p className="hover:underline">
                      {lang[langKey].helpCenter}
                    </p>
                  </li>
                </ul>

                <h1
                  className="py-[10px] text-[13px] text-white text-center font-medium mt-[10px] pt-[10px] border-t border-gray-500 cursor-pointer hover:underline"
                  onClick={HandleSignOut}
                >
                  {lang[langKey].signout}
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
