/*
Задание 1
Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
*/

let thirdPower = function (number) {
    return number*number*number;
}
console.log("2^3 + 3^3 = ", thirdPower(2) + thirdPower(3));

/*
Задание 2
Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"
*/

let salaryAfterTaxes = function (number) {
    if (isNaN(number)) {
        return "Значение задано неверно";
    }
    else {
        let netSalary = number - (number * 0,13);
        return `Размер заработной платы за вычетом налогов равен ${netSalary}`
    }
}
let userNumber = prompt("Введите число: ");
console.log(salaryAfterTaxes(userNumber));

/*
Задание 3
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел
*/

let maxNumber = function (num1, num2, num3) {
    if (num1 >= num2 & num1 >= num3) return num1
    else if (num2 >= num1 & num2 >= num3) return num2
    else if (num3 >= num1 & num3 >= num2) return num3
}

let number1 = prompt("Введите первое число: ");
let number2 = prompt("Введите второе число: ");
let number3 = prompt("Введите третье число: ");

console.log (`Максимальное значение среди введенных чисел: ${maxNumber(number1, number2, number3)}`)

/*
Задание 4
Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); 
должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). 
Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. 
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.
*/

let sum = function (num1, num2) {
    return num1+num2;
}

let difference = function (num1, num2) {
    if (num1 >= num2) return num1-num2;
    else return num2-num1;
}

let multiplication = function (num1, num2) {
    return num1*num2;
}

let division = function (num1, num2) {
    return num1 / num2;
}

console.log(sum(2, 6));
console.log(difference(2, 6));
console.log(multiplication(2, 6));
console.log(division(2, 6));