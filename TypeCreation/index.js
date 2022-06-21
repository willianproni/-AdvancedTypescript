"use strict";
// Generics
function showData(arg) {
    return `The data is: ${arg}`;
}
console.log(showData(5));
console.log(showData("Test"));
console.log(showData(true));
console.log(showData(["Test", 2, true]));
// Constraint generic
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: "Sofa", color: "White" };
const myObjOne = { color: "White" };
console.log(showProductName(myObj));
const myCar = { name: "Corsa", whells: 4, engine: 3, color: "white" };
const myPen = { name: "Bic", whells: false, engine: false, color: "blue" };
console.log(myCar);
console.log(myPen);
//4 - type parameters
function getSomeKey(obj, key) {
    return `A chave está presente no objeteo e tem o valor de ${obj[key]}`;
}
const server = {
    hd: '2tb',
    ram: '32gb'
};
console.log(getSomeKey(server, 'ram'));
console.log(getSomeKey(server, 'hd'));
function showCharName(obj, key) {
    return `${obj[key]}`;
}
const myChar = {
    name: 'User Test',
    age: 22,
    hasDriveLicense: true
};
console.log(showCharName(myChar, "name"));
// 6 - Typeof Type Operator
const userName = "Willian";
const userName2 = "Marcos";
const userName3 = "testUser";
const myTruck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga"
};
function showKm(km) {
    return `A velocidade do caminhão é ${km}`;
}
console.log(showKm(myTruck.km));
const sumVar = 5;
const type = "test";
const testing = "some text";
const food = "tomato";
const food2 = "onion";
// const food3: a3 = "hamburger"
