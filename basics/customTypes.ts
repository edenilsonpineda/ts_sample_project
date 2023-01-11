type PersonType = {
    name: string;
    code: string | number;
    description?: string
}

const newPerson: PersonType = {
    code: "H",
    name: "JSON"
};

console.log(newPerson);

let response: string | null | number | undefined;