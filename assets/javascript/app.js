/**
 * @description Setting HTML 
 */
var letterArrangement = new LetterArrangement();

var container = document.getElementById("gameSection");
letterArrangement.render(container);

/** 
 * @description Using Drag'n'Drop Dragula
 */

dragula([document.querySelector(".dragging-letters"), document.querySelector(".dropping-letters")]);

/**
 * @description Parameters to check the game
 */

 
 // var letter1 = document.querySelector(".dropping-letters .drag:first-child").innerText;
 // var letter2 = document.querySelector(".dropping-letters .drag:nth-child(3)").innerText;
 // var letter3 = document.querySelector(".dropping-letters .drag:nth-child(5)").innerText;
 // LetterArrangement.check(letter1, letter2, letter3);