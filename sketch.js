const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball;
var block;
var block2;
var block3;
var block4;
var block5;
var button;
function preload() {
  sheep = loadImage("sheep.png");
}
function setup() {
  var canvas = createCanvas(windowWidth - 10, windowHeight + 5);

  engine = Engine.create();
  world = engine.world;

  ball = new Ball(width / 2 - 480, height / 2 - 180, 80, 80);
  block = new Block(width / 2 - 425, height / 2 + 50, 250, 20);
  block2 = new Block(width / 2 - 200, height / 2 + 50, 100, 170);
  block3 = new Block(width / 2 - 20, height / 2 + 50, 150, 20);
  block4 = new Block(width / 2 + 150, height / 2 + 50, 100, 170);
  block5 = new Block(width / 2 + 380, height / 2 + 50, 250, 20);
  block6 = new Block(width / 2 + 650, height / 2, 200, 200);
  block7 = new Block(width / 2 + 650, height / 2 - 400, 200, 200);
  block8 = new Block(width / 2 + 740, height /2 - 200, 20, 200)
  block9 = new Block(width - 975, 0, windowWidth, 20);
  block10 = new Block(width - 955, 935, windowWidth, 20);
  block11 = new Block(0, height, 20, windowWidth);
  block12 = new Block(1900, height, 20, windowWidth);
  button = createButton("Click to Jump");
  button.position(width / 2, height - 100);
  button.class("blowButton");
  button.mouseClicked(blow);
}

function draw() {
  background(59);
  Engine.update(engine);
  block.show();
  block2.show();
  block3.show();
  block4.show();
  block5.show();
  block6.show();
  block7.show();
  block8.show();
  //block9.show();
  //block10.show();
  //block11.show();
  //block12.show();
  ball.show();  
  
  if (keyIsDown(UP_ARROW)) {
    arrow_blow();
  }
}

function blow() {
  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0.05, y:-0.025});
}

function arrow_blow() {
  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0.005, y:-0.0025});
}
