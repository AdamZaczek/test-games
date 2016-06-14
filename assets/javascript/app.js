requirejs.config({
  baseUrl: "assets/javascript",
});

requirejs([
  "games/letter-arrangment"
], function(
    LetterArrangement
    ) {
    var container = document.getElementById("gameSection");
    var letterArrangement = new LetterArrangement();

    letterArrangement.render(container);
  });
