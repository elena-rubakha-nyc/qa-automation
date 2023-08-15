// Обьектно-ориентированное программирование
// 1 принцип: абстракция (не обязвтельно задавать ВСЕ характеритстики)
// 2 принцип: наследование
// 3 принцип: инкапсуляция
// 4 принцип: полиморфизм  - использование одних и тех же структур по-разному

// classes

class Car {
  constructor(color, brand, model) {
    this.color = color; //работает только внутри обьекта, с его конструкцикй
    this.brand = brand;
    this.model = model;
  }
}

let myNewCar = new Car("red", "bmw", "fast");
let sergeyCar = new Car("blue");
console.log(sergeyCar);
console.log(myNewCar);
//console.log(typeof myNewCar);

let mySecondCar = new Car("amazonGrey", "Hyundai", "Tucson");
console.log(mySecondCar);

let cars = [
  new Car("black", "toyota", "rav4"),
  new Car("white", "mini Cooper", "sonic"),
];

console.log(cars);

console.log(typeof Car);

// Способ 2

let User = class {
  sayHello() {
    console.log("Hello");
  }
};

new User().sayHello();
let newUser = new User();

// Способ 3: функция - более сложная схема

function createClass(greetingsText) {
  return class {
    sayGreetings() {
      console.log(greetingsText);
    }
  };
}

//console.log(createClass);

let Person = createClass("Hi! How are you?");
new Person().sayGreetings();

// ЗАДАЧА на рассчет баллов студентов
class Students {
  constructor() {
    this.pointsArray = [];
  }
  addPoints(value) {
    this.pointsArray.push(value);
  }
  calculateTotalPoints() {
    let sum = 0;
    for (let eachValue of this.pointsArray) {
      sum += eachValue;
    }
    return sum;
  }
}

let igor = new Students();
console.log(igor.pointsArray);
igor.addPoints(35);
igor.addPoints(40);
igor.addPoints(80);
console.log(igor.calculateTotalPoints());

// Getter, setter

class Man {
  #gender = "male"; // # - будет работать только внутри класса
  constructor() {
    this.gender = "male";
  }
  getGender() {
    return this.#gender;
  }
}

let Maks = new Man();
console.log(Maks.getGender());

class Pet {
  constructor(name, city) {
    this.name = name;
    this.city = city;
  }
  set city(newCity) {
    this._city = newCity; //_ берет те же самые данные, перезаписывает значение
  }
  get city() {
    return this._city;
  }
}

const solomon = new Pet("Solomon", "NYC");
console.log(solomon._city);
solomon.city = "Madrid";
console.log(solomon._city);

class Student {
  constructor(studentName) {
    this.studentName = studentName;
  }
}

class ManualStudent extends Student {
  constructor(studentName, gender) {
    super(studentName);
    this.gender = gender;
  }
}

let kotik = new ManualStudent("Solomonchik", "male");
console.log(kotik);

// Class with preset params

class Door {
  constructor(material, color) {
    this.material = material;
    this.width = 24;
    this.height = 42;
    this.color = color;
  }
}
let entranceDoor = new Door("wood", "blue");
console.log(entranceDoor);
