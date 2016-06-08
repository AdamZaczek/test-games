(function() {
  function Game() {}  
  /**
   * Renders game into container
   * @param  {HTMLElement} container
   */

    var context = {
          imgUrl: "assets/images/cow.jpg",
          letter: "C",
          };
    var source = document.getElementById("entry").innerHTML;
    var template = Handlebars.compile(source);
    var html = template(context);
  

  Game.prototype.render = function(container) {
    container.innerHTML = html;
  };
  window.Game = Game;
})();