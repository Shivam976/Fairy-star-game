var fairy,star,fairyImage,starImage
var bgImage,bg;

function preload()
{
   //preload the images here
   fairyImage=loadImage("fairy1.png")
   starImage=loadImage("star.png")
   bgImage=loadImage("starnight.png")
}

function setup() {
  createCanvas(800, 750);
  bg=createSprite(width/2,height/2)
  bg.addImage(bgImage)

  fairy=createSprite(200,400)
  fairy.addImage(fairyImage)
  fairy.scale=0.2

  star=createSprite(350,100)
  star.addImage(starImage)
  star.scale=0.3
  star.velocityY=3
}


function draw() {
  background("black");

  if(star.y<400){
    star.x=380
    star.y=400
    star.velocityY=0;
  }
drawSprites();
}
