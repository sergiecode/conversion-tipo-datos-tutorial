// Ejemplo de conversión de number a string
let number = 123;
let str = String(number);

console.log(typeof str); // "string"
console.log(str); // "123"

// Ejemplo de conversión de string a number
let str = "456";
let number = Number(str);

console.log(typeof number); // "number"
console.log(number); // 456

// Ejemplo de conversión de boolean a string
let bool = true;
let str = String(bool);

console.log(typeof str); // "string"
console.log(str); // "true"

// Ejemplo de conversión de boolean a number
let bool = true;
let number = Number(bool);

console.log(typeof number); // "number"
console.log(number); // 1

// Ejemplo de conversión de string a boolean
let str = "true";
let bool = Boolean(str);

console.log(typeof bool); // "boolean"
console.log(bool); // true

// Ejemplo de conversión de number a boolean
let number = 0;
let bool = Boolean(number);

console.log(typeof bool); // "boolean"
console.log(bool); // false

// Ejemplo de conversión de string a array
let str = "Hola";
let array = Array.from(str);

console.log(Array.isArray(array)); // true
console.log(array); // ["H", "o", "l", "a"]

// Ejemplo de conversión de array a string
let array = ["H", "o", "l", "a"];
let str = array.join("");

console.log(typeof str); // "string"
console.log(str); // "Hola"
