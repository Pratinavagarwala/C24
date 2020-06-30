var ball,ground,ob1,ob3,ob4;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	ball=createSprite(200, 650 ,20,20);
	ball.shapeColor="pink"
	
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	ob1=createSprite(400,height-45,200,10);
	ob1.shapeColor="red";

	ob2=createSprite(500,height-90,10,100);
	ob2.shapeColor="red";

	ob3=createSprite(300,height-90,10,100);
	ob3.shapeColor="red";


	engine = Engine.create();
	world = engine.world;

	ball = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, ball);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



