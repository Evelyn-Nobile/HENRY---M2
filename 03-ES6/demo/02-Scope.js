//! SCOPE
//! var = Scope de FUNCION
//! let = Scope de BLOQUE
//! const = Scope de BLOQUE
var fruta = "cereza";
// function printName() {
//     var fruta = "mandarina";
//     console.log(fruta);
// }
// printName();

if(true) {
    let fruta = "mandarina";
    console.log(fruta);
    const color = "rojo"
}

console.log(fruta);
console.log(color);

