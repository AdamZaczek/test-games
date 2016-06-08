/**
* @description Setting HTML 
*/
var game = new Game();

var container = document.getElementById("gameSection");
game.render(container);

/** 
* @description Using Drag'n'Drop Dragula
*/

dragula([document.querySelector(".dragging-letters"), document.querySelector(".dropping-letters")]);
