const [loadButton] = $("#boton"); //me guardo el id del boton en una variable usando destructuring y jquery
const [search] = $('#search')
const url = "http://localhost:5000/amigos"


const responseHandler = (response) => {


  response.forEach((friend) => {
    const [friendsList] = $("#lista");
    const newLi = document.createElement("li");
    newLi.innerText = friend.name;
    
    friendsList.appendChild(newLi);
  });
}
 

const showFriends = () => {
    $("#lista").empty() //https://www.w3schools.com/jquery/html_empty.asp
  $.get(url, responseHandler);
};

const searchFriend = () => {
  const [input] = $('#input')
  const id = input.value
  $.get(`${url}/${id}`)
}

loadButton.addEventListener("click", showFriends);

//search
search.addEventListener('click', searchFriend)
