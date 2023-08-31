// Imagina que estás en tu casa (tu programa) y necesitas traer una pizza (datos) de la pizzería (servidor).
//Usualmente, llamarías por teléfono para hacer el pedido y esperarías a que te entreguen la pizza.
// En términos de programación, la Fetch API es como hacer esa llamada telefónica para obtener datos de un servidor en internet.

// En lugar de una pizza, le pides a la Fetch API que traiga cierta información de un sitio web. 
//Le dices qué información quieres y a qué dirección (URL) debe ir para obtenerla. Luego, la Fetch API se encarga de comunicarse con el servidor, obtener los datos y traértelos de vuelta para que puedas usarlos en tu programa.

// En resumen, la Fetch API es como llamar a un servicio de entrega de datos en línea para obtener la información que 
//necesitas en tu programa, ¡como pedir una pizza por teléfono y recibirla en tu casa!




// ¡ La Fetch API tiene varios métodos que corresponden a diferentes tipos de solicitudes que puedes hacer al servidor.
 

// fetch(url): Este es el método principal para hacer solicitudes a una URL específica. 
//Le pasas la dirección del recurso que deseas obtener y devuelve una promesa que resuelve en la respuesta del servidor.

// then(callback): Después de usar fetch, puedes encadenar el método then para manejar la respuesta del servidor. 
//Le pasas una función de devolución de llamada (callback) que se ejecutará cuando la respuesta esté lista. Aquí es donde puedes procesar los datos recibidos.

// response.json(): Dentro de la función de devolución de llamada del método then, si la respuesta del servidor
// contiene datos en formato JSON, puedes usar este método para convertir esos datos en un objeto JavaScript que puedas manipular fácilmente.

// response.text(): Similar a response.json(), pero se usa cuando esperas recibir datos de texto en lugar de JSON. 
//Convierte los datos de texto en una cadena de texto que puedes utilizar.

// response.status: Esta propiedad te da el código de estado de la respuesta del servidor, como 200 para "OK" o 
//404 para "No encontrado". Es útil para saber si la solicitud se completó con éxito.

// response.statusText: Proporciona una descripción verbal del código de estado, como "OK" o "Not Found".

// catch(callback): Puedes encadenar este método después de then para manejar errores en caso de que la solicitud 
//no se realice correctamente. Funciona de manera similar a then, pero para manejar errores en lugar de respuestas exitosas.

// Estos son solo algunos de los métodos y conceptos básicos de la Fetch API. Te permiten realizar solicitudes a
// servidores y trabajar con las respuestas y los datos recibidos de manera sencilla.











function irDeCompras(producto) {
    return new Promise((resolve, reject) => {
        resolve(producto); // Código asíncrono
    });
}

// => ya tenés la sal?
let comprarSal = irDeCompras("Sal")
    .then((data) => {
        console.log(data);
        return data;
    })
    .then((data) => {
        console.log(`Agregar ${data}`);
        console.log("Servir la ensalada...");
    });





function timeout(duration = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    });
}
let unSegundo = timeout(1000)
    .then(() => {
        console.log("Pasó un segundo!!!");
        return timeout(2000);
    })
    .then(() => {
        console.log("Finalizado!!!");
    })
    .catch((error) => {
        console.log(error);
    });
console.log("Esto se encuentra al final...");
