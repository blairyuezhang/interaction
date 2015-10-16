//global variables go here

var username
var city
var favcolor
var button
var usernameLabel
var cityLabel
var favcolorLabel
var button2

function setup() {

  noCanvas();

  //set up your form here
  usernameLabel = createElement("h2", "What's your name?");
  username = createInput();
  cityLabel = createElement("h2", "Where are you from?");
  city = createInput();
  favcolorLabel = createElement("h2", "What's your favorite color?");
  favcolor = createInput();
  foodLabel = createElement("h2", "What's your favorite food?");
  food = createInput();
  
  button = createButton("Submit");
  button.mousePressed(makeProfile);
  button.position(603, 525);
  button.mouseOver(hover);
  button.mouseOut(nohover);

  var body = select("body");
  body.style("margin-top", "150px");



}


//write your custom functions here
function makeProfile(){

	var submittedName = username.value();
	var submittedCity = city.value();
	var submittedColor = favcolor.value();
	var submittedFood = food.value();

	username.hide();
	city.hide();
	favcolor.hide();
	food.hide();
	usernameLabel.hide();
	cityLabel.hide();
	favcolorLabel.hide();
	foodLabel.hide();
	button.hide();

	

	for (var x=10; x<windowWidth; x = x+100){
		for(var y=0; y<windowHeight; y = y+50){
			if (x<450 || x > 800){
	var nameElement = createElement("h3", submittedName);
	var cityElement = createElement("h3", submittedCity);
	var colorElement = createElement("h3", submittedColor);
	var foodElement = createElement("h3", submittedFood);

    var randomG = Math.floor(random(255));
    var randomB = Math.floor(random(255));
    var colorString= "rgb(255,"+ randomG+"," + randomB + ")";
    

    nameElement.style("color", "black");
	cityElement.style("color", colorString);
	colorElement.style("color", submittedColor);
	foodElement.style("color", "lightblue");


	nameElement.style("font-size", "30px");
	nameElement.style("font-family", "Futura");
	cityElement.style("font-family", "Optima");
	
	nameElement.position(600,y);
	cityElement.position(random(windowWidth), random(windowHeight));
	colorElement.position(random(windowWidth), random(windowHeight));
	foodElement.position(random(windowWidth), random(windowHeight));
}
}
}
    button2 = createButton("Back");
    button2.mousePressed(unHide);
    button2.position(603, 525);
    button2.mouseOver(hover);
    button2.mouseOut(nohover);
}

function unHide(){

	button2.hide();

	username.show();
	city.show();
	favcolor.show();
	food.show();
	usernameLabel.show();
	cityLabel.show();
	favcolorLabel.show();
	foodLabel.show();
	button.show();

	username.value("");
	city.value("");
	favcolor.value("");
	food.value("");

	username.style("display","inline-block");
	city.style("display","inline-block");
	favcolor.style("display","inline-block");
	food.style("display","inline-block");


	var allh3 = selectAll("h3");


	for(var x=0; x<windowWidth; x++ ){
		for(var y=0; y<windowHeight; y++){

		allh3[x].hide();
		allh3[y].hide();
	
	}
	}
	

}



function hover(){
	button.style("color", "pink");
	button2.style("color", "pink");
}

function nohover(){
	button.style("color", "black");
	button2.style("color", "black");
}









