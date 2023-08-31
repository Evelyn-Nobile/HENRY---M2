// console.log("Hola Mundo!!!")
// alert("Código Javascript");

let newDiv = document.createElement("div");
// <div></div>
newDiv.setAttribute("id", "newDiv");
// <div id="newDiv"></div>
newDiv.style.backgroundColor = "cyan";
// <div id="newDiv" style: {backgroundColor="cyan"}></div>

let newList = document.createElement("ul");
// <ul> </ul>
let newItem1 = document.createElement("li");
// <li> </li>
newItem1.innerText = "Item 1";
// <li>Item 1</li>

let newItem2 = document.createElement("li");
// <li> </li>
newItem2.innerHTML = "Nuevo <strong>Item 2</strong>";
// <li>Item 2</li>

newList.appendChild(newItem1);
newList.appendChild(newItem2);
// <ul> <li>Item 1</li> <li>Item 2</li> </ul>
newDiv.appendChild(newList);
// <div> <ul> <li>Item 1</li> <li>Item 2</li> </ul> </div>

document.body.appendChild(newDiv);

// AGREGAR ITEMS
let counter = 3;
let button = document.querySelector("#button");
button.addEventListener("click", function() {
    let itemToAdd = document.createElement("li");
    // <li> </li>
    itemToAdd.innerText = "Item número " + counter;
    // <li> Item número 3 </li>
    newList.appendChild(itemToAdd);
    counter++;
})

newDiv.addEventListener("click", function(evento) {
    if(newDiv.style.backgroundColor === "cyan") {
        newDiv.style.backgroundColor = "red";
    } else {
        newDiv.style.backgroundColor = "cyan";
    }
})

// EVENTOS
let allDivs = document.querySelectorAll("div");
console.log(allDivs);
for (let i = 0; i < allDivs.length; i++) {
    allDivs[i].addEventListener("click", function(event) {
        console.log(event.target)
    })
    
}
