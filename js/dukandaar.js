"use strict";

const addItem = document.querySelector(".add-item");

addItem.addEventListener("click", add);

function add() {
  document.querySelector(".add").classList.toggle("hidden");
}

const item = document.querySelector(".item");
const qnty = document.querySelector(".qnty");
const rate = document.querySelector(".rate");
const date = document.querySelector(".date");
let count = 0;
document.querySelector(".add img").addEventListener("click", check);

function check() {
  if (item.value && qnty.value && rate.value) {
    submit();
  } else {
    alert("FILL ALL VALUES");
  }
}

function submit() {
  document.querySelector(".items").innerHTML =
    document.querySelector(".items").innerHTML +
    `
  <div class="product-item">
    <div class="S-No">${++count}</div>
    <div class="product-name">${item.value}</div>
    <div class="quantity">${qnty.value}</div>
    <div class="price">${rate.value}</div>
    <div class="exp-date">${date.value || "-"}</div>
  </div>`;
  item.value = "";
  qnty.value = "";
  rate.value = "";
  date.value = "";
}
