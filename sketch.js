const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var object1,object2,object3,object4,object5,object6,object7,object8;


function setup() {
  createCanvas(1200,600);
  engine=Engine.create();
  world=engine.world;
  object1=Bodies.rectangle(200,390,200,20);
  World.add(world,object1);
  object2=Bodies.rectangle(650,500,200,20);
  World.add(world,object2);
  object3=Bodies.rectangle(250,500,200,20);
  World.add(world,object3);
  object4=Bodies.rectangle(600,500,200,20);
  World.add(world,object4);
  object5=Bodies.rectangle(550,500,200,20);
  World.add(world,object5);
  object6=Bodies.rectangle(300,500,200,20);
  World.add(world,object6);
  object7=Bodies.rectangle(425,290,200,20);
  World.add(world,object7);
  object8=Bodies.rectangle(425,500,200,20);
  World.add(world,object8);
  
  ball=Bodies.circle(200,100,20);
  World.add(world,ball);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  rectMode(CENTER);
  rect(object1.position.x,object1.position.y,40,600)
  rect(object2.position.x,object2.position.y,40,800)
  rect(object3.position.x,object3.position.y,40,600)
  rect(object4.position.x,object4.position.y,40,600)
  rect(object5.position.x,object5.position.y,40,400)
  rect(object6.position.x,object6.position.y,40,400)
  rect(object7.position.x,object7.position.y,220,40)
  rect(object8.position.x,object8.position.y,40,150)
  rect.isStatic=true;
  rect.displaySprite();
  rect2.isStatic=true;
  rect2.displaySprite();
  rect3.isStatic=true;
  rect3.displaySprite();
  rect4.isStatic=true;
  rect4.displaySprite();
  
 
}
drawSprites();