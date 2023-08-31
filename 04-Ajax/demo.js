const boton = document.getElementById("boton");

let id = 1;
boton.addEventListener("click", () => {
    // GET
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then((response) => response.json())
        .then((fotos) => {
            let fotoActual = fotos.filter(foto => foto.id === id);
            console.log(fotoActual[0]);
            let h4 = document.createElement("h4");
            h4.innerHTML = fotoActual[0].title;
            document.body.appendChild(h4);
            id++;
        });
})

let id2 = 1;
const botonPersonaje = document.getElementById("botonPersonaje");
botonPersonaje.addEventListener("click", () => {
    // GET
    fetch(`https://rickandmortyapi.com/api/character/${id2}`)
        .then((response) => response.json())
        .then((personaje) => {
            console.log(personaje)
            id2++;
        });
})

// POST
const botonPOST = document.getElementById("botonPOST");
botonPOST.addEventListener("click", () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
        title: 'FT42b',
        body: 'Este es nuestro comentario',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
})