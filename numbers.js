// Парс числа з Number.parseInt() 
// і Number.parseFloat()

const elementWidth = '50px';
// const result = Number.parseInt(elementWidth);

// console.log( result);
// elementWidth = ;
// console.log('elementWidth:', elementWidth);
// ............

let elementHeight = '200.74px';

elementHeight = Number.parseFloat(elementHeight) ;
console.log('elementHeight:', elementHeight);

// ...........
// Метод число .toFixed(digits)
// Матрьошки на прикладі console.log(Number(число, toFixed(digits)));
//
let salary = 1300.16472;
salary = Number(salary.toFixed(3));
// salary = salary.toFixed(3)
// salary = Number(salary)


console.log(salary)

// ...........

// Переводимо (переобразовуємо) в число з Number(value)
// Значення NaN (Not a Number) і метод Number.isNaN(value)
// 
let quantity = '30';
let value = 'Цю строку неможливо перевести в число';
console.log(Number(true));
// .............
// Обєкт Math
// - Піднесення до степені
// - Exponent operator

const base = 2;
const power = 5;
// const result = Math.pow(2,5);
// console.log(base ** power)


// ..............

// Генеруємо псевдовипадкове число
// - Math.random()
// - Math.round()

// const max = 10
// const min = 5
// const = 
// Number.random() * (max - min) + min;


// ..............


//Приклад використання
const colors = ['tomato', 'orange', 'blue', 'deeppink'];
const max = colors.length - 1;
const min = 0;

const index = Math.round((Math.random() * (max - min) + min));

const color = colors[index];

console.log(color);

document.body.style.backgroundColor = color;
