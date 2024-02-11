/* Написать функцию, которой передаем, имя, фамилия и
возраст, и получаем строку "Привет Иван Петров с
возрастом 17" (только здесь данные, которые были
переданы в функцию) */

const hello = function(firstname, lastname, age) {
    return `Привет ${firstname} ${lastname} с возрастом ${age}`
};

console.log(hello(`Иван`, `Петров`, 17));

/* Создайте функцию которая возводит переданное число в
квадрат
*/

const pow = function (x) {return x*x};
console.log(pow(2));

/* Сделайте функцию, которая параметром принимает
число и проверяет, положительное это число или
отрицательное. В первом случае пусть функция выводит
в консоль текст '+++', а во втором '---'.*/


/* Сделайте функцию, которая параметрами принимает 3 числа и
выводит в консоль сумму этих чисел.
2. С помощью созданной вами функции выведите в консоль сумму
значений этих переменных.
let param1 = 1;
let param2 = 2;
let param3 = 3;
1. Дана фукнция
function func(num = 5) {
console.log(num * num);
}
Расскажите, каким будет результат каждого из вызовов функции.
func(2);
func(3);
func();*/


let param1 = 1;
let param2 = 2;
let param3 = 3;

const funcSum = function (num1, num2, num3) {
    let sum = num1 + num2 + num3;
    return sum;
}

console.log(funcSum (param1, param2, param3));

/* Сделайте функцию, которая параметром принимает число, а
возвращает квадратный корень из этого числа. С помощью этой
функции найдите корень числа 3, затем найдите корень числа 4.
Просуммируйте полученные результаты и выведите их в консоль.
2. Создайте функцию, которая находит минимальное число из 2х
передаваемых аргументов функции*/

const funcSqrt = function (num) {
    if (num >= 0) {
        let numSqrt = Math.sqrt(num);
        return numSqrt
    }
    else {
        console.log("Введите положительное число");
    }
}

console.log(funcSqrt(4));

// Сделайте функцию, которая принимает параметром число от 1 до 7,
// а возвращает день недели на русском языке.

let week = num => {
    if (num === 1) {
        return "понедельник";
    } else if (num === 2) {
        return "вторник";
    } else if (num === 3) {
        return "среда";
    } else if (num === 4) {
        return "четверг";
    } else if (num === 5) {
        return "пятница";
    } else if (num === 6) {
        return "суббота";
    } else if (num === 7) {
        return "воскресенье";
    } else return "Нет такого дня недели";
}

let week2 = num => {
    let result = null;
    switch (num) {
        case 1:
            result = "понедельник";
            break;
        case 2:
            result = "вторник";
            break;
        case 3:
            result = "среда";
            break;
        case 4:
            result = "четверг";
            break;
        case 5:
            result = "пятница";
            break;
        case 6:
            result = "суббота";
            break;
        case 7:
            result = "воскресенье";
            break;
        default:
            result = "Нет такого дня недели";
    }
    return result;
}

console.log(week2('2'));
console.log(week2(1));
console.log(week2(5));
console.log(week2(9));
console.log('');

/*Написать функцию, которой передаем имя и она возвращает
приветствие в зависимости от времени суток (Доброе
утро\день\вечер\ночи Иван)*/

let helloU = name => {
    let result = null;
    let time = new Date().getHours();
    if (time < 10 && time > 6) {
        result = `Доброе утро ${name}`;
    } else if (time < 18 && time > 9) {
        result = `Добрый день ${name}`;
    } else if (time < 23 && time > 17) {
        result = `Добрый вечер ${name}`;
    } else result = `Доброй ночи ${name}. Иди спать!`;
    return result;
}

console.log(helloU("Valerii"));;