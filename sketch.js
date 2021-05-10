const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World
 var snowfall =[];
var maxDrops = 100

function preload(){
  bgIMG = loadImage("snow1.jpg");
}


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  if(frameCount%80===0){
    for(var i = 0; i<maxDrops; i++){
snowfall.push(new Snow(random(0,800),10));
    }
    
  }

}
function draw() {
  background(bgIMG);  
  Engine.update(engine);
  for(var i=0; i<maxDrops; i+=50){
    snowfall[i].display()
    snowfall[i].updateY();
  }

  drawSprites();
}
function fallingSnow(){

}
