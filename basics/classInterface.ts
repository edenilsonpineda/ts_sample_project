interface PersonInterface {
    name: string;
    code: string | number;
    charge: number;
    description?: string; // optional value
    token?: string;
    calculateTaxes: () => string;
}

class PersonClass implements PersonInterface{
    name: string;
    code: string | number;
    charge: number;
    description?: string | undefined;
    token?: string | undefined;
    calculateTaxes: () => string;
}

const personOne: PersonClass = new PersonClass();

class Employee extends PersonClass {}