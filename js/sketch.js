var bomb1, bomb2, bomb3;
var boomimg, boom, gameover, gameOver, restart, Restart;
var healthdrink, healthkit;
var runningleftboy, runningleftBoy, runningrightboy, runningrightBoy;
var runningleftgirl, runningleftGirl, runningrightgirl, runningrightGirl;
var standingboy, standingBoy;
var standinggirl, standingGirl;
var backgroundimg;
var invisibleground;

var backgroundsound;
var explosionsound;
var healthkitordrinkcollected;
var runningsound;

var life, score;
var edges;

var bombGroup, refresherGroup;

function preload(){
  
bomb1=loadImage("images/bomb1.png");
bomb2=loadImage("images/bomb2.png");
bomb3=loadImage("images/bomb3.png");

boomimg=loadImage("images/boomimage.jpg");
gameover=loadImage("images/gameover.png");
restart=loadImage("images/restart.png");

healthdrink=loadImage("images/healthdrink.png");
healthkit=loadImage("images/healthkit.png");

runningleftboy=loadAnimation("images/runningleftboy2.png", "images/runningleftboy3.png", "images/runningleftboy4.png", "images/runningleftboy5.png");
runningrightboy=loadAnimation("images/runningrightboy2.png", "images/runningrightboy3.png", "images/runningrightboy4.png", "images/runningrightboy5.png");

runningrightgirl=loadAnimation("images/runningrightgirl2.png", "images/runningrightgirl3.png", "images/runningrightgirl4.png","images/runningrightgirl5.png","images/runningrightgirl6.png","images/runningrightgirl7.png","images/runningrightgirl8.png","images/runningrightgirl9.png","images/runningrightgirl10.png");
runningleftgirl=loadAnimation("images/runningleftgirl2.png", "images/runningleftgirl3.png", "images/runningleftgirl4.png", "images/runningleftgirl5.png", "images/runningleftgirl6.png", "images/runningleftgirl7.png", "images/runningleftgirl8.png", "images/runningleftgirl9.png", "images/runningleftgirl10.png");

standingboy=loadImage("images/standingboy.png");
standinggirl=loadImage("images/standinggirl.png");

backgroundimg=loadImage("images/underworld.jpg");

backgroundsound=loadSound("sounds/backgroundsound.mp3");
explosionsound=loadSound("sounds/explosionsound.mp3");
healthkitordrinkcollected=loadSound("sounds/healthkitordrinkcollected.mp3");
runningsound=loadSound("sounds/runningsound.wav");
}

function setup() {
  createCanvas(1365,625);

  score = 0;
  life = 3;

  invisibleground=createSprite(682.5, 490, 1365, 5);

bombGroup = new Group();
refresherGroup = new Group();

backgroundsound.play();
backgroundsound.loop();
}

function draw() {
  background(backgroundimg);  



if(bombGroup.isTouching(invisibleground)){
  boom.addImage(boomimg);
  explosionsound.play();
}

invisibleground.visible=false;

spawnBombs();
spawnRefreshers();

textSize(20);
fill("white");
text("Score: "+score, 1250, 30);
text("Life: "+life, 1250, 60);

  drawSprites()
}

function spawnBombs(){
  if(frameCount%60===0){
    var bomb=createSprite(Math.round(random(30, 1350) ), 60, 10, 10);
    bomb.velocityY=8;
    bomb.velocityX=0;

    bomb.lifetime=51;
    var rand=Math.round(random(1, 3));
    switch(rand){
      case 1:bomb.addImage(bomb1);
             break;
      case 2: bomb.addImage(bomb2);
        break;
        case 3: bomb.addImage(bomb3);
        break;
        default: break;
    }
    boom=createSprite(bomb.x, bomb.y+440, 0.1, 0.1);
boom.scale=0.1
boom.lifetime=60;
    bomb.scale=0.2;

    bombGroup.add(bomb);
  }
}

function spawnRefreshers(){
 if(frameCount%200===0){
    var refresher=createSprite(Math.round(random(30, 1350)), 60, 10, 10);

    refresher.velocityY=7;
    refresher.velocityX=0;
  
    refresher.lifetime=52;

    var rand=Math.round(random(1, 2));
    switch(rand){
      case 1:refresher.addImage(healthdrink);
             break;
      case 2: refresher.addImage(healthkit);
        break;
        default: break;
    }
    

refresher.scale=0.125;

   
    refresherGroup.add(refresher);
  }
}