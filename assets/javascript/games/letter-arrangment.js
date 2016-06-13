define([], function() {
  function LetterArrangement() {
  }

  /**
   * Renders game into container
   * @param  {HTMLElement} container
   */
  LetterArrangement.prototype.render = function(container){
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

   /**
    * @description Injecting game into Handlebars script in HTML
    */

    var source = document.getElementById("entry").innerHTML;
    var template = Handlebars.compile(source);
    var html = template(context);

    container.innerHTML = html;

  /**
   * @description Setting the Drag'n'Drop
   */

  var droppingContainer = document.querySelectorAll(".drop");
  var draggingContainer = document.querySelector(".dragging-letters");

  var drake = dragula({
    copy: true
  });

  droppingContainer.forEach(function(drop){
    drake.containers.push(drop);
  });
  drake.containers.push(draggingContainer);

  drake.on("drop", function(el, target, source, sibling){
    var countNumber = context.riddles.correctAnswer;
    var countBox = document.querySelectorAll(".drop .drag").length;

    if (countNumber.length === countBox){
      var letters = document.querySelectorAll(".drop .drag span");
      var answer = [];

      letters.forEach(function(letter){
        var letterInsideDiv = letter.innerText.toString();
        answer.push(letterInsideDiv);
      });

      var answer2 = answer.join("");
      if (answer2 === countNumber){
        console.log("Działa");
      }else{}
    }
  });
  };

  var container = document.getElementById("gameSection");
  var letterArrangement = new LetterArrangement();

  return letterArrangement.render(container);

});
