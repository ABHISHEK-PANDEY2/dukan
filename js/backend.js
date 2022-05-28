"use strict";
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi3QvaawY3CSR9gn5jDiY5XyD0RXixEMw",
  authDomain: "dukaan-0001.firebaseapp.com",
  databaseURL: "https://dukaan-0001-default-rtdb.firebaseio.com",
  projectId: "dukaan-0001",
  storageBucket: "dukaan-0001.appspot.com",
  messagingSenderId: "911250519486",
  appId: "1:911250519486:web:f4e0355c55d8e752d7b5ef",
  measurementId: "G-212ZNZ7HF7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  deleteField,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";

const db = getFirestore();

const item = document.querySelector(".item");
const qnty = document.querySelector(".qnty");
const rate = document.querySelector(".rate");
const date = document.querySelector(".date");

async function AddDocument_AutoID() {
  var ref = collection(db, "VendorData");

  const docRef = await addDoc(ref, {
    item: item.value,
    qnty: qnty.value,
    rate: rate.value,
    date: date.value,
  })
    .then(() => {
      alert("data added successfully");
    })
    .catch((error) => {
      alert("Unsuccessful operation, error:" + error);
    });
}

document
  .querySelector(".send-data")
  .addEventListener("click", AddDocument_AutoID);
