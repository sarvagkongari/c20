var astronaut
var bg,sleep,brush,gym1,gym2,gym11,gym12,eat1,eat2,bath1,bath2,move,move1,drink1,drink2

function preLoad(){
  bg=loadImage("images/iss.png")
  sleep=loadImage("images/sleep.png")
  brush=loadImage("images/brush.png")
  gym1=loadImage("images/gym1.png")
  gym2=loadImage("images/gym2.png")
  gym11=loadImage("images/gym11.png")
  gym12=loadImage("images/gym12.png")
  eat1=loadImage("images/eat1.png")
  eat2=loadImage("images/eat2.png")
  bath1=loadImage("images/bath1.png")
  bath2=loadImage("images/bath2.png")
  move=loadImage("images/move.png")
  move1=loadImage("images/move1.png")
  drink1=loadImage("images/drink1.png")
  drink2=loadImage("images/drink2.png")
}


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  
  drawSprites();
}