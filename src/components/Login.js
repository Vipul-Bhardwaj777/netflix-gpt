import React, { useRef, useState } from "react";
import Header from "./Header";
import { LOGIN_BG } from "../utils/constants";
import { checkValidateSignin } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const bgStyle = {
    backgroundImage: `url(${LOGIN_BG})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef("");

  const HandleSignUp = () => {
    setisSignIn(!isSignIn);
    setErrorMsg(null);
  };

  const HandleClick = () => {
    if (isSignIn) {
      const validationMsg = checkValidateSignin(
        email.current.value,
        password.current.value
      );

      setErrorMsg(validationMsg);
    } else {
      const validationMsg = checkValidateSignin(
        email.current.value,
        password.current.value,
        name.current.value
      );

      setErrorMsg(validationMsg);
    }

    if (errorMsg) return;

    if (!isSignIn) {
      // Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // User updated in firebase but our store is not so
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              navigate("/error");
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
          console.log(errorMessage);
        });
    } else {
      // Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }
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
      <form
        className="form w-4/12 bg-black absolute mx-auto my-[92px] left-0 right-0 text-white py-[48px] px-[68px] opacity-80 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-[32px] font-bold mb-[28px] ">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            ref={name}
            className="p-2  text-[16px]  h-[56px] w-full bg-gray-800 text-white mb-4 rounded-md"
            type="text"
            placeholder="Enter your name"
            name="name"
          />
        )}

        <input
          ref={email}
          className="p-2  text-[16px]  h-[56px] w-full bg-gray-800 text-white mb-4 rounded-md"
          type="email"
          placeholder="Enter your email"
          name="Email"
        />

        <input
          ref={password}
          className="p-2  text-[16px]  h-[56px] w-full bg-gray-800 text-white mb-4 rounded-md"
          type="password"
          placeholder="Password"
          name="password"
        />
        <p className="text-netflix-color mb-4">{errorMsg} </p>
        <button
          className=" bg-netflix-color w-full h-10 text-[16px] font-semibold rounded-md py-[6px] mb-4 "
          onClick={HandleClick}
        >
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
