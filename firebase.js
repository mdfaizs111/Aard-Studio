// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjY684axoaSnFc-mGvOJlFN8HBCtySMaI",
  authDomain: "aard-w001.firebaseapp.com",
  databaseURL: "https://aard-w001-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "aard-w001",
  storageBucket: "aard-w001.appspot.com",
  messagingSenderId: "518185261090",
  appId: "1:518185261090:web:e4b49f9a77211055ce927b",
  measurementId: "G-7T63Q7RR37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);