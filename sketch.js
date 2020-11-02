var r1;
var r2;
var r3;
var r4;
var r5;
var r6;

function setup() {
  createCanvas(800,800);
  r1 = createSprite(400, 200, 50, 50);
  r2 = createSprite(400, 300, 50, 50);
  r3 = createSprite(700, 100, 50, 50);
  r4 = createSprite(200, 100, 50, 50);
  r5 = createSprite(500, 500, 50, 50);
  r6 = createSprite(700, 500, 50, 50);
//giving velocity to rectangles
r3.velocityX = -10;
r4.velocityX = 10;

}

function draw() {
  background(255,255,255);  
 // moving r1
 r1.y = World.mouseY;
 r1.x = World.mouseX;


// algorithum 1-detection colision by chsnging colors
if(collision(r3,r4)){

r3.shapeColor = "red"
r4.shapeColor = "orange"
}
else{
  r1.shapeColor = "grey"
  r5.shapeColor = "grey"
}

if(collision(r1,r2)){

  r1.shapeColor = "yellow"
  r2.shapeColor = "cyan"
  }
  else{
    r1.shapeColor = "grey"
    r2.shapeColor = "grey"
  }
bouncing(r3,r4);

  drawSprites();
}

