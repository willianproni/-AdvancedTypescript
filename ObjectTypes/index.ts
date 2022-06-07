// 1 - Interface with parameter

interface Product {
    name: string
    price: number
    isAvailable: boolean
}

function showProductDetails(product: Product) {
    console.log(`The product name is ${product.name} and its price ${product.price}`)
    if (product.isAvailable)
        console.log("The product is available")
}

const shirt: Product = {
    name: "T-shirt",
    price: 14,
    isAvailable: true
}

showProductDetails(shirt)
showProductDetails({ name: "Tênis", price: 290, isAvailable: false })

//--------------------------------------------------------------------------------
// 2 - Interface with optional parameter

interface User {
    email: string
    role?: string
}

function showUserDatails(user: User) {
    console.log(`The user has email ${user.email}`)
    if (user.role) {
        console.log(`The User function is: ${user.role}`)
    }
}

const UserTestOne: User = { email: "user1@email.com" }
const UserTestTwo: User = { email: "user2@email.com", role: "Admin" }

showUserDatails(UserTestOne)
showUserDatails(UserTestTwo)

//--------------------------------------------------------------------------------
// 3 - Readonly properties

interface Car {
    brand: string
    readonly wheels: number
}

const lamborghini: Car = {
    brand: "V8",
    wheels: 4
}

console.log(lamborghini)

// lamborghini.wheels = 4

//--------------------------------------------------------------------------------
// 4 - Index Signature

interface CpprdObject {
    [index: string]: number
}

let coords: CpprdObject = {
    x: 10
}

coords.y = 15

// coords.z = "12"

console.log(coords)

//--------------------------------------------------------------------------------
// 5 - Extending Types

interface Human {
    name: string
    age: number
}

interface SuperHuman extends Human {
    superPowers: string[]
}

const simpleHuman: Human = {
    name: "User",
    age: 3
}

const IronMan: SuperHuman = {
    name: "Tony Stark",
    age: 39,
    superPowers: ["Intelligence"]
}

console.log(simpleHuman)
console.log(IronMan)
console.log(IronMan.superPowers)

//--------------------------------------------------------------------------------
// 6 - Intersection Types

interface character {
    name: string
}

interface gum {
    type: string
    caliber: number
}

type HumanWithGun = character & gum

const arnold: HumanWithGun = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
}

console.log(arnold)

//--------------------------------------------------------------------------------
// 7 - ReadOnlyArray

let myFruits: ReadonlyArray<string> = ["Apple", "Orange", "Banana"]

// myFruits[3] = "mango"

console.log(myFruits)

myFruits.forEach((item) => {
    console.log("Fruit: " + item)
})

myFruits = myFruits.map((item) => {
    return `Fruit: ${item}`
})

console.log(myFruits)

//--------------------------------------------------------------------------------
// 8 - Tuplas

type fiveNumber = [number, number, number, number, number]

const myNumberArray: fiveNumber = [1, 2, 3, 4, 5]
// const myNumberArry2: fiveNumber = [1, 2, 3, 4, 5, 6]
// const mixedArray: fiveNumber = [1, true, "test", 4, 5]

console.log(myNumberArray)

type nameAndAge = [string, number]

const anotherUser: nameAndAge = ["Matheus", 30]

console.log(anotherUser[0])

anotherUser[0] = "Will"

console.log(anotherUser[0])

// anotherUser[1] = "test"

//--------------------------------------------------------------------------------
// 9 - Readonly tuplas

function showNumbers(number: readonly[number, number]) {
    // number[0] = 10
    console.log(number[0])
    console.log(number[1])
}

showNumbers([1, 2])