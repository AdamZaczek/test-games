(function() {
  function Game() {
    //urls
    this.mainImgUrl = [
      "assets/images/cow.jpg"]; //main img

    this.letters = [
      "assets/images/letter-c.png",
      "assets/images/letter-g.png",
      "assets/images/letter-w.png",
      "assets/images/letter-k.png",
      "assets/images/letter-o.png"]; //letters img

    //map for mixed letters
    this.lettersMap = letters.map(function(url){
      return "<div class="this.usingClasses[5]"><img src=" + url + "/></div>";
    });
    
    //classes
    this.usingClasses = [
      "main-image",
      "clearfix",
      "dropping-letters",
      "drop",
      "dragging-letters",
      "drag"];

    //creating html
    this.mainImg = [
      "<div class=" + this.usingClasses[0] + ">">,
      "<img src=" + this.mainImgUrl[0] + ">",
      "</div>",
    ].join(''); //main img section

    this.clearfix = [
      "<div class=" + this.usingClasses[1] + "></div>"].join(''); //clearfix

    this.dropSpace = [
      "<div class=" + this.usingClasses[2] + ">",
      "<div class=" + this.usingClasses[3] + "></div>"
      "<div class=" + this.usingClasses[3] + "></div>"
      "<div class=" + this.usingClasses[3] + "></div>"].join(''); //dropping section

    this.dragSpace = [
      "<div class=" + this.usingClasses[4] + ">",
      this.lettersMap.join(''),
      "</div>"
    ].join(''); //dragging section
  }
​
  /**
   * Renders game into container
   * @param  {HTMLElement} container
   */
  Game.prototype.render = function(container) {
    container.innerHTML = this.mainImg;
  };
​
  window.Game = Game;
})();