// Generics
function showData<T>(arg: T): string {
    return `The data is: ${arg}`
}

console.log(showData(5))
console.log(showData("Test"))
console.log(showData(true))
console.log(showData(["Test", 2, true]))

// Constraint generic

function showProductName<T extends { name: string }>(obj: T) {
    return `O nome do produto é: ${obj.name}`
}

const myObj = { name: "Sofa", color: "White" }
const myObjOne = { color: "White" }

console.log(showProductName(myObj))

// generecic interface

interface myObject<T, U, Q> {
    name: string
    whells: T
    engine: U
    color: Q
}

type Car = myObject<number, number, string>
type Pen = myObject<boolean, boolean, string>

const myCar: Car = { name: "Corsa", whells: 4, engine: 3, color: "white" }
const myPen: Pen = { name: "Bic", whells: false, engine: false, color: "blue" }

console.log(myCar)
console.log(myPen)

//4 - type parameters

function getSomeKey<T, K extends keyof T>(obj: T, key: K): string {
    return `A chave está presente no objeteo e tem o valor de ${obj[key]}`
}

const server = {
    hd: '2tb',
    ram: '32gb'
}

console.log(getSomeKey(server, 'ram'))
console.log(getSomeKey(server, 'hd'))
// console.log(getSomeKey(server, 'test'))

//5 - keyof type operator

type Character = { name: string, age: number, hasDriveLicense: boolean }

type C = keyof Character

function showCharName(obj: Character, key: C): string {
    return `${obj[key]}`
}

const myChar: Character = {
    name: 'User Test',
    age: 22,
    hasDriveLicense: true
}

console.log(showCharName(myChar, "name"))

// 6 - Typeof Type Operator

const userName: string = "Willian"

const userName2: typeof userName = "Marcos"

const userName3: typeof userName2 = "testUser"

// const userName4: typeof userName3 = 12

// 7 - indexed access type

type Truck = { km: number, kg: number, description: string }

type Km = Truck['km']

const myTruck: Truck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga"
}

function showKm(km: Km): string {
    return `A velocidade do caminhão é ${km}`
}

console.log(showKm(myTruck.km))

// 8 - Conditional Expressions Type

interface A { }

interface B extends A { }

interface Test {
    showName(): string
}

type myType = B extends A ? number : string

const sumVar: myType = 5;
// const sumVar2: myType = "test";

type myTypeB = Test extends { showName(): string } ? string : boolean;

const type: myTypeB = "test"
// const type2: myTypeB = true

type testA = "text"

type CustonType = `some ${testA}`

const testing: CustonType = "some text"
// const testing2: CustonType = "some text2"

type a1 = "tomato"
type a2 = "onion"

type a3 = a1 | a2

const food: a3 = "tomato"
const food2: a3 = "onion"
// const food3: a3 = "hamburger"
