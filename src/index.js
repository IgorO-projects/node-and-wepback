const validator = require('validator')
const greeter = require('./greeter');
const message = 'i gonna be webDeveloper';
console.log(message);

greeter('hello world'); 

const validatedEmail = email => {
    return validator.isEmail(email);
}

console.log('Is coconut@cocotree.af a valid email?', validatedEmail('coconut@cocotree.af'));
console.log('Is grapegrape.af a valid email?', validatedEmail('grapegrape.af'));

class User {
    static hello = 'hello'; 

    constructor (name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

const coco = new User('Coco');

console.log(coco.name);
