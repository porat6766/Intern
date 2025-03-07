// //Inheritance//
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class Person {
//     constructor(public name: string, public age: string) {
//         this.name = name;
//         this.age = age;
//     }
//     sayHello() {
//         console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
//     }
// }
// const person_1 = new Person("John", "25");
// person_1.sayHello();
// class Employee extends Person {
//     constructor(public name: string, public age: string, public department: string) {
//         super(name, age);
//         this.department = department;
//     }
//     sayHello() {
//         console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old. I work in ${this.department}.`);
//     }
//     work() {
//         console.log(`I work in ${this.department}.`);
//     }
// }
// const employee_1 = new Employee("John", "25", "IT");
// employee_1.sayHello();
// employee_1.work();
// //Polymorphism//
// class Animal {
//     makeSound() {
//         console.log("The animal makes a sound.");
//     }
// }
// class Dog extends Animal {
//     makeSound() {
//         console.log("The dog barks.");
//     }
// }
// class Cat extends Animal {
//     makeSound() {
//         console.log("The cat meows.");
//     }
// }
// const dog_1 = new Dog();
// const cat_1 = new Cat();
// cat_1.makeSound(), cat_1.makeSound();
// //Solid//
// class Car {
//     private fuelLevel: number;
//     readonly power: number = 100;
//     constructor(fuelLevel) {
//         this.fuelLevel = fuelLevel;
//     }
//     drive() {
//         console.log("The car is driving.");
//     }
//     getFuelLevel() {
//         console.log(this.fuelLevel);
//     }
// }
// console.log(Car.prototype);
// const car_1 = new Car(100);
// car_1.drive()
// car_1.getFuelLevel()
// car_1.getFuelLevel()
// console.log(car_1.power)
// class sayHi {
//     sayHello(message: string) {
//         console.log(message);
//     }
// }
// class User {
//     constructor(public name, public sayHi) {
//         this.name = name;
//         this.sayHi = sayHi
//     }
//     Hello() {
//         this.sayHi.sayHello(`Hello ${this.name}`)
//     }
// }
// const sayHi_1 = new sayHi()
// const user_1 = new User("John", sayHi_1)
// user_1.Hello()
// //(Open/Closed Principle - OCP)//
// class Shape {
//     area() {
//         throw new Error("Method not implemented.");
//     }
// }
// class Circle1 extends Shape {
//     constructor(public radius) {
//         super()
//         this.radius = radius
//     }
//     area() {
//         return Math.PI * this.radius * this.radius
//     }
// }
// class Circle2 extends Shape {
//     constructor(public radius) {
//         super()
//         this.radius = radius
//     }
// }
// const circle_1 = new Circle1(5)
// const circle_2 = new Circle2(5)
// circle_1.area()
// circle_2.area()
// class GoToTheGym {
//     goGym(name) {
//         console.log('I goooooo', name);
//     }
// }
// class IAmArtist {
//     art(name) {
//         console.log('Yaaa I am an artist', name);
//     }
// }
// class IDoAll {
//     constructor(public goToTheGym, public iAmArtist) {
//         this.goToTheGym = goToTheGym;
//         this.iAmArtist = iAmArtist;
//     }
//     doAll() {
//         this.goToTheGym.goGym('John');
//         this.iAmArtist.art('John');
//     }
// }
// const gymPerson = new GoToTheGym();
// const artistPerson = new IAmArtist();
// const multiTalentedPerson = new IDoAll(gymPerson, artistPerson);
// multiTalentedPerson.doAll();
var INotificationService = /** @class */ (function () {
    function INotificationService() {
    }
    INotificationService.prototype.send = function (to, message, name) {
        throw new Error('Method not implemented');
    };
    return INotificationService;
}());
var EmailService = /** @class */ (function (_super) {
    __extends(EmailService, _super);
    function EmailService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmailService.prototype.send = function (to, message, name) {
        console.log("\uD83D\uDCE7 EMAIL-".concat(to, ": ").concat(message, " and my name is ").concat(name));
    };
    return EmailService;
}(INotificationService));
var SMSService = /** @class */ (function (_super) {
    __extends(SMSService, _super);
    function SMSService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SMSService.prototype.send = function (to, message, name) {
        console.log("\uD83D\uDCE9  SMS -".concat(to, ": ").concat(message, " and my name is ").concat(name));
    };
    return SMSService;
}(INotificationService));
var WhatsAppService = /** @class */ (function (_super) {
    __extends(WhatsAppService, _super);
    function WhatsAppService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WhatsAppService.prototype.send = function (to, message, name) {
        console.log("\uD83D\uDCAC WhatsApp -".concat(to, ": ").concat(message, " and my name is ").concat(name));
    };
    return WhatsAppService;
}(INotificationService));
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
        this.name = name;
    }
    return User;
}());
var Nutification = /** @class */ (function (_super) {
    __extends(Nutification, _super);
    function Nutification(typeService, name) {
        var _this = _super.call(this, name) || this;
        _this.typeService = typeService;
        _this.typeService = typeService;
        return _this;
    }
    Nutification.prototype.send = function (to, message) {
        this.typeService.send(to, message, this.name);
    };
    return Nutification;
}(User));
var user_1 = new Nutification(new EmailService(), "Porat");
user_1.send("haim", "whatsapppppp");
