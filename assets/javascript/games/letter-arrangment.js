(function() {
  function Game() {
    /**
   * @description Main IMG
   * @type {Array}
   */
    this.mainImgUrl = [
      "assets/images/cow.jpg"
    ];

    /**
   * @description Letters
   * @type {Array}
   */
    this.letters = [
      "C",
      "G",
      "W",
      "K",
      "O"
    ];

    /**
   * @description Classes
   * @type {Array}
   */ 
    this.usingClasses = [
      "main-image",
      "clearfix",
      "dropping-letters",
      "drop",
      "dragging-letters",
      "drag"
    ];

    /**
   * @description Creating HTML
   * @description main IMG
   * @type {Array}
   */
    this.mainImg = [
      "<div class='" + this.usingClasses[0] + "'>",
        "<img src='" + this.mainImgUrl[0] + "'>",
      "</div>",
    ].join('');

    /**
   * @description Clearfix
   * @type {Array}
   */
    this.clearfix = [
      "<div class=" + this.usingClasses[1] + "></div>"
    ].join('');

    /**
   * @description Dropping Space
   * @type {Array}
   */
    this.dropSpace = [
      "<div class=" + this.usingClasses[2] + ">",
        "<div class=" + this.usingClasses[3] + "></div>",
        "<div class=" + this.usingClasses[3] + "></div>",
        "<div class=" + this.usingClasses[3] + "></div>",
      "</div>"
    ].join('');

    /**
   * @description Clearfix
   * @type {Array}
   */
    this.clearfix2 = [
      "<div class=" + this.usingClasses[1] + "></div>"
    ].join('');

    // //map of mixed letters
    // this.lettersMap = this.letters.map(function(url){
    //   return "<div class='drag' draggable='true' ondragstart='drag(event)'><img src=" + url + "></div>";
    // });

    /**
   * @description Dragging Space
   * @type {Array}
   */
    this.dragSpace = [
      "<div class=" + this.usingClasses[4] + ">",
        // this.lettersMap.join(''),
        "<div class=" + this.usingClasses[5] + ">",
          "<span>"+ this.letters[0] + "</span>",
        "</div>",
        "<div class=" + this.usingClasses[5] + ">",
          "<span>"+ this.letters[1] + "</span>",
        "</div>",
        "<div class=" + this.usingClasses[5] + ">",
          "<span>"+ this.letters[2] + "</span>",
        "</div>",
        "<div class=" + this.usingClasses[5] + ">",
          "<span>"+ this.letters[3] + "<span>",
        "</div>",
        "<div class=" + this.usingClasses[5] + ">",
          "<span>"+ this.letters[4] + "<span>",
        "</div>",
      "</div>"
    ].join('');

    /**
   * @description All sections in one
   * @type {Array}
   */

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