// Default value
function suma(x = 1, y = 4) {
    return x + y;
}

console.log(suma(5, 4));
console.log(suma());

// Rest operator
function suma2(x, ...y) {
    console.log(y);
    // x = 2
    // y = [ 4, 6, 1, 5 ]
    let resultado = x;
    for(const num of y) {
        resultado += num;
    }
    return resultado;
}

console.log(suma2(2,4,6,1,5))

// SPREAD OPERATOR
const array3 = [1, 2, 3];
const array4 = [4, 5];

const array5 = [...array3];
console.log(array5);
const array6 = [...array3, ...array4];
console.log(array6);
