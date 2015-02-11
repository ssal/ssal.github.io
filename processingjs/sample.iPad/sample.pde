// sample co
void setup() {
  // set window size
  size(screen.width, screen.height);
  
  // styling
  smooth();
  background(128);
  
  // start in center
  mouseX=width/2; mouseY=height/2;
}

void draw() {
  // random radius
  r = random(
    random(
      random(
        512+random(-1,1)
      )
    )
  );
  
  // random color
  fill(random(r%random(255)+random(254,255)),
       random(r%random(255)+random(254,255)),
       random(r%random(255)+random(254,255))
      );
      
  // draw ellipse
  ellipse(mouseX, mouseY, r, r);
  
}

/*void mousePressed(){
  long timer0 = millis();
    if(mouseButton == RIGHT && timer0 == 2000){
      background(128)'
      setup();
    }
}
*/
