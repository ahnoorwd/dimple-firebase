// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwz8ed3ChNiWmNcsi5ojK3myiesAQLqgM",
  authDomain: "dimple-firebase-d593e.firebaseapp.com",
  projectId: "dimple-firebase-d593e",
  storageBucket: "dimple-firebase-d593e.firebasestorage.app",
  messagingSenderId: "759547040787",
  appId: "1:759547040787:web:c5c2ec5365e1531a69dbe6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);