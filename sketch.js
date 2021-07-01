var boy,path,leftBoundary,rightBoundary;
var pathImg,boyImg;

function preload(){
  //pre-load images
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  pathImg = loadImage("path.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  
  boy = createSprite(180,340,30,30);
  boy.addAnimation("RunningOnPath",boyImg);
  boy.scale = 0.08;

  leftBoundary = createSprite(0,0,100,800);
  rightBoundary = createSprite(400,0,100,800);
  
  leftBoundary.visible = false;
  rightBoundary.visible = false;
  
}

function draw() {
  background(0);

  path.velocityY = 4;
    
  boy.x = World.mouseX

  edges = createEdgeSprites();
  boy.collide(edges[3]);


  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

if(path.y > 400){
  path.y = height/2;
}
drawSprites();
}
