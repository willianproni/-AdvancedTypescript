"use strict";
// 1 -numbers
let x = 10;
console.log(x);
// x = "trade" --> string type is not accepted
x = 15;
console.log(typeof x);
// in javascript float and number are type number
const y = 15.97789;
console.log(typeof y);
console.log(y);
console.log(y.toPrecision(3));
//--------------------------------------------------------------------------------
// 2 - string
const FirtsName = "Willian";
console.log(FirtsName.toUpperCase());
let fullName;
const lastName = "Proni";
fullName = FirtsName + " " + lastName;
console.log(fullName);
//--------------------------------------------------------------------------------
// 3 - boolean
let bool = false;
bool = true;
console.log("\t", bool);
console.log(typeof bool);
//--------------------------------------------------------------------------------
// 4 - inference e annotation
//Annotation is when we define the type of a data manually
let annotation = "test";
//annotation = 1
//Inference is when TS(TypeScript) identifies and sets the data type for us
let inference = "test";
//inference = 2
//Task Module
var number = 10;
var convertNumber = number.toString();
console.log(`Number ${convertNumber} as been converted to string`);
