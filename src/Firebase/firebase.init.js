// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxywNKoV1SMwt95HBNaquMtNuvhDwfmN4",
  authDomain: "react-auth-with-firebase-1.firebaseapp.com",
  projectId: "react-auth-with-firebase-1",
  storageBucket: "react-auth-with-firebase-1.firebasestorage.app",
  messagingSenderId: "397510437478",
  appId: "1:397510437478:web:d18ac138c2f47d82d99ba7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
