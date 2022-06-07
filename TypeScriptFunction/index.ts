// 1 - Void

function withoutReturn(): void {
    console.log("This function has no return")
    // return 1
}

withoutReturn()

//--------------------------------------------------------------------------------
// 2 - Callback with argument

function greeting(name: string) {
    return `Hello ${name}`
}

function preGeeting(f: (name: string) => string, userName: string) {
    console.log("Preparing function")
    const greet = f(userName)
    console.log(greet)
}

preGeeting(greeting, "Willian")

function whatNumberIsThis(number: number): number {
    return number
}

function preNumberIsThis(n: (number: number) => number, chosenNumber: number) {
    console.log("Preparing function")
    const isThis = n(chosenNumber)
    console.log(isThis)
}

preNumberIsThis(whatNumberIsThis, 3)

//--------------------------------------------------------------------------------
// 3 - Generic functions

function firstElement<T>(array: T[]): T {
    return array[0]
}

console.log(firstElement([1, 2, 3]))
console.log(firstElement(["a", "b", "c"]))
console.log(firstElement([true, false, true]))
// console.log(firstElement("test")) //Error type is not array

function mergeObjects<U, T>(obj1: U, obj2: T) {
    return {
        ...obj1,
        ...obj2
    }
}

const newObject = mergeObjects({ name: "Matheus" }, { age: 30, job: "Programmer" })

console.log(newObject)

//--------------------------------------------------------------------------------
// 3 - Constraints

function biggestNumber<T extends number | string>(a: T, b: T): T {
    let biggest: T

    if (+a > +b) {
        biggest = a
    } else {
        biggest = b
    }

    return biggest
}

console.log(biggestNumber(8, 9))
console.log(biggestNumber("12", "4"))

//--------------------------------------------------------------------------------
// 5 - Specify argument type

function mergeArrays<T>(array1: T[], array2: T[]) {
    return array1.concat(array2)
}

console.log(mergeArrays<number | string>([1, 2, 3], ["test1", "test2", "test3"]))

function testArray<T>(test1: T[], test2: T[]) {
    return test1.concat(test2)
}

console.log(testArray<string | number>(["test1", "test2"], [1, 2]))

//--------------------------------------------------------------------------------
// 6 - Optional parameters

function modernGreeting(name: string, greet?: string): void {
    if (greet) {
        console.log(`Welcome ${greet} ${name}`)
        return
    }
    console.log(`Welcome ${name}`)
}

modernGreeting("User", "Dr.")
modernGreeting("User1")

//--------------------------------------------------------------------------------
// 7 - Default parameters

function sumDefault(number1: number, number2 = 10) {
    return number1 + number2
}

console.log(sumDefault(10))
console.log(sumDefault(10, 7))

//--------------------------------------------------------------------------------
// 8 - Unknown type

function doSomething(x: unknown) {
    if (Array.isArray(x)) {
        console.log(`Array: ${x[0]}`)
    } else if (Number.isInteger(x)) {
        console.log(`Number: ${x}`)
    }
}

doSomething([3, 4])
doSomething(4)

//--------------------------------------------------------------------------------
// 9 - Never type

function showErrorMessage(msg: string): never {
    throw new Error(msg)
}

// showErrorMessage("Erro 404")]

//--------------------------------------------------------------------------------
// 10 - Rest operator

function sumAll(...n: number[]) {
    return n.reduce((number, sum) => number + sum)
}

console.log(sumAll(4, 5, 6, 1, 2))

//--------------------------------------------------------------------------------
// 12 - Destructuring in parameters

function showProductDetails({ name, price }: { name: string, price: number }): string {
    return `The product name is ${name}, and it costs ${price}`
}

const shirt = { name: "Jeans", price: 59.9 }

console.log(showProductDetails(shirt))
console.log(showProductDetails({name: "T-shirt", price: 20}))