// sample code

void setup() {
  // set window size
  size(screen.width, screen.height);
  
  // styling
  smooth();
  background(192);
  
  // start in center
  mouseX=width/2; mouseY=height/2;
}

void draw() {
  // random radius
  float r = random(85);
  
  // random color
  fill(random(255),random(255),random(255));
      
  // draw ellipse
  ellipse(mouseX, mouseY, r, r);
}