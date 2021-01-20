
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImg,treeImg;

function preload(){
	boyImg = loadImage("Plucking mangoes/boy.png");
	treeImg = loadImage("Plucking mangoes/tree.png");
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rock = new Stone(170,470,50,50);

	ground = new Ground(width/2,595,width,10);

  mango1 = new Mango(500,200,50,50);
  
  slingshot = new Chain(rock.body,{x : 100,y : 100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  push();
  imageMode(CENTER);
  image(boyImg,180,520,200,250);
  image(treeImg,950,320,500,600);
  pop();
  
  rock.display();

  ground.display();

  mango1.display();

  slingshot.display();

  //drawSprites();
 
}



