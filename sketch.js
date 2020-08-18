//creating local variables
var bullet, speed, weight;
var wall, thickness;

function setup() {
createCanvas(1600,400);

//creating the sprites
bullet = createSprite(50,200,50,50);

//the speed is a file that is already a part of the project.
bullet.velocityX = speed;
bullet.shapeColor = color(225);

wall = createSprite(1500,200,thickness,height/2);
wall.shapeColor= color(80,80,80);

//making each thing have a random number
speed=random(223,321);
weight=random(30,52);

thickness=random(22,83);


}

function draw() {
background(0,255,255); 

//making the bullet change colors when it hits the wall.
if(hasCollided(bullet,wall)) {
  bullet.velocityX=0;
  var damage=0.5 * weight * speed * speed/(thickness*thickness*thickness);
  
  if(damage>10) {
  wall.shapeColor=color(255,0,0);
  }
  
  if(damage<10) {
  wall.shapeColor=color(0,255,0);
  }
  drawSprites();

}

//When the right edge of the bullet is greater than or equal to the wall’s left edge, they have collided and the color changes
function hasCollided(lbullet,lwall) {
bulletRightEdge = lbullet.x + lbullet.width;
wallLeftEdge=lwall.x;

if(bulletRightEdge>=wallLeftEdge) {

//the color: blue
return true;
}

//the color: green
return false;

}