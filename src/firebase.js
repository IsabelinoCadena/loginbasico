// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUR7bUrpZgTGnkgDi6HVkom8xQVF0wEHk",
  authDomain: "react-fb-auth-28733.firebaseapp.com",
  projectId: "react-fb-auth-28733",
  storageBucket: "react-fb-auth-28733.appspot.com",
  messagingSenderId: "407866977019",
  appId: "1:407866977019:web:c80a5a86d1018c25119e5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)