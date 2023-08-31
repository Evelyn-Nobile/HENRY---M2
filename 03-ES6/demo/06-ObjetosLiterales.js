// const => No es inmutable, ya que en objetos guarda la referencia a memoria
const array = []; // => Referencia a memoria
array.push(5);
//array = [5];
console.log(array);


// OBJETOS LITERALES
let obj = new Object();
obj.a = 1;
obj.b = 2;

let objeto = {a:1, b:3};
let arr = [1,5,6];

// Atajo propiedad propiedad
function persona(nombre, apellido, propiedad, valor) {
    return {
        nombre, // nombre: nombre,
        apellido, // apellido: apellido
        [propiedad]: valor // Propiedad dinámica
    }
}

// Propiedad dinámica
const rick = persona("Rick", "Sanchez", "origen", "Tierra");
console.log(rick);

// Template Literals
console.log("Hola " + rick.nombre + "\n" + "¿Cómo estás?");
console.log(`Hola ${rick.nombre}
¿Cómo estás?`); // Alt + 96

// Destructuring
let array2 = [1, 2, 3, 4, 5];
// let a = array2[0]
// let b = array2[1]
// let c = array2[2]
let [a, b, c, ,d] = array2;

console.log(a)
console.log(b)
console.log(c)
console.log(d)

console.log(rick);
let {apellido, nombre} = rick;
// let apellido = rick.apellido;
// let nombre = rick.nombre;
console.log(apellido);
console.log(nombre);