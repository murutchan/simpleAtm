"use strict";

const customer1 = {
  fullName: "Aibolit Doktor",
  accountBalance: 5000,
  password: 1234,
  savingsAccount: 2000,
};

const customer2 = {
  fullName: "karamaz gulnesin",
  accountBalance: 2000,
  password: 1234,
  savingsAccount: 2000,
};

//html classes into variables

let getCash = document.querySelector(".getCash");
let deposit = document.querySelector(".deposit");
let accountBalance = document.querySelector(".accountBalance");
const name = document.querySelector(".name");
let savings = document.querySelector(".savings");
const printReceipt = document.querySelector(".printReceipt");
const exit = document.querySelector(".exit");
let transfer = document.querySelector(".transfer");

//receipt variables
const receiptName = document.querySelector(".receipt-name");
let receiptBalance = document.querySelector(".receipt-balance");
//password

const password = Number(prompt("please enter your pin number"));

if (password !== customer1.password) {
  document.querySelector(".container").classList.add("hidden");
  document.querySelector(".wrong-pin").classList.remove("hidden");
} else {
  accountBalance.textContent = customer1.accountBalance;
  name.textContent = customer1.fullName;
  savings = customer1.savings;
}

//function for getCash
const withdraw = function (customer) {
  let inputNum = Number(prompt("How much you want to withdraw"));
  if (inputNum < customer.accountBalance) {
    accountBalance.textContent = customer.accountBalance - inputNum;
  }
};
//function for deposit

//--------------WITHDRAWAl-----------------------

// getCash.addEventListener("click", function () {
//   let inputNum = Number(prompt("How much you want to withdraw?"));
//   let balance = customer1.accountBalance - inputNum;
//   accountBalance.textContent = balance;
//   customer1.accountBalance = Number(accountBalance.textContent);
// });

//-------------------DEPOSIT---------------------------

deposit.addEventListener("click", function () {
  let inputNum = Number(prompt("How much you want to deposit?"));
  let balance = customer1.accountBalance + inputNum;
  accountBalance.textContent = balance;
  customer1.accountBalance = Number(accountBalance.textContent);
});

//-------------PRINT RECEIPT--------------------

printReceipt.addEventListener("click", function () {
  document.querySelector(".receipt").classList.remove("hidden");
  receiptName.textContent = customer1.fullName;
  receiptBalance.textContent = customer1.accountBalance;
});

document.querySelector("#button-close").addEventListener("click", function () {
  document.querySelector(".receipt").classList.add("hidden");
});

//--------------EXIT BUTTON---------------

exit.addEventListener("click", function () {
  document.querySelector(".exit-modal").classList.remove("hidden");
  document.querySelector(".container").classList.add("hidden");
});

//withdrawal function

const getMoney = function (customer) {
  let inputNum = Number(prompt("How much you want to withdraw?"));
  let balance = customer.accountBalance - inputNum;
  accountBalance.textContent = balance;
  customer.accountBalance = Number(accountBalance.textContent);
  console.log(customer.accountBalance);
};

getCash.addEventListener("click", function () {
  getMoney(customer1);
});
