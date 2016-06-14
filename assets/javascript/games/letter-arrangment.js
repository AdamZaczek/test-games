define([], function() {
  /**
   * Main scope of LetterArrangement, access to all important prototypes
   */
  function LetterArrangement() {
    this.template = "";

    this.drake = null;

    this.context = {
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
      };

    this.setup();
  }

  /**
   * Initiating Handlebars template and dragula library
   * @return HTML template and dragula variable
   */
  LetterArrangement.prototype.setup = function(){
    this.template = document.getElementById("entry").innerHTML;

    this.drake = dragula({
      copy: false
    });
  };

  /**
   * Rendering Handlebars template and setting containers for dragula
   * Reference to the _bindEvents()
   */
  LetterArrangement.prototype.render = function(container){
    var template = Handlebars.compile(this.template);
    var html = template(this.context);
    container.innerHTML = html;

    var droppingContainer = document.querySelectorAll(".drop");
    var draggingContainer = document.querySelector(".dragging-letters");

    droppingContainer.forEach(function(drop){
      this.drake.containers.push(drop);
    }, this);
    this.drake.containers.push(draggingContainer);

    this._bindEvents();
  };

  /**
   * Binding together drag'n'drop and onDrop function
   */
  LetterArrangement.prototype._bindEvents = function(){
    this.drake.on("drop", this.onDrop.bind(this));
  };

  /**
   * Checking if dropped items are  placed correct
   * @description still working on improving
   */
  LetterArrangement.prototype.onDrop = function(el, target, source, sibling){
    var countNumber = this.context.correctAnswer;
    var countBox = document.querySelectorAll(".drop .drag").length;

    if (countNumber.length === countBox){
      var letters = document.querySelectorAll(".drop .drag span");
      var answer = [];

      letters.forEach(function(letter){
        var letterInsideDiv = letter.innerText.toString();
        answer.push(letterInsideDiv);
      });

      var answer = answer.join("");

      if (answer === countNumber) {
        var droppingDiv = document.querySelector(".dropping-letters");
        var newSpan = document.createElement("span");
        var spanText = document.createTextNode("Congratulations! The answer is right.");
        newSpan.appendChild(spanText);
        droppingDiv.appendChild(newSpan);
      } else {
        var droppingDiv = document.querySelector(".dropping-letters");
        var newSpan = document.createElement("span");
        var spanText = document.createTextNode("Sorry, the answer is not correct. Try again.");
        newSpan.appendChild(spanText);
        droppingDiv.appendChild(newSpan);
      }
    }
  };

  return LetterArrangement;
});
