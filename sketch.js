//variable alocation
var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var invisibleGround;


function preload() {
    //loading image and animation
trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
trex_collided = loadImage("trex_collided.png");
groundImage = loadImage("ground2.png")
}



function setup() {
//creating a background
    createCanvas(600, 200);

    //create a trex sprite
trex = createSprite(50,160,20,50);
trex.addAnimation("running", trex_running);
trex.scale = 0.5;

//create a ground sprite
ground = createSprite(200,180,400,20);
ground.addImage("ground",groundImage);
ground.x = ground.width /2;
ground.velocityX = -4;

//creating invisible ground
invisibleGround=createSprite(200,190,400,10);
invisibleGround.visible=false;
}



function draw() {
    //giving background colour
background(220);

//jump when the space button is pressed
if (keyDown("space") && trex.y>=50) {
trex.velocityY = -10;
}

//applying gravity to trex
trex.velocityY = trex.velocityY + 0.8

//creating an infinite ground
if (ground.x < 0) {
ground.x = ground.width / 2;
}

//stops trex from falling down
trex.collide(invisibleGround);

//makes objects on the screen
drawSprites();


}
