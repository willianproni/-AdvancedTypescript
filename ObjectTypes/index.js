"use strict";
// 1 - Interface with parameter
function showProductDetails(product) {
    console.log(`The product name is ${product.name} and its price ${product.price}`);
    if (product.isAvailable)
        console.log("The product is available");
}
const shirt = {
    name: "T-shirt",
    price: 14,
    isAvailable: true
};
showProductDetails(shirt);
showProductDetails({ name: "Tênis", price: 290, isAvailable: false });
function showUserDatails(user) {
    console.log(`The user has email ${user.email}`);
    if (user.role) {
        console.log(`The User function is: ${user.role}`);
    }
}
const UserTestOne = { email: "user1@email.com" };
const UserTestTwo = { email: "user2@email.com", role: "Admin" };
showUserDatails(UserTestOne);
showUserDatails(UserTestTwo);
const lamborghini = {
    brand: "V8",
    wheels: 4
};
console.log(lamborghini);
let coords = {
    x: 10
};
coords.y = 15;
// coords.z = "12"
console.log(coords);
const simpleHuman = {
    name: "User",
    age: 3
};
const IronMan = {
    name: "Tony Stark",
    age: 39,
    superPowers: ["Intelligence"]
};
console.log(simpleHuman);
console.log(IronMan);
console.log(IronMan.superPowers);
const arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
};
console.log(arnold);
//--------------------------------------------------------------------------------
// 7 - ReadOnlyArray
let myFruits = ["Apple", "Orange", "Banana"];
// myFruits[3] = "mango"
console.log(myFruits);
myFruits.forEach((item) => {
    console.log("Fruit: " + item);
});
myFruits = myFruits.map((item) => {
    return `Fruit: ${item}`;
});
console.log(myFruits);
const myNumberArray = [1, 2, 3, 4, 5];
// const myNumberArry2: fiveNumber = [1, 2, 3, 4, 5, 6]
// const mixedArray: fiveNumber = [1, true, "test", 4, 5]
console.log(myNumberArray);
const anotherUser = ["Matheus", 30];
console.log(anotherUser[0]);
anotherUser[0] = "Will";
console.log(anotherUser[0]);
// anotherUser[1] = "test"
//--------------------------------------------------------------------------------
// 9 - Readonly tuplas
function showNumbers(number) {
    // number[0] = 10
    console.log(number[0]);
    console.log(number[1]);
}
showNumbers([1, 2]);
