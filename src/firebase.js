// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAFKmPsafHX3Ikl-oGqoozg6HCYK6UvgDo",

  authDomain: "control-vehicular-3e8ca.firebaseapp.com",

  databaseURL: "https://control-vehicular-3e8ca-default-rtdb.firebaseio.com",

  projectId: "control-vehicular-3e8ca",

  storageBucket: "control-vehicular-3e8ca.appspot.com",

  messagingSenderId: "535583253536",

  appId: "1:535583253536:web:0632fd1150fa7815b14845",

  measurementId: "G-B4DK2MZ1TS"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

