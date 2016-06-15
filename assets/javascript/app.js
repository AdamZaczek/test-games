requirejs.config({
  baseUrl: "assets/javascript",
  paths: {
    text: "text"
  }
});

requirejs([
  "games/letter-arrangment"
], function(
  letterArrangement
) {
  var container = document.getElementById("gameSection");

  letterArrangement.render(container);
});
