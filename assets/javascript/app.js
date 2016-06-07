document.addEventListener("DOMContentLoaded", function(){

	function render(){

		var gameSection = $(".game_section"); //main section

  		//variable with url
		var mainImg = ["assets/images/cow.jpg"]; //main img
		var letters = [
			"assets/images/letter-c.png",
			"assets/images/letter-g.png",
			"assets/images/letter-w.png",
			"assets/images/letter-k.png",
			"assets/images/letter-o.png"]

		//creating html
		var mainImg = [
			"<div class='main_image'>", 
			"<img src=" + mainImg[0] + ">",
			"</div>"
			].join(""); //main image

		var clearfix = [
			"<div class='clearfix'>,
			</div>"].join(""); //clearfix 

		var dropSpace = [
			"<div class="dropping_letters">",
			"<div class="drop"></div>",
			"<div class="drop"></div>",
			"<div class="drop"></div>",
			"</div>"].join(""); //drop space

		var clearfix2 = [
			"<div class='clearfix'>,
			</div>"].join("");

		var dragSpace = [
			"<div class="dragging_letters">", 
			"<div class="drag">", 
			"<img src=" + letters[0] +">", 
			"</div>",
			"<div class="drag">",
			"<img src=" + letters[1] + ">",
			"</div>",
			"<div class="drag">",
			"<img src=" + letters [2] + ">",
			"</div>",
			"<div class="drag">",
			"<img src=" + letters[3] + ">",
			"</div>",
			"<div class="drag">",
			"<img src="+ letters[4] + ">",
			"</div>",
			"</div>"]
		

		//adding to html
		gameSection.append(mainImg);
		gameSection.append(clearfix);
		gameSection.append(dropSpace);
		gameSection.append(clearfix2);
		

		var dragDivMain = document.createElement("div"); //dragging space
		var dragDivImg = document.createElement("div");
		var dragDivImg2 = document.createElement("div");
		var dragDivImg3 = document.createElement("div");
		var dragDivImg4 = document.createElement("div");
		var dragDivImg5 = document.createElement("div");
		var dragImg = document.createElement("img");
		var dragImg2 = document.createElement("img");
		var dragImg3 = document.createElement("img");
		var dragImg4 = document.createElement("img");
		var dragImg5 = document.createElement("img");

		
		//setting new element properties
		
		dragDivMain.classList.add("dragging_letters"); //dragging space
		dragDivImg.classList.add("drag");
		dragDivImg2.classList.add("drag");
		dragDivImg3.classList.add("drag");
		dragDivImg4.classList.add("drag");
		dragDivImg5.classList.add("drag");
		dragImg.setAttribute("src", "assets/images/letter-c.png");
		dragImg2.setAttribute("src", "assets/images/letter-g.png");
		dragImg3.setAttribute("src", "assets/images/letter-w.png");
		dragImg4.setAttribute("src", "assets/images/letter-k.png");
		dragImg5.setAttribute("src", "assets/images/letter-o.png");
		dragImg.classList.add("letter");
		dragImg2.classList.add("letter");
		dragImg3.classList.add("letter");
		dragImg4.classList.add("letter");
		dragImg5.classList.add("letter");
		dragImg.setAttribute("id", "c-3");
		dragImg2.setAttribute("id", "g-10");
		dragImg3.setAttribute("id", "w-28");
		dragImg4.setAttribute("id", "k-14");
		dragImg5.setAttribute("id", "o-20");
		dragImg.setAttribute("draggable", "true");
		dragImg2.setAttribute("draggable", "true");
		dragImg3.setAttribute("draggable", "true");
		dragImg4.setAttribute("draggable", "true");
		dragImg5.setAttribute("draggable", "true");


		//adding new element 
		mainImg.appendChild(img); //img
		gameSection.appendChild(mainImg);
		
		gameSection.appendChild(clearfix);

		dropDivMain.appendChild(dropDivIn); //dropping space
		dropDivMain.appendChild(dropDivIn2);
		dropDivMain.appendChild(dropDivIn3);
		gameSection.appendChild(dropDivMain);

		gameSection.appendChild(clearfix2);

		dragDivImg.appendChild(dragImg); //dragging space
		dragDivImg2.appendChild(dragImg2);
		dragDivImg3.appendChild(dragImg3);
		dragDivImg4.appendChild(dragImg4);
		dragDivImg5.appendChild(dragImg5);
		dragDivMain.appendChild(dragDivImg);
		dragDivMain.appendChild(dragDivImg2);
		dragDivMain.appendChild(dragDivImg3);
		dragDivMain.appendChild(dragDivImg4);
		dragDivMain.appendChild(dragDivImg5);
		gameSection.appendChild(dragDivMain);
	}

	render();

	
});