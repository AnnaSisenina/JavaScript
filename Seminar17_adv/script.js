/* Задание 1
• Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции.
• Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator.
{
title: "Название альбома",
artist: "Исполнитель",
year: "Год выпуска"
}
• Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
• Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате:
 Название альбома - Исполнитель (Год выпуска) */

const musicCollection = [
    { title: "Blooming", artist: "Steven Beddall", year: "2024"},
    { title: "Proof", artist: "BTS", year: "2022"},
    { title: "SOS", artist: "SZA", year: "2022"}
];

musicCollection[Symbol.iterator] = function() {
    return {
        current: 0,
        to: this.length,
        next() {
            return this.current < this.to ? { done: false, value: musicCollection[this.current++]} : {done : true};
        }
    }
}

for (let album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
}

/*
Задание 2
Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.
Необходимо создать систему управления этими заказами, которая позволит:
• Отслеживать, какой повар готовит какое блюдо.
• Записывать, какие блюда заказал каждый клиент.
Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

Повара и их специализации:
Виктор - специализация: Пицца.
Ольга - специализация: Суши.
Дмитрий - специализация: Десерты.

Блюда и их повара:
Пицца "Маргарита" - повар: Виктор.
Пицца "Пепперони" - повар: Виктор.
Суши "Филадельфия" - повар: Ольга.
Суши "Калифорния" - повар: Ольга.
Тирамису - повар: Дмитрий.
Чизкейк - повар: Дмитрий.

Заказы:
Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
Клиент Ирина заказала: Чизкейк.
*/


class Chef {
    constructor(firstName, specialization){
        this.firstName = firstName;
        this.specialization = specialization;
    }
}

class Client {
    constructor(firstName) {
        this.firstName = firstName;
    }

    getClient() {
        return `{this.firsName} `
    }
}

class Restaurant {
    constructor(menu, ...chefs){
        this.menu = menu;
        this.chefs = new Set();
        for (const chef of chefs) {
            this.chefs.add(chef);
        }
    }

    printProperties() {
        console.log("Restaurant:");
        console.log("Меню ресторана: ");
        console.log(this.menu)
        console.log("Шеф-Повара ресторана: ");
        console.log(this.chefs);
    }

}
const menu = new Map();
menu.set("Пицца", ["Пицца Маргарита", "Пицца Пепперони"]);
menu.set("Суши", ["Суши Филадельфия", "Суши Калифорния"]);
menu.set("Десерты", ["Тирамису", "Чизкейк"]);

const chef1 = new Chef("Виктор", "Пицца");
const chef2 = new Chef("Ольга", "Суши");
const chef3 = new Chef("Дмитрий", "Десерты");

const myRestaurant = new Restaurant(menu, chef1, chef2, chef3);
myRestaurant.printProperties();

const client1 = new Client("Алексей");
const client2 = new Client("Мария");
const client3 = new Client("Ирина");


class Orders {
    #map = new Map();
    
    displayInfo = () => {
        console.log(this.#map);
    }
    getOrders = () => {
        return this.#map;
    }

    addOrder = (client, ...orders) => {
        const clientOrders = this.#map.get(client) || new Map();

        for (const [item, quantity] of orders) {
            if (clientOrders.has(item)) {
                const currentQuantity = clientOrders.get(item);
                clientOrders.set(item, currentQuantity + quantity);
            } else {
                clientOrders.set(item, quantity);
            }
        }
        this.#map.set(client, clientOrders);
    }

}

let orders = new Orders();
orders.addOrder(client1, ["Пицца Пепперони", 1], ["Тирамису", 1]);
orders.addOrder(client2, ["Суши Калифорния", 1], ["Пицца Маргарита", 1]);
orders.addOrder(client3, ["Чизкейк", 2]);
orders.displayInfo();

function getChefOrders(restaurant, orders) {
 
    //собираем список поворов и блюд, которые они приготовили
    const chefOrders = new Map();
    //берем весь список заказов
    for (const [client, clientOrders] of orders) {
        //берем одну позицию из заказа клиента
        for (const order of clientOrders) {
            //берем название заказанного блюда
            const clientDish = order[0];
            //ищем тип этого блюда по меню
            for (const [typeOfDish, Dish] of restaurant.menu) {
                //перебираем все значения каждой группы меню, чтобы найти соответствующее заказу блюдо
                for (const dishFromMenu of Dish){
                    if (dishFromMenu === clientDish) {  
                        //после нахождения нужного блюда в меню, идем к списку шефов и ищем по среди их специализации тип, который соответствует группе меню
                        for (const chef of restaurant.chefs) {
                            if (chef.specialization === typeOfDish) {
                                //проверяем есть ли уже этот шеф в результирующем списке, если есть - добавляем в массив только значение, если нет, добавляем пару ключ-значение
                                if (chefOrders.has(chef)) {
                                    const chefDishes = chefOrders.get(chef);
                                    chefDishes.push(clientDish);
                                    chefOrders.set(chef, chefDishes);
                                }
                                else {
                                    chefOrders.set(chef,[clientDish]);
                                }
                            } 
                        } 
                    }      
                }
            }

        }
    }
    return chefOrders;
}

console.log(getChefOrders(myRestaurant, orders.getOrders()));