var spaceShip;
var backImg, spacei, rock1Img, rock2Img, laserImg, bigUfo, bullet;
var ufo, obstaclegroup;
var shoot;
var score=0;;
var shootgroup;
var shootgroup;
var END = 2;
var PLAY = 1;
var START = 0;
var gameState = START;
var fillform;

function preload(){
  backImg = loadImage("assets/SpaceImage.png");
  spacei = loadImage("assets/SpaceShip.png");
  rock1Img = loadImage("assets/rock1.png");
  rock2Img = loadImage("assets/rock2.png");
  laserImg = loadImage("assets/laser.png");
  bigUfo = loadImage("assets/BigUFO.png");
  bullet = loadImage("assets/bullet.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  spaceShip = createSprite(200, 520, 50,100);
  spaceShip.addImage(spacei);
  spaceShip.scale = 0.15
  
  obstaclegroup = new Group();
  shootgroup = new Group();
  lasergroup = new Group();

  fillForm = new Form();
  
}


function draw() 
{
  background(backImg); 
 

  if(gameState === START){
    background("lightblue")
    fillForm.display();
    spaceShip.visible=false;
  }

 else  if(gameState===PLAY){
  textSize(20);
  fill("white");
  text("Score:"+ score,100,50);

  if(keyDown(UP_ARROW)){
    spaceShip.y -= 5;
  }

  if(keyDown("RIGHT_ARROW")){
    spaceShip.x += 5;
  }

  if(keyDown("LEFT_ARROW")){
    spaceShip.x -= 5;
  }

  if(keyDown("space")){
    laserBeam();
  }

  if(keyDown("B")) {
    shoot();
  }

  if(lasergroup.isTouching(obstaclegroup)){
    for(var i=0;i<obstaclegroup.length;i++){
      if(lasergroup.isTouching(obstaclegroup[i])){
        lasergroup.destroyEach();
        obstaclegroup[i].destroy();
         score += 2;
      }
    }
  }
  metioriods();
   }

  
  drawSprites();
}

function laserBeam(){
  var laser = createSprite(200, 200, 50,100);
  laser.addImage(laserImg);
  laser.scale = 0.2
  laser.x = spaceShip.x;
  laser.y = spaceShip.y;
  laser.velocityY -= 5;
  laser.lifeTime = 1000;
  lasergroup.add(laser);
}

function shoot(){
  var shoot = createSprite(200, 300, 100, 50);
  shoot.addImage(bullet);
  shoot.scale = 0.2;
  shoot.x = spaceShip.x;
  shoot.y = spaceShip.y;
  shoot.velocityY -= 5;
  shoot.lifeTime = 1000;
  shootgroup.add(shoot);

}

function metioriods(){
  if(frameCount %100 === 0){
    var obstacle = createSprite(200, 200, 50, 50);
    obstacle.x = Math.round(random(50, 1500));
    obstacle.y = Math.round(random(200, 500));
    obstaclegroup.add(obstacle);
  var rand = Math.round(random(0,1));
  console.log(rand)
  if(rand === 0){
    obstacle.addImage("I1",rock1Img);
    obstacle.scale = 0.2;
  }
  else if(rand === 1){
    obstacle.addImage("I2",rock2Img);
    obstacle.scale = 0.2;
  }
  }
  //obstaclegroup.add(obstacle);

}

