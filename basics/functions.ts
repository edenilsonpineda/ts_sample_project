// arrow functions
const greeting = (name: String) => {
    console.log(`Hola ${name}`);
}

greeting("Edenilson!");

function sayGoodBye(name: String) {
    console.log(`Adios ${name}`);
}

sayGoodBye("Edenilson")

function show(): void {
    console.log("\nPrinting a log from a void method!")
}

function sum(num1: number, num2: number): Number {
    return num1 + num2;
}


show(); // call function
const totalOfSum : Number = sum(128,128);
console.log(`\nThe total of the sum is: ${totalOfSum}`);


const response = {
    id: 1,
    name: 'TypeScript Programming Language',
    version: 1.0
};

function showObject({ name, ...other }: { id; name; version }): number {
    console.log(`Nombre enviado es: ${name}`)
    return -1; 
}

showObject(response);