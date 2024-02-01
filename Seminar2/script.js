let age = prompt("Enter your age: ");

let name = prompt("Enter your name: ");

console.log(age, username);

//let a = 13;
//let b = 5;
//console.log(a % b);

//let a = '2.3';
//let b = '3.5';
//console.log(Number(a)+Number(b));
//console.log(+a + (+b));
//console.log(parseInt(a)+parseInt(b));

let a = prompt("a = ");
let b = prompt("b = ");

console.log(Number(a)+Number(b));
console.log(Number(a)-Number(b));
console.log(Number(a)*Number(b));
console.log(Number(a)/Number(b));
console.log(Number(a)%Number(b));

// Пользователь с клавиатуры вводит число, Необходимо создать
// условный оператор который
// a. Выводит в консоль “Число больше 5”
// b. Выводит в консоль “Число меньше 5”
// c. Выводит в консоль “Число равно 5”
// 2. Даны переменные test1 и test2. Проверьте, равны ли их значения и
// выведите соответствующее сообщение.
// 3. Пользовать с клавиатуры вводит 2 числа
// a. Необходимо найти какое из двух чисел минимальное
// 4. Пользователь с клавиатуры вводит число, Проверьте, что данная
// переменная больше нуля и меньше 15.

// let number = Number(prompt("Enter number"));
// console.log(number);
//    if (typeof number === 'number' && !isNaN(number)) {
//     if (number > 5) {
//         console.log(number);
//     } else {
//         console.log('Число меньше или равно 5');
//     }
// } else {
//     console.log('Это не число!');
// }

// var booleanValue = true;
// var numericalValue = 354;
// var stringValue = "This is a String";
// var stringObject = new String("This is a String Object");
// console.log(typeof booleanValue) // displays "boolean"
// console.log(typeof numericalValue) // displays "number"
// console.log(typeof stringValue) // displays "string"
// console.log(typeof stringObject) // displays "object"


// let test1 = prompt('Enter test1');
// let test2 = prompt('Enter test2');

// if (test1 === test2) {
//     console.log('values are equal');
// }


let test1 = Number(prompt('Enter test1'));

if (test1 > 0 && test1 < 15) {
    console.log('Условия выполнены');
} else {
    console.log('Условия не выполнены');
}