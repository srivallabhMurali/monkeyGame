
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;
 
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  var survivalTime=0;
  monkey =createSprite(80,350,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
 score=0;
  ground=createSprite(400,350,9600,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  foodGroup=new Group();
  obstaclesGroup=new Group();
}


function draw() {
  
  background("white");
  monkey.collide(ground);
   
  if(foodGroup.isTouching(monkey)){
      foodGroup.destroyEach();  
    score=score+2;
      }
  
  if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  banana();
  obstacles();
  drawSprites();
  stroke("black");
  textSize(20); 
  fill("black");
  
  switch(score){
    case 10:monkey.scale=0.12;
      break;
    case 20:monkey.scale=0.14;
      break;
    case 30:monkey.scale=0.16;
      break;
    case 40:monkey.scale=0.18;
      break;
    default: break;  
  }
 
  
   if(obstaclesGroup.isTouching(monkey)){
     monkey.scale=0.08;
      obstaclesGroup.destroyEach(); 
     score=score-1;
      } 
  
 text("survival Time : "+ score,300,30)
  
}
function banana(){
  if(frameCount%110===0){
    var banana=createSprite(600,200,40,10);
    banana.scale=0.05;
    banana.y=random(120,200);
    banana.velocityX=-5;
    banana.addImage(bananaImage);
    banana.lifetime=150;
    foodGroup.add(banana);
    
       }
 
 
}
function obstacles(){
  if(frameCount%300===0){
    var obstacles=createSprite(800,310,10,40);
    obstacles.scale=0.15;
    obstacles.velocityX=-5;
    obstacles.addImage(obstacleImage);
    obstacles.lifetime=200;
    obstaclesGroup.add(obstacles); 
    
  }
  
}




