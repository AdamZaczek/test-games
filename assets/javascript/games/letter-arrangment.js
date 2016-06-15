define([
  "text!games/letter-arrangment.html"
], function(templateHtml) {
  /**
   * Main scope of LetterArrangement, access to all important prototypes
   */
  function LetterArrangement(args) {
    this.template = args.template;

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
      correctAnswer: "COW",
    };

    this.setup();
  }

  /**
   * Initiating Handlebars template and dragula library
   * @return HTML template and dragula variable
   */
  LetterArrangement.prototype.setup = function(){
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

      var gettedAnswer = answer.join("");

      var answerContainer = document.querySelector(".result span");

      if (gettedAnswer === countNumber) {
        answerContainer.textContent = "Congratulations! The answer is right.";
      } else {
        answerContainer.textContent = "Sorry, the answer is not correct. Try again.";
      }
    }
  };

  return new LetterArrangement({
    template: templateHtml
  });
});
