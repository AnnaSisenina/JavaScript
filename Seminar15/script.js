/*
\Задание 1 (тайминг 20 минут)
Напишите функцию getPrototypeChain(obj), которая будет
возвращать цепочку прототипов для заданного объекта
obj. Функция должна вернуть массив прототипов, начиная
от самого объекта и заканчивая глобальным объектом
Object.prototype.
*/

const MyObject = {
    a: 1
};

const getPrototypeChain = (obj) => {
    let array = [];
    while (obj !== null) {
        array.push(obj);
        obj = Object.getPrototypeOf(obj);
    }
    return array;
}

console.log(getPrototypeChain(MyObject));
console.log(MyObject);

/*
Задание 5 (Пример использования)
const animal1 = new Animal("Животное");
animal1.speak(); // Вывод: Животное издает звук.
const dog1 = new Dog("Бобик", "Дворняжка");
dog1.speak(); // Вывод: Животное Бобик издает звук.
console.log(dog1.breed); // Вывод: Дворняжка
dog1.fetch(); // Вывод: Собака Бобик принесла мяч.
*/
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak = () => {
        console.log(`${this.name} издаёт какой-то звук`);
    } 
}

class Dog extends Animal {
    constructor(name,  breed) {
        super(name);
        this.breed = breed;
    }

    fetch = () => {
        console.log(`Собака породы ${this.breed} по кличке ${this.name} принесла мяч`);
    }
}

const something = new Animal('Нечто');
something.speak();

const bobbik = new Dog('Бобик', 'Лабрадор');
bobbik.speak();
bobbik.fetch();


/*
Создать класс "Пользователь" с приватными полями "имя", "возраст" и "электронная почта".
 Класс должен иметь публичные методы "изменить имя", "изменить возраст" и "изменить электронную почту", которые будут изменять соответствующие поля объекта.
 Также класс должен иметь статическое поле "максимальный возраст", которое будет задавать максимально допустимый возраст для всех создаваемых объектов.
 */
 class Person {
    static #maxAge = 120; 
    #name;
    #age;
    #email;

    constructor(name, age, email) {
        this.#name = name;
        if (age > Person.#maxAge) {
            throw new Error("(In constructor) maxAge must be greater than 120");
        }
        this.#age = age;
        this.#email = email;
    }

    getName = () => this.#name;
    setName = (name) => {
        this.#name = name;
    }
    getAge = () => this.#age;
    setAge = (age) => {
        if (age > Person.#maxAge) {
            throw new Error("maxAge must be greater than 120");
        }
        this.#age = age;
    }
    getEmail = () => this.#email;
    setEmail = (email) => {
        this.#email = email;
    }
}

const user1 = new Person('John', 50, 'john@mail.com');
console.log(user1.getName());
user1.setName('Frank');
console.log(user1.getName());
user1.setAge(100);
console.log(user1.getAge());
user1.setEmail('Frank@mail.com');
console.log(user1.getEmail());

const user2 = new Person('John', 100, 'john@mail.com');

 /*
 Создать класс "Товар" с приватными полями "название", "цена" и "количество". 
 Класс должен иметь публичные методы "изменить цену", "изменить количество" и "получить стоимость", 
 которые будут изменять соответствующие поля объекта и возвращать стоимость товара соответственно. 
 Также класс должен иметь статическое поле "максимальное количество", которое будет задавать максимально допустимое количество товара для всех создаваемых объектов.
*/

class Product {
    static #maxCount = 100;
    #name;
    #price;
    #quantity;

    constructor(name, price, quantity) {
        this.#name = name;
        this.#price = price;
        if (quantity > Product.#maxCount) {
            throw new Error(`Max quantity is ${Product.#maxCount}`);
        } 
        if (quantity < 0) {
            throw new Error(`Min quantity is 0`);
        }
        this.#quantity = quantity;
    }

    get name() { return this.#name; }
    set name(value) { this.#name = value; }
    get price() { return this.#price; }
    set price(value) { this.#price = value; }
    get quantity() { return this.#quantity; }
    setQuantity = (value) => {
        if (value > Product.#maxCount) {
            throw new Error(`Max quantity is ${Product.#maxCount}`);
        } 
        if (value < 0) {
            throw new Error(`Min quantity is 0`);
        }
        this.#quantity = value;
    }
}

const iPhone = new Product('iPhone', 100000, 10);
console.log(iPhone.name);
console.log(iPhone.price);
console.log(iPhone.quantity);

iPhone.setQuantity(50);
console.log(iPhone.quantity);

const Samsung = new Product('Samsung', 50000, 5);