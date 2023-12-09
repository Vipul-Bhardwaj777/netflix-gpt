// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdvSU_B-OA_mkbfo52yrvhN2SkdMTRCZo",
  authDomain: "netflix-gpt-f3dbb.firebaseapp.com",
  projectId: "netflix-gpt-f3dbb",
  storageBucket: "netflix-gpt-f3dbb.appspot.com",
  messagingSenderId: "372889739790",
  appId: "1:372889739790:web:41f721986a7e009c91525f",
  measurementId: "G-49DXMEMZSH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
