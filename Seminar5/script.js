const week = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье'
}
console.log(week[2]);



const user = {
  name: 'Vasysa',
  age: 23,
  surname: 'Morev'
};
user.fatherName = prompt('Enter Father name');
console.log(user.name, user.surname, user.fatherName, user.age);



const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
const obj = {}
for (let i = 0; i < arr1.length; i++) {
    obj[arr2[i]] = arr1[i]
}
console.log(obj);




const obj1 = {x: 1, y: 2, z: 3};
for (const key in obj1) {
    if (Object.hasOwnProperty.call(obj1, key)) {
        obj1[key] = obj1[key] ** 2;
    }
}
console.log(obj1);


const obj2 = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
};
let sum = 0
for(const key in obj2) {
    for(const value in obj2[key]){
        sum += obj2[key][value]
    }
}

console.log(sum);



const riddles = {
    question: 'How are you?',
    answer: 'Kolya',
    tries: 0,
    askQuestion: function () {
        let answer = prompt(this.question);
        if (answer === this.answer) {
            console.log('You are win!');
        } else {
            if (this.tries !== 2) {
                this.tries++;
                this.askQuestion();
            } else {
                console.log('You are loose!');
            }

        }
    }
};

riddles.askQuestion();