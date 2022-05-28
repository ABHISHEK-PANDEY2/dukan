"use strict";

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL2TzKovTmYU6nPZzWiHI045bZu4XBLtY",
  authDomain: "dukan-data.firebaseapp.com",
  projectId: "dukan-data",
  storageBucket: "dukan-data.appspot.com",
  messagingSenderId: "746859394865",
  appId: "1:746859394865:web:09e66b601cbf58364d6210",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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
