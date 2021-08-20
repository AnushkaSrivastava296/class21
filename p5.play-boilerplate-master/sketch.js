var movingrect,fixedrect;
var o1,o2,o3,o4;

function setup() {
  createCanvas(800,400);
  movingrect = createSprite(700, 200, 100, 50);
  movingrect.shapeColor = "green";
  movingrect.debug = true;

  fixedrect = createSprite(100,200,40,100);
  fixedrect.shapeColor = "green";
  fixedrect.debug = true;

  o1 = createSprite(100,100,50,50);
  o1.shapeColor = "green";
  
  o2 = createSprite(200,100,50,50);
  o2.shapeColor = "green";

  o3 = createSprite(300,100,50,50);
  o3.shapeColor = "green";

  o4 = createSprite(400,100,50,50);
  o4.shapeColor = "green";

 
  
}

function draw() {
  background(0);
  movingrect.velocityX = -5;
  fixedrect.velocityX = 5;
  bounceOff(movingrect,fixedrect)

 // movingrect.x = mouseX;
  //movingrect.y = mouseY;

 // if( isTouching(o1,movingrect)){
   // o1.shapeColor = "purple";
    //movingrect.shapeColor = "yellow";
    
  //}
  //else{
    //o1.shapeColor = "red"
   // movingrect.shapeColor = "blue";
    
  //}

 



  





  drawSprites();
}

