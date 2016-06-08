(function() {
  function Game() {
    /* urls */
    //main img
    this.mainImgUrl = [
      "assets/images/cow.jpg"
    ];

    //letters img
    this.letters = [
      "assets/images/letter-c.png",
      "assets/images/letter-g.png",
      "assets/images/letter-w.png",
      "assets/images/letter-k.png",
      "assets/images/letter-o.png"
    ];

    this.lettersId = [
      "3-c",
      "7-g",
      "23-w",
      "11-k",
      "15-o"
    ];

    /* classes */ 
    this.usingClasses = [
      "main-image",
      "clearfix",
      "dropping-letters",
      "drop",
      "dragging-letters",
      "drag"
    ];

    /* creating html */
    //main img section
    this.mainImg = [
      "<div class='" + this.usingClasses[0] + "'>",
        "<img src='" + this.mainImgUrl[0] + "'>",
      "</div>",
    ].join('');

    //clearfix
    this.clearfix = [
      "<div class=" + this.usingClasses[1] + "></div>"
    ].join('');

    //dropping section
    this.dropSpace = [
      "<div class=" + this.usingClasses[2] + ">",
        "<div class=" + this.usingClasses[3] + " ondrop='drop(event)' ondragover='allowDrop(event)'></div>",
        "<div class=" + this.usingClasses[3] + " ondrop='drop(event)' ondragover='allowDrop(event)'></div>",
        "<div class=" + this.usingClasses[3] + " ondrop='drop(event)' ondragover='allowDrop(event)'></div>",
      "</div>"
    ].join('');

    //clearfix
    this.clearfix2 = [
      "<div class=" + this.usingClasses[1] + "></div>"
    ].join('');

    // //map of mixed letters
    // this.lettersMap = this.letters.map(function(url){
    //   return "<div class='drag' draggable='true' ondragstart='drag(event)'><img src=" + url + "></div>";
    // });

    //dragging section
    this.dragSpace = [
      "<div class=" + this.usingClasses[4] + ">",
        // this.lettersMap.join(''),
        "<div class='drag' draggable='true' ondragstart='drag(event)'>",
          "<img src="+ this.letters[0] + " id=" + this.lettersId[0] + ">",
        "</div>",
        "<div class='drag' draggable='true' ondragstart='drag(event)'>",
          "<img src="+ this.letters[1] + " id=" + this.lettersId[1] + ">",
        "</div>",
        "<div class='drag' draggable='true' ondragstart='drag(event)'>",
          "<img src="+ this.letters[2] + " id=" + this.lettersId[2] + ">",
        "</div>",
        "<div class='drag' draggable='true' ondragstart='drag(event)'>",
          "<img src="+ this.letters[3] + " id=" + this.lettersId[3] + ">",
        "</div>",
        "<div class='drag' draggable='true' ondragstart='drag(event)'>",
          "<img src="+ this.letters[4] + " id=" + this.lettersId[4] + ">",
        "</div>",
      "</div>"
    ].join('');

    //all sections in one 
    this.allSections = [
      this.mainImg,
      this.clearfix,
      this.dropSpace,
      this.clearfix2,
      this.dragSpace
    ].join('');
  }
  /**
   * Renders game into container
   * @param  {HTMLElement} container
   */

  Game.prototype.render = function(container) {
    container.innerHTML = this.allSections;
  };
  window.Game = Game;
})();