(function() {
  function LetterArrangement() {}  
  /**
   * Renders game into container
   * @param  {HTMLElement} container
   */
  
  LetterArrangement.prototype.render = function(container) {
    var context = {
          imgUrl: "assets/images/cow.jpg",
          letters: [
            {
              letter: "C", 
            },
            {
              letter: "K",
            },
            {
              letter: "O",
            },
            {
              letter: "W"
            },
            {
              letter: "G"
            }
          ]
    };
    var source = document.getElementById("entry").innerHTML;
    var template = Handlebars.compile(source);
    var html = template(context);
    container.innerHTML = html;
  };

  /**
   * Checking the game result
   */

   LetterArrangement.prototype.check = function(letter1, letter2, letter3){
    if (letter1 === "C" && letter2 === "O" && letter3 === "W"){
      var goodJob = document.querySelector(".dropping-letters");
      goodJob.addClass("win");
    } else {
      var badJob = document.querySelector(".dropping-letters");
      badJob.addClass("lose");
    }
   }

  window.LetterArrangement = LetterArrangement;
})();