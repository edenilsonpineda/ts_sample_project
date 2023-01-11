interface Person {
    name: string;
    code: string | number;
    charge: number;
    description?: string; // optional value
    token?: string;
    calculateTaxes: () => string;
}

let person: Person = {
    name: "John",
    code: "01",
    charge: 19,
    description: "",
    token: "0x015jxFl0ax",
    calculateTaxes: () => "25%"
}


let anotherPerson: Person = {
    name: "",
    code: "",
    charge: 19.99,
    calculateTaxes: () => "25%"
}

anotherPerson.description?.toUpperCase();