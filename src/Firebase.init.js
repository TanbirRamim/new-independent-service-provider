// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAV8mWvYNCH8CQ1DUfvc803z846RWreCY",
  authDomain: "tanbir-s-career-consultancy.firebaseapp.com",
  projectId: "tanbir-s-career-consultancy",
  storageBucket: "tanbir-s-career-consultancy.appspot.com",
  messagingSenderId: "615157879805",
  appId: "1:615157879805:web:0e885523ef39f1618e3f94",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
