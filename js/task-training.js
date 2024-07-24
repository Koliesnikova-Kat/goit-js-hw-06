/*
? Напиши скрипт, який для об'єкта user, послідовно:
? - додає поле mood зі значенням 'happy'
? - замінює значення hobby на 'skydiving'
? - замінює значення premium на false
? - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
*/

// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = !user.premium;

// console.log(user);

// const userObject = Object.keys(user);
// for (const key of userObject) {
//     console.log(`${key}: ${user[key]}`);
// }




//? Зведіть у квадрат кожен елемент цього об'єкта.

// const obj = { x: 2, y: 3, z: 4 };
// console.log(obj);

// const keysObj = Object.keys(obj);
// console.log(keysObj);

// for (const key of keysObj) {
//     obj[key] = obj[key] ** 2;
// }
// console.log(obj);



/*
? У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
? підсумовування всіх зарплат і збережіть результат у змінній sum.
? Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
*/

// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };

// let sum = 0;

// const keys = Object.keys(salaries);
// for (const key of keys) {
//     sum += salaries[key];
// }

// console.log(sum);