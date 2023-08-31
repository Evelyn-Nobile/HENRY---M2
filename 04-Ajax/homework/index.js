const [loadButton] = $("#boton"); //me guardo el id del boton en una variable usando destructuring y jquery
const [friendsList] = $("#lista");

const responseHandler = (response) => {


  response.forEach((friend) => {
    const newLi = document.createElement("li");
    newLi.innerText = friend.name;
    
    friendsList.appendChild(newLi);
  });
}
 

const showFriends = () => {
    $("#lista").empty() //https://www.w3schools.com/jquery/html_empty.asp
  $.get("http://localhost:5000/amigos", responseHandler);
};
loadButton.addEventListener("click", showFriends);

//search

