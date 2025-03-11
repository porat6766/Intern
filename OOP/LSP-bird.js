//<<<Liskov Subtitution Principle>>>//

const CanFly = {
    fly() {
        console.log(`${this.name} says: Hello, I am flying!`);
    }
};

const CanSwim = {
    swim() {
        console.log(`${this.name} says: Hello, I am swimming!`);
    }
};


class Bird {
    constructor(name) {
        this.name = name;
    }
    makeASound() {
        console.log(`Sound of ${this.name}...`);
    }
}


class Duck extends Bird {
    constructor() {
        super("Duck");
        Object.assign(this, CanFly, CanSwim);
    }
}

class Penguin extends Bird {
    constructor() {
        super("Penguin");
        Object.assign(this, CanSwim);
    }
}

class Owl extends Bird {
    constructor() {
        super("Owl");
        Object.assign(this, CanFly);
    }
}


function makeBirdFly(bird) {
    if (typeof bird.fly === "function") {
        bird.fly();
    } else {
        console.log(`${bird.name} can't fly!`);
    }
}

function makeBirdSwim(bird) {
    if (typeof bird.swim === "function") {
        bird.swim();
    } else {
        console.log(`${bird.name} can't swim!`);
    }
}


const duck = new Duck();
const penguin = new Penguin();
const owl = new Owl();

makeBirdFly(duck);   
makeBirdSwim(duck);  
makeBirdSwim(penguin); 
makeBirdFly(owl);    
makeBirdSwim(owl);   
