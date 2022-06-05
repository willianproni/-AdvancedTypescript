//--------------------------------------------------------------------------------
// 1 - Arrays

let number: number[] = [1, 2, 3]
console.log(number)

number.push(4, 5)

console.log(number)

const names: string[] = ["Willian", "Marcos", "Fábio"]
console.log(names)

// other array syntax

const age: Array<number> = [1, 2, 3, 4, 5, 6]

age.push(19)

console.log(age)

//--------------------------------------------------------------------------------
//2 - Any

const arrayAny: any = [1, "test", true, [], { nome: "Willian" }]
arrayAny.push("1", 1)
console.log(arrayAny)

let testAny: any = 1
console.log(testAny)
testAny = "1"
console.log(testAny)

//--------------------------------------------------------------------------------
// 3 - typed parameters

function sum(number1: number, number2: number) {
    console.log(number1 + number2)
}

sum(3, 4)
//sum("a", "b")
//sum(8, "c")

//--------------------------------------------------------------------------------
// 4 - Return function

function greeting(name: string): string {
    return `Olá ${name}`
}

console.log(greeting("User1"))

//--------------------------------------------------------------------------------
// 5 - Anonymous Functions

setTimeout(function () {
    const sallary: number = 1000.8
    // console.log(sallary)
}, 2000)

//--------------------------------------------------------------------------------
// 6 - Types of objects

function passCoordinates(coord: { x: number, y: number }) {
    console.log("X coordinates: " + coord.x)
    console.log("Y coordinates: " + coord.y)
}

const objCoord = { x: 329, y: 84.2 }

passCoordinates(objCoord)

const newPerson: { name: string, surname: string, age: number } = { name: "User", surname: "SurUser", age: 40 }

//--------------------------------------------------------------------------------
// 7 - Props optional

function showNumbers(a: number, b: number, c?: number) {
    console.log("A: ", + a)
    console.log("B: ", + b)
    if (c)
        console.log("C: ", + c)
}

showNumbers(1, 2, 3)

//--------------------------------------------------------------------------------
// 8 - Validating optional argument

function advancedGretting(firstName: string, lastName?: string) {
    lastName !== undefined ? console.log(`Hello ${firstName} ${lastName}`) : console.log(`Hello ${firstName}`)
}

advancedGretting("User1")
advancedGretting("User2", "Test")

//--------------------------------------------------------------------------------
// 9 - Union type

function showBalance(balance: string | number) {
    console.log(`The account balance is ${balance}`)
}

showBalance(1)
showBalance("10")

const arrayTwo: Array<number | string> = [1, "2"]

//--------------------------------------------------------------------------------
// 10 -Advancing Union type

function showUserRole(role: boolean | string): string {
    if (typeof role === "boolean") {
        return "Unapproved user"
    }
    return `User function is: ${role}`
}

console.log(showUserRole(false))
console.log(showUserRole("Admin"))

//--------------------------------------------------------------------------------
// 11 - Type alias

type id = string | number


function showId(id: id) {
    console.log(`The id is: ${id}`)
}

showId(1)
showId("200")

//--------------------------------------------------------------------------------
// 12 - Interfaces

interface Point {
    x: number
    y: number
    z: number
}

function ShowCoords(obj: Point) {
    console.log(`X: ${obj.x}, Y: ${obj.y}, Z: ${obj.z}`)
}

const coordObj: Point = {
    x: 10,
    y: 20,
    z: 30
}
ShowCoords(coordObj)

//--------------------------------------------------------------------------------
// 14 - Interface x type alias

interface Person {
    name: string
}

interface Person {
    age: number
}

const somePerson: Person = { name: "User", age: 29 }

console.log(somePerson)

type personType = {
    name: string
}

// type personType = {
//     age: number
// }

//--------------------------------------------------------------------------------
// 14 - Literal types

let test: "test";

test = "test"

function showDirection(direction: "left" | "right" | "center") {
    console.log(`A direção é ${direction}`)
}

showDirection("center")
showDirection("left")
showDirection("right")

//--------------------------------------------------------------------------------
// 15 - non null assertion operators

const p = document.getElementById("some-p")

console.log(p!.innerText)

//--------------------------------------------------------------------------------
// 16 - Bigint

let n: bigint

// n = 1

n = 1000n

console.log(n)

console.log(typeof n)

//--------------------------------------------------------------------------------
// 16 - Symbol

let symbolA: symbol = Symbol("a")
let symbolB = Symbol("a")

console.log(symbolA == symbolB)
console.log(symbolA === symbolB)