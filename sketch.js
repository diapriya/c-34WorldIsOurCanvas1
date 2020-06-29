
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.body; 
const Events = Matter.Events;

var line1;

function setup() {

  createCanvas(1000,800);

  engine = Engine.create();
  world = engine.world;
   

  Engine.run(engine);
}
 
function draw() {

  background(255,255,255);
  Engine.update(engine);
  
  ellipseMode(RADIUS);
  noStroke();
  ellipse(line1.body.position.x,line1.body.position.y,10);

}

function mouseDragged(){
 
  line1 = Bodies.circle(mouseX,mouseY,10);
 
  ellipse(mouseX,mouseY,10);

 
} 


function colourRed(){
  noStroke();
  fill("red");
}

function colourBlue(){
  noStroke();
  fill("blue");
}

function colourYellow(){
  noStroke();
  fill("yellow");
}

function colourBlack(){
  noStroke();
  fill("black");
}


