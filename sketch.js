
var trex ,trex_running;
var ground,groundImage

function preload(){
 backgroundImage = loadImage("bg.jpg"); 
 boyImage = loadImage("character1.png")
}

function setup(){
  createCanvas(200,600)
  
  //create a trex sprite
 bg = createSprite(100,300,200,600);
 bg.addImage("background",backgroundImage);
 bg.scale = 2.5;
 bg.velocityY = 3;

 boy = createSprite(100,280,50,50);
 boy.addImage("boy",boyImage)
}

function draw(){
  background("white");
 if(bg.y>550){
   bg.y= bg.height/2
 }
  boy.x = mouseX;
  
drawSprites()
}
