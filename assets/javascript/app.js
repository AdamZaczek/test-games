/**
* Setting HTML 
*/
var game = new Game();

var container = document.getElementById("gameSection");
game.render(container);

//making elements draggable
// function allowDrop(ev){
//   ev.preventDefault();
// }

// function drag(ev){
//   ev.dataTransfer.setData("text", ev.target.id)
// }

// function drop(ev){
//   ev.preventDefault();
//   var data = ev.dataTransfer.getData("text");
//   ev.target.appendChild(document.innerHTML(data));
// }

//getting id from drop space
