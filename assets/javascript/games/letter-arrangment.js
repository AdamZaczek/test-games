define([], function() {
  function LetterArrangement() {
  }

  /**
   * Renders game into container
   * @param  {HTMLElement} container
   */
  LetterArrangement.prototype.render = function(container){
    var context = [
      {
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
      },
      {
        imgUrl: "assets/images/cat.png",
        letters: [
          {
            letter: "L"
          },
          {
            letter: "W"
          },
          {
            letter: "C"
          },
          {
            letter: "T"
          },
          {
            letter: "A"
          }
        ],
        correctAnswer: "CAT"
      },
      {
        imgUrl: "assets/images/dog.png",
        letters: [
          {
            letter: "O"
          },
          {
            letter: "A"
          },
          {
            letter: "G"
          },
          {
            letter: "D"
          },
          {
            letter: "Y"
          }
        ],
        correctAnswer: "DOG"
      }
    ];

   /**
    * @description Injecting game into Handlebars script in HTML
    */

    var source = document.getElementById("entry").innerHTML;
    var template = Handlebars.compile(source);
    var html = template(context[0]);
    container.innerHTML = html;

  /**
   * @description Setting the Drag'n'Drop
   */

    var droppingContainer = document.querySelectorAll(".drop");
    var draggingContainer = document.querySelector(".dragging-letters");

    var drake = dragula({
      copy: true,
    });

    droppingContainer.forEach(function(drop){
      drake.containers.push(drop);
    });
    drake.containers.push(draggingContainer);

    drake.on("drop", function(el, target, source, sibling){
      /**
       * @description Checking the answer
       */

        var countNumber = context.correctAnswer;
        var countBox = document.querySelectorAll(".drop .drag").length;

        if (countNumber.length === countBox){
          var letters = document.querySelectorAll(".drop .drag span");
          var answer = [];

          letters.forEach(function(letter){
            var letterInsideDiv = letter.innerText.toString();
            answer.push(letterInsideDiv);
          });

          var answer = answer.join("");

        /**
         * @description What to do if answer is right
         */
          if (answer === countNumber){
            var droppingDiv = document.querySelector(".dropping-letters");
            var newSpan = document.createElement("span");
            var spanText = document.createTextNode("Congratulations! The answer is right.");
            newSpan.appendChild(spanText);
            droppingDiv.appendChild(newSpan);
          }else{
          /*
           * @description What to do if answer is wrong
           */
            var droppingDiv = document.querySelector(".dropping-letters");
            var newSpan = document.createElement("span");
            var spanText = document.createTextNode("Sorry, the answer is not correct. Try again.");
            newSpan.appendChild(spanText);
            droppingDiv.appendChild(newSpan);
          }
        }
      });

  };

  var container = document.getElementById("gameSection");
  var letterArrangement = new LetterArrangement();

  return letterArrangement.render(container);

});
