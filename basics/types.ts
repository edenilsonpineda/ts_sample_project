let age: string = "TypeScript Rocks!!"
let month: number = 1;
let isDeveloper: boolean = true;
let person: Object = {};


// Complex Types
let fruits: Object[] = [{}, { type: 'String', version: '1.0.0' }]


// Any can be set with any primitive type or objects
let response: any = "TypeScript";
response = 20;
response = true;
response = ["TypeScript Array", 3.1416];

function saludar(): void {
    console.log("Hola, desde TypeScript!");
}

let response_unk: unknown;
response = true;
console.log(response);



let responseNullable = null;
let undefinedResponse = undefined;


type ResponseTypeService = string | undefined; // Complex type
let responseNullOrStr: ResponseTypeService;

responseNullOrStr?.toString().concat("Reponse Type Service! :P");

console.log(responseNullOrStr);


saludar();


/**
 * Types assertion
 */

let message: any = "a text in upper case using string builder methods";
let messageUpperCase = (message as string).toUpperCase();
let messageParsing = <string> message;

// const canvas = <HTMLCanvasElement> document.getElementById("canvas"); // casting a doc element from the DOM

console.log(messageUpperCase);


export {}; // used to supress error of scope