import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
import { seedDatabase } from '../seed';

const config = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId ,
  storageBucket: process.env.REACT_APP_storageBucket ,
  messagingSenderId: process.env.REACT_APP_messagingSenderId ,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };


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
//   apiKey: "AIzaSyBktEhBgUWyE51tCNliviGHwq60qj9Sk9E",
//   authDomain: "hk-netflix.firebaseapp.com",
//   projectId: "hk-netflix",
//   storageBucket: "hk-netflix.appspot.com",
//   messagingSenderId: "720837488979",
//   appId: "1:720837488979:web:5b96c1d122a27fc4bab1a6",
//   measurementId: "G-3B9F3KQRC6"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);