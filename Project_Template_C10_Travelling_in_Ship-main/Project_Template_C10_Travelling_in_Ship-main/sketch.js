var ship50,shipm
var ground50,groundm

function preload(){
shipm = loadImage("ship-1.png")
groundm=loadImage("sea.png")
}

function setup(){
  createCanvas(1000,1000);
  
  ground50=createSprite(-15,200,400,20)
  
  ground50.scale=0.5
  ground50.addImage(groundm)
  ground50.x=ground50.width/2

  ship50= createSprite(50,300,1000,20);
  ship50.addImage(shipm)
  ship50.scale=0.4
  ship50.x=150
}

function draw() {
  background("white");
  
 
  ground50.velocityX=-8
  
if(ground50.x<0){
  ground50.x=ground50.width/2
}
  drawSprites();
}