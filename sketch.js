var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(600, 200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;


}

function draw() {
  background(0,0,0);  
  movingRect.x=World.mouseX;
 movingRect.y=World.mouseY;

  if(myisTouching(movingRect,fixedRect))
  {
  movingRect.shapeColor="blue";
  fixedRect.shapeColor="blue";
  }
  else{
   movingRect.shapeColor="green";
   fixedRect.shapeColor="green"; 
  }
 //mybouceOff(movingRect,fixedRect);

  drawSprites();
}
