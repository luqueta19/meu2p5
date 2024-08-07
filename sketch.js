function setup() {
  createCanvas(600, 600);
   background("brown")
}

function draw() { 
  stroke("green");
  fill("green");
  
  if(mouseIsPressed) {
  rect(mouseX,mouseY,3,3);
}
   }   