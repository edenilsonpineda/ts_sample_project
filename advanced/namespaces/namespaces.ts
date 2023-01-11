namespace DatabaseEntity {
    export class User {
        constructor(public name: string) {
            
        }
    }

    const myUser = new User("Edenilson");
    console.log(myUser);
}

const myOtherUser = new DatabaseEntity.User("Frida");
console.log(myOtherUser.name);