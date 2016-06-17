requirejs.config({
  baseUrl: "assets/javascript",
  paths: {
    text: "text",
    gameResult: "utilities/game-result"
  }
});

requirejs([
  "games/letter-arrangment"
], function(
  letterArrangement, gameResult
) {
  var container = document.getElementById("gameSection");
  letterArrangement.render(container);

  var mainContainer = document.getElementById("game");
  letterArrangement.gameResult.mainElement = mainContainer;
});
