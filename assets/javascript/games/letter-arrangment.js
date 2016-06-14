define([], function() {
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

  LetterArrangement.prototype.setup = function(){
    this.template = document.getElementById("entry").innerHTML;

    this.drake = dragula({
      copy: true
    });
  };

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

  LetterArrangement.prototype._bindEvents = function(){
    this.drake.on("drop", this.onDrop.bind(this));
  };

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
