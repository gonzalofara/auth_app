// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBhRV4nqfnU3QqguQswO5vcybp1xcnjXj4",
  authDomain: "user-registration-41991.firebaseapp.com",
  projectId: "user-registration-41991",
  storageBucket: "user-registration-41991.appspot.com",
  messagingSenderId: "1021589059501",
  appId: "1:1021589059501:web:d7e4c8172b9b05af9c5324",
  measurementId: "G-R348ZB6VMW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
//EXPORT FIREBASE CONFIG TO USE IT GLOBALLY
export const auth = getAuth(app);
export default app;
