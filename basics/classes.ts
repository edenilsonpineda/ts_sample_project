class Main {
    private id: Number;
    private model?: String;
    protected manufacturer: String;
    constructor(model?: String) {
        this.model = model;
    }

    sayHi(name: String){
        console.log("Hi " + name + "!");
    }
}

class Tablet extends Main {
    price: "$999.99"
}

const mainInstance: Main = new Main();
const inheritedClass: Tablet = new Tablet();


mainInstance.sayHi("Steve Jobs!");