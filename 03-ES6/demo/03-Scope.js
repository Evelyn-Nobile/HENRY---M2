let crearCajaDeFunciones = function() {
	let cajaDeFunciones = [];
	for (let i = 0; i < 3; i++) {
		cajaDeFunciones.push(function() {
			console.log(i);
		});
	}
	return cajaDeFunciones;
};
  
var miCaja = crearCajaDeFunciones(); // [ function1, funcion2, funcion3 ]
// miCaja[0]();
// miCaja[1]();
// miCaja[2]();

// HOISTING
console.log(fruta);
var fruta = "manzana"; // ✅

//console.log(color);
let color = "rojo";  // ❌

console.log(nombre);
const nombre = "Rick";  // ❌

