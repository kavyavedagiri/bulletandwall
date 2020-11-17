var speed,weight,thickness,bullet,wall,damage=0;

function setup() {
  createCanvas(1000, 400);
  bullet = createSprite(100,200,50,20);
  wall = createSprite(900,200,30,300);
  bullet.velocityX = 10;
  bullet.shapeColor ="white";
  wall.shapeColor ="#1d1a3b";
  speed = Math.floor(random(223,321));
  weight = Math.floor(random(30,52));
  thickness = Math.floor(random(22,83));
}

function draw() {
  background("#676670");
  drawSprites();

  fill(255);
  textSize(25);
  text("WORLDWIDE MILITARY SAFETY CONSORTIUM",220,50);

  collide(bullet,wall);
  
  textSize(20);
  text("Damage is : < 10 | Wall is effective against Bullets",30,340);
  text("Damage is : > 10 | Wall is not effective against Bullets",30,360);
  fill("yellow");
  textSize(25);
  text("DAMAGE IS : "+Math.floor(damage),30,300);
}
function damages(){
  damage = (0.5 * weight * speed *speed)/(thickness*thickness*thickness);
  console.log(damage);

  if(damage < 10 ){
    bullet.shapeColor ="green";
  }
  else{
    bullet.shapeColor ="red";
  }

}
function collide(object1,object2){
  if(object2.x-object1.x===object1.width/2 + object1.width/2-10)
    {
      object1.velocityX = 0;
      object2.velocityX = 0;
      damages();
    }
}