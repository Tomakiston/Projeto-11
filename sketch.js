var sea, ship;
function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);

  sea = createSprite();
  sea.addImage(seaImg);
  sea.velocityX = -4;

  ship = createSprite(200,150);
  ship.addAnimation("ship",shipImg1);
  ship.scale = 0.25
  
}

function draw() {
  background("blue");

  if(sea.x < 0){
    sea.x = sea.width/2;
  }

  drawSprites();
}
