define([], function(){

  function GameResult(){
    this.mainElement = "";
  }

  /**
   * Sucess Custom Event
   */
  GameResult.prototype.sucess = function(){
    this.mainElement.addEventListener("sucess", good, false);

    function good(){
      console.log("Good job!");
    }

    var myEvent = new CustomEvent("sucess");
    this.mainElement.dispatchEvent(myEvent);
  };

  /**
   * Fail Custom Event
   */
  GameResult.prototype.failure = function(){
    this.mainElement.addEventListener("failure", wrong, false);

    function wrong(){
      console.log("Sorry, you are wrong.");
    }

    var myEvent2 = new CustomEvent("failure");
    this.mainElement.dispatchEvent(myEvent2);
  };

  return new GameResult();
});
