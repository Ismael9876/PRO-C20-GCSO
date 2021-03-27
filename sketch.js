var car, wall;
var speed, weight;





function setup() {
  createCanvas(1000,490);
  car=createSprite(400, 200, 50, 50);
  wall=createSprite(800,200,60,height/2)

  speed=random(55,90);
  weight-random(400,1500);

  car.velocityX=speed;


}
function draw() {
  background("black"); 
  
  if (wall.x-car.x < (car.weight+car.weight)/2){
 car.velocityX=0;
var deformation=0.5 * weight * speed * speed/22509;
if (deformation>180)
{
  car.shapColor=Color(255,0,0);
}

  if (deformation<180 && deformation>100)
{
  car.shapColor=Color(230,230,0)
}
 if (deformation<100)
{
 car.shapColor=Color(0,255,0)
}

  }

  drawSprites();
}
