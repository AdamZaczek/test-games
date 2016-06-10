define([], function() {
  function LetterArrangement() {
  }

  /**
   * Renders game into container
   * @param  {HTMLElement} container
   */
  LetterArrangement.prototype.render = function(container) {
    var context = {
      riddles: {
            imgUrl: "assets/images/cow.jpg",
            letters: [
              {
                letter: "C"
              },
              {
                letter: "K"
              },
              {
                letter: "O"
              },
              {
                letter: "W"
              },
              {
                letter: "G"
              }
            ],
            correctAnswer: "COW"
      }
    };

    var source = document.getElementById("entry").innerHTML;
    var template = Handlebars.compile(source);
    var html = template(context);

    container.innerHTML = html;

    function result(){
      var allDrop = document.querySelectorAll(".drop");
      var allIsField = [];

      for (var i = 0; i < allDrop.length; i++){
        var dropCheck = allDrop[i].hasChildNodes();
        allIsField.push(dropCheck);
        }

      function checkDroppingSpace(drop){
        return drop === true;
      }

      if(allIsField.every(checkDroppingSpace) === true){
      }
    }

    result();
  };

  var container = document.getElementById("gameSection");
  var letterArrangement = new LetterArrangement();

  return letterArrangement.render(container);
});
