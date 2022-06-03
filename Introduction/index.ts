const firstName = "Carlos" //string
const anotherName = 1 //number
const x = true //boolean

function greeting(name: string): void { //type string, return void
    console.log(name)
}

greeting(firstName); //just accept string as parameter
//greeting(anotherName);
//greeting(x);

//module challenge

function sum(number1: number, number2: number) {
    console.log("The sum of number1 and number2 is:", number1 + number2)
}

sum(10, 2)