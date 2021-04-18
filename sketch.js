const Engine = Matter.Engine;
const World= Matter.World;
const Mouse = Matter.Mouse;
const Bodies = Matter.Bodies;

var engine, world;
var backgroundImg
var play, playImg
var render 
var mConstraint;
var scrollImg, scroll
var bgm, bgmMusic

var form, player, database

var gameState = 0
function preload() {
//loading the images
    backgroundImg = loadImage("images/background4.jpg");
    playImg = loadImage("images/play.png");
    scrollImg = loadImage("images/scroll-removebg-preview.png")
    bgm = loadSound("sounds/bensound-sadday.mp3")

}


function setup(){
    var canvas = createCanvas(displayWidth, displayHeight);
    engine = Engine.create();
    world = engine.world;

    database = firebase.database();

    play= createSprite(displayWidth/2 ,displayHeight/2  , 320, 250)
    play.addAnimation("click",playImg)
    play.scale = 0.5;


    
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    

//Creating the play button

    
   if (mousePressedOver(play)) {
    play.visible= false;
    scroll =createSprite(displayWidth/2 ,displayHeight/2 , 320, 250)
    scroll.addAnimation("click",scrollImg)
    scroll.scale =2;
    bgm.play()
    gameState = 1
  }
   drawSprites();
}




