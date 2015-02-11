PFont font;
long y;

void setup(){
  size(screen.width, screen.height);
  background(0);
  
  font = createFont("monospace",14);
  y = 24;
}

void draw(){
  textFont(font);
  fill(255);
  text(hex((long)random(2000000000),15),24,y);
  y += 16;
  if(y >= screen.height){
    background(0);
    y = 24;
  }
}
