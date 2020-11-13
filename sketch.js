var wall,thickness;
var bullet,speed,weight;
var bulletRightEdge,wallLeftEdge;

function setup() {
  //creating a canvas
  createCanvas(1600,400);
  //creating speed and weight randomly
  speed = random(223,321);
  weight = random(30,52);
  //creating sprites and adding specific properties to it
  bullet = createSprite(80,200,50,5);
  bullet.shapeColor = color(225);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  bullet.velocityX = speed;
  thickness = random(22,83)
}

function draw() {
  //creating a black background
  background(0);
    
  //executing the has collided function
 if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor = color(255,0,0)
    }

    if(damage<10){
      wall.shapeColor = color(0,255,0)
    }

  }
  
  //drawing the sprites
  drawSprites();
}

//creating has collided function
function hasCollided(bullet1,wall1){
  bulletRightEdge = bullet1.x + bullet1.width
  wallLeftEdge = wall1.x
  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }
  return false;
}