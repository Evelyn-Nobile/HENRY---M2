//! ARROW FUNCTIONS

//* Sintaxis
// Función clásica
const suma = function(num) {
    return num + 1;
}
// Arrow
// return implícito
const sumaArrow = num => num + 1;
// console.log(sumaArrow(5));

// Cuerpo con STATEMENTS ---> No retornan nada
const nums = [1, 2, 3, 4, 5, 6];
const multiplosDeDos = [];
const result = nums.forEach(num => {
    if(num % 2 === 0) multiplosDeDos.push(num);
})
console.log(result);
console.log(multiplosDeDos);

// Cuerpo con EXPRESIONES ---> Retornan algo
let multiplosDeTres = nums.filter(num => num % 3 === 0); // retorna [ ]
console.log(multiplosDeTres);
console.log(nums);

