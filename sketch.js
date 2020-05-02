var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  movingRect1 = createSprite(400,200,80,30);
  movingRect1.shapeColor = "green";
  movingRect1.debug = true;
  A = createSprite(800,300,50,60)
  B = createSprite(300,100,50,50)
}

function draw() {
  background(0,0,0);  
  bounceback(movingRect , fixedRect);
  movingRect1.x = World.mouseX;
  movingRect1.y = World.mouseY;
  if(touching(movingRect1 , A)=== true){
    movingRect1.shapeColor = "red";
   //fixedRect.shapeColor = "red";
   A.shapeColor = "red";
  }
  else {
    movingRect1.shapeColor = "green";
   // fixedRect.shapeColor = "green";
   A.shapeColor = "green";
  }
  drawSprites();
}

