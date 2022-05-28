"use strict";

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDi3QvaawY3CSR9gn5jDiY5XyD0RXixEMw",
  authDomain: "dukaan-0001.firebaseapp.com",
  projectId: "dukaan-0001",
  storageBucket: "dukaan-0001.appspot.com",
  messagingSenderId: "911250519486",
  appId: "1:911250519486:web:f4e0355c55d8e752d7b5ef",
  measurementId: "G-212ZNZ7HF7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Create collection and field within collections then create documents and store them within it
//
