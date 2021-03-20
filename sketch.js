//All global variables
var bullet,wall;
var speed,weight,thickness;
//Function setup
function setup() {
  createCanvas(1200,800);
  //Random values for speed, weight & thickness
  speed= random(100,290)
  weight=random(30,52)
  thickness=random(22,83)
  //Creates wall and bullet sprites
  wall = createSprite(1000, 400, thickness,height/2);
  bullet = createSprite(50, 400, 60, 20);
}

function draw() {
  background(0); 
  fill ("white")
  textSize (25);
  text ("Refresh to run the code again", 10,29)
  //Fetches value from "speed" variable and applies it to the bullet for a random X velocity
  bullet.velocityX=speed;
  bullet.shapeColor=color("white");

  if(collisionDetected(bullet,wall)){
  //Formula given by the whitehat project video
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  //Changes color of the wall depending on the amount of damage
  if(damage>10){
  wall.shapeColor=color(255,0,0);
  fill ("white")
  textSize (25);
  text("TEST FALIURE!", 900, 650)
  }

  if(damage<10){
  wall.shapeColor=color(0,255,0);
  fill ("white")
  textSize (25);
  text("TEST SUCSESS!", 900, 650)
  }
  //Stops the bullet after it has collided with the wall
  bullet.velocityX= 0;
  }

  drawSprites();
}

//This function determines if the bullet has collided
function collisionDetected(Lbullet,Lwall)
{
var bulletRightEdge=Lbullet.x+Lbullet.width;
var  wallLeftEdge=Lwall.x;
if(bulletRightEdge>=wallLeftEdge){
return true
}
return false;
}