var astronaut,spaceship;
var bath,sleep,brush,drink,iss,eat,gym,move;
var edge,astro;

function preload(){
  //made mistake in loading animations its "bath1.png",bath2.png its not bath1.png,bath2.png"
  iss = loadImage("iss.png");
  bath = loadAnimation("bath1.png","bath2.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  
  eat = loadAnimation("eat1.png","eat2.png");
  gym = loadAnimation("gym1.png","gym2.png");
  move = loadAnimation("move.png","move.png","move1.png","move1.png");
}

function setup() {
  createCanvas(1280,575);

  edge = createEdgeSprites();
//create a seperate sprite for space ship and astronaut
spaceship = createSprite(640,260,40,40);
spaceship.addImage(iss)
spaceship.scale = 0.3
//for spaceship use this x, y, width, height
  astronaut = createSprite(640,270,800,400);
  //use this scale
  astronaut.scale = 0.2;
  //add labels 
  
  astronaut.addAnimation("sleeping",sleep);
  
  
  

  
}

function draw() {
  //give a background
background("black")
//this is perfect
drawSprites();



astronaut.bounceOff(edge);


  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 280
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gyming",gym)
    astronaut.changeAnimation("gyming");
    astronaut.y = 330;
    astronaut,velocityX = 0;
    astronaut.velocityY = 0;
  }
   
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath)
    astronaut.changeAnimation("bathing");
    astronaut.y = 300;
    astronaut,velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat)
    astronaut.changeAnimation("eating");
    astronaut.y = 330;
    astronaut,velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("m")){
    astronaut.addAnimation("moving",move)
    astronaut.changeAnimation("moving");
    astronaut.velocityX = 7;
    astronaut.velocityY = 1;
  }

  




textSize(20);
  fill("white")
  text("Instructions:",20, 35);
  textSize(15);
  text("Up Arrow = Brushing",20, 55);
  text("Down Arrow = Gymming",20, 70);
  text("Left Arrow = Eating",20, 85);
  text("Right Arrow = Bathing",20, 100);
  text("m key = Moving",20, 115);
}