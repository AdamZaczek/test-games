define([], function(){
  var drop = document.querySelectorAll(".drop");
  var drag = document.querySelector(".dragging-letters");

  function dragNDrop(){
    for (var i = 0; i <= drop.length; i++){
      dragula([drag, drop[i]]);
    }
  }

  return dragNDrop();
});
