"use strict";
// 1 - Type guard
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string")
        console.log(parseFloat(a) + parseFloat(b));
    else if (typeof a === "number" && typeof b === "number")
        console.log(a + b);
    else
        console.log("Impossible to do the sum");
}
sum("4", "5");
sum(4, 5.4);
sum("1", 5.4);
//--------------------------------------------------------------------------------
// 2 - Checking if value exists
function operation(array, operation) {
    if (operation) {
        if (operation === "sum") {
            console.log(array.reduce((s, total) => s + total));
        }
        else if (operation === "multiply") {
            console.log(array.reduce((m, total) => m * total));
        }
    }
    else {
        console.log("Defina uma operação");
    }
}
operation([1, 2, 3], "sum");
operation([1, 2, 3, 4, 5], "multiply");
//--------------------------------------------------------------------------------
// 3 - Instance of
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const Jhon = new User("Jhon");
const Paul = new SuperUser("Paul");
console.log(Jhon);
console.log(Paul);
function userGreeting(user) {
    if (user instanceof SuperUser)
        console.log(`Hello ${user.name} want to see system data`);
    else if (user instanceof User)
        console.log(`Hello ${user.name}`);
}
userGreeting(Jhon);
userGreeting(Paul);
//--------------------------------------------------------------------------------
// 4 - Operation in
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed)
            this.breed = breed;
    }
}
const scooby = new Dog("Scooby");
const bob = new Dog("Bob", "German Shepherd");
function showDogDetails(dog) {
    if ("breed" in dog)
        console.log(`the dog ${dog.name} is the breed ${dog.breed}`);
    else
        console.log(`the dog ${dog.name} is SRD`);
}
showDogDetails(scooby);
showDogDetails(bob);
//--------------------------------------------------------------------------------
// 5 - Task module
function showUserReview(review) {
    if (typeof review === "number") {
        if (review === 5)
            console.log("Excellent");
        else if (review === 4)
            console.log("Good");
        else if (review === 3)
            console.log("median");
        else if (review === 2)
            console.log("bad");
        else if (review === 1)
            console.log("terrible");
    }
    else if (typeof review === "boolean") {
        console.log("user do not leave feedback");
    }
}
showUserReview(5);
showUserReview(false);
