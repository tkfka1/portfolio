import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyBktEhBgUWyE51tCNliviGHwq60qj9Sk9E",
  authDomain: "hk-netflix.firebaseapp.com",
  projectId: "hk-netflix" ,
  storageBucket: "hk-netflix.appspot.com" ,
  messagingSenderId: "720837488979" ,
  appId: "1:720837488979:web:5b96c1d122a27fc4bab1a6",
  measurementId: "G-3B9F3KQRC6"
};

const firebase = initializeApp(config);
const auth = getAuth();
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase, auth };


// 기본 sdk 추가 코드 npm install firebase
// npm install -g firebase-tools
// 
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "",
//   authDomain: "",
//   projectId: "",
//   storageBucket: "",
//   messagingSenderId: "",
//   appId: "",
//   measurementId: ""
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);