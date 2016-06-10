requirejs.config({
  baseUrl: "assets/javascript",
});

requirejs(["games/letter-arrangment"]);

/**
 * @description Using Drag'n'Drop Dragula
 */

dragula([document.querySelector(".dragging-letters"), document.querySelector(".dropping-letters")]);
