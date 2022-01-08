var shipImg,ship,seaImage,sea;
function preload() {
  
 shipImg=loadAnimation("ship-1.png", "ship-2.png") 
 seaImage=loadImage("sea.jpg") 

}
function setup() {
  createCanvas(400,400);
  sea=createSprite(400,200);  
 sea.addImage(seaImage)

sea.velocityX=-2;
sea.scale = 0.3 ;

  ship=createSprite(130,200,20,20)
  ship.addAnimation("ship",shipImg)
ship.scale=0.25
 
}
function draw() {
  
  background(0)
  

if (sea.x < 0) {
  sea.x = sea.width / 8;
}


drawSprites() 
  
}  
  
  

  
  
  




 
