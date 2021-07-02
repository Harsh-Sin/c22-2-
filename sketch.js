var starImg, fairyImg, bgImg;
var fairy, fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
    starImg = loadImage("images/star.png");
    fairyImg = loadAnimation("images/fairyImage2.png");
    bgImg = loadImage("images/starNight.png");
    fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
    createCanvas(800, 750);

    // fairyVoice.play();

    fairy = createSprite(130, 520);
    fairy.addAnimation("fairyflying", fairyImg);
    fairy.scale = 0.25;

    star = createSprite(650, 30);
    star.addImage(starImg);
    star.scale = 0.2;

    engine = Engine.create();
    world = engine.world;

    starBody = Bodies.circle(650, 30, 5, { restitution: 0.5, isStatic: true });
    World.add(world, starBody);

    Engine.run(engine);
    fairy.setCollider("rectangle", fairy.x, fairy.y - 500, 800, 1000);
    fairy.debug = true;

}


function draw() {
    background(bgImg);
    keyPressed();
    drawSprites();
    if (fairy.isTouching(star)) {

        star.velocityY = 0;
        fairy.velocityX = 0;
    }
}

function keyPressed() {
    //write code here
    if (keyCode === LEFT_ARROW) {
        fairy.velocityX = -5;
    }
    if (keyCode === RIGHT_ARROW) {
        fairy.velocityX = 5;
    }
    if (keyCode === DOWN_ARROW) {
        star.velocityY = 5;
    }
}