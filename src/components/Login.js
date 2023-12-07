import React, { useState } from "react";
import Header from "./Header";
import { LOGIN_BG } from "../utils/constants";

const Login = () => {
  const bgStyle = {
    backgroundImage: `url(${LOGIN_BG})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const [isSignIn, setisSignIn] = useState(true);
  const HandleSignUp = () => {
    setisSignIn(!isSignIn);
  };

  return (
    <div
      className="login-main relative h-screen w-screen overflow-hidden"
      style={bgStyle}
    >
      <div className="overlay-container object-cover absolute top-0 left-0 h-full w-full ">
        <div className="overlay h-full w-full bg-black opacity-50"></div>
      </div>

      <Header />
      <form className="form w-4/12 bg-black absolute mx-auto my-[92px] left-0 right-0 text-white py-[48px] px-[68px] opacity-80 rounded-lg">
        <h1 className="text-[32px] font-bold mb-[28px] ">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            className="p-2  text-[16px]  h-[56px] w-full bg-gray-800 text-white mb-4 rounded-md"
            type="text"
            placeholder="Enter your name"
            name="name"
            id=""
          />
        )}

        <input
          className="p-2  text-[16px]  h-[56px] w-full bg-gray-800 text-white mb-4 rounded-md"
          type="text"
          placeholder="Enter your email"
          name="Email"
          id=""
        />

        <input
          className="p-2  text-[16px]  h-[56px] w-full bg-gray-800 text-white mb-4 rounded-md"
          type="text"
          placeholder="Password"
          name="password"
          id=""
        />

        <button className=" bg-[#e50914] w-full h-10 text-[16px] font-semibold rounded-md py-[6px] mb-4 ">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <small className="small  text-[16px] ">
          {isSignIn ? "New to Netflix? " : "Already a user? "}

          <span className="font-bold cursor-pointer" onClick={HandleSignUp}>
            {isSignIn ? "Sign up now." : "Sign in now."}
          </span>
        </small>
      </form>
    </div>
  );
};

export default Login;
