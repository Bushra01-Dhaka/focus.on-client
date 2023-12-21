// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJWwZwWuJKbhdSuzyN80AOlZaumNik7ms",
  authDomain: "focus-on-e0b82.firebaseapp.com",
  projectId: "focus-on-e0b82",
  storageBucket: "focus-on-e0b82.appspot.com",
  messagingSenderId: "141762804533",
  appId: "1:141762804533:web:776433fd2fbe5885caaa7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;