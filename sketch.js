const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var Snow_Bg,snowBackground;
var particles = [];

function preload(){
  Snow_Bg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(1000,700);
  engine = Engine.create();
  world = engine.world;
  snowBackground = createSprite(width/2,height/2,1300,800);
  snowBackground.addImage(Snow_Bg);
  
  ground = new Ground(500,695,1000,10)
}

function draw() {
  background(0); 
  Engine.update(engine);
  drawSprites();
  ground.display();
  if(frameCount%5===0){
    particles.push(new Snow(random(20, 700),10,50));
  }

  for (var k = 0; k < particles.length; k++) {
    particles[k].display();
  }
  
}

