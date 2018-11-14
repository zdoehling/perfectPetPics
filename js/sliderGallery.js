
/* Define function shapes(x) here - This will tell me which shape was clicked on - Update to show in a new window, style the window, & show the definition of the shape */
function shapes(x) {
	alert("You clicked on the " + x + ".");
}

/* Define function imageGallery() with nested functions here - This is the completed In-Chapter Exercise */
function imageGallery() {
		
	"use strict"; // interpret document contents in JavaScript strict mode

	// variables 
	var photoOrder = ["turtlePic.jpg","doggo2.jpg","elephant.jpg","goat.jpg","honey2.JPG","kitty1.jpg","kittycat.jpg", "monkey.jpg", "monkey2.jpg", "sloth.jpg", "dog1.png"];
	var autoAdvance = setInterval(rightAdvance,10000);
	var figureCount = 1;
	var currentImage = 0;
	// add src values to img elements based on order specified in photoOrder array 
	function populateFigures(myCurrentImage) {
		var filename;
		var art;
		var currentFig;
		filename = "images/" + photoOrder[myCurrentImage];
		art = document.getElementsByTagName("article")[0];
		currentFig = art.getElementsByTagName("img")[0];
		currentFig.src = filename;
		
	}

	// stop automatic image switching and call rightAdvance() function 
	function rightArrow() {
		clearInterval(autoAdvance);
		rightAdvance();
	}

	// shift all images one figure to the left, and change values in photoOrder array to match  
	function rightAdvance() {
		if (currentImage + 1 === 11) {
			currentImage = 0;
		} else {
			currentImage = currentImage + 1;
		}
		populateFigures(currentImage);
	}

	// shift all images one figure to the right, and change values in photoOrder array to match 
	function leftArrow() {
		clearInterval(autoAdvance);
		if (currentImage === 0) {
			currentImage = photoOrder.length - 1;
		} else {
			currentImage = currentImage - 1 ;
		}
		populateFigures(currentImage);
		
	}


	// create event listeners for left arrow, right arrow, and center figure element 
	function createEventListeners() {
		var leftarrow = document.getElementById("leftarrow");
		leftarrow.addEventListener("click", leftArrow, false); 
		

		var rightarrow = document.getElementById("rightarrow");
		rightarrow.addEventListener("click", rightArrow, false); 
		
	}

	// create event listeners and populate image elements 
	function setUpPage() {
		createEventListeners();
		populateFigures(currentImage);
	}

	setUpPage();

}
