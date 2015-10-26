var language = navigator.language || navigator.userLanguage;

var squareside = 50;
var squarexcount = 16;
var squareycount = 16;

var mix;
var noclickyet = true;

function setup(){
	createCanvas(786, 786);

	squarexcount = width/squareside;
	squareycount = height/squareside;

	noStroke();
}

function draw(){
	if(mix == null) mix = color(random(255),random(255),random(255));

	for(var x = 0; x < squarexcount; x++){
		for(var y = 0; y < squareycount; y++){
			fill(mixedcolor(random(255),random(255),random(255)));
			rect(x*squareside, y*squareside, squareside, squareside);
		}
	}
	if(noclickyet){
		textSize(sqrt(width/2+height/3));
		switch(language){
			case "ko-kr":
				text("왼쪽 마우스 버튼을 클릭하면 전체적인 색이 바뀌고,", width/7, height*4/5);
				text("가운데 마우스 버튼을 클릭하면 전체화면 할 수 있단다.", width/7, height*7/8);
				break;
			default:
				text("left mouse button to change the overall (pastel) color", width/7, height*4/5);
				text("middle mouse button to toggle fullscreen, if you even have one >:)", width/7, height*7/8);
				break;
		}
		
	}
}

function mixedcolor(r, g, b){
	return color((r+red(mix))/2,(g+green(mix))/2,(b+blue(mix))/2);
}

function mousePressed(){
	if(mouseButton == LEFT) mix = color(random(255),random(255),random(255));
	if(mouseButton == CENTER) fullscreen(!fullscreen());
	noclickyet = false;
}

function windowResized(){
	setup();
}