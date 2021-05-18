
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
	rock = new Stone(120,460,10);

	ground = new Ground(width/2,595,width,10);

  mango1 = new Mango(1000,70,20);
  mango2 = new Mango(920,120,20);
  mango3 = new Mango(1035,115,20);
  mango4 = new Mango(1100,170,20);
  mango5 = new Mango(1140,250,20);
  mango6 = new Mango(1020,240,20);
  mango7 = new Mango(950,195,20);
  mango8 = new Mango(890,250,20);
  mango9 = new Mango(820,245,20);
  mango10 = new Mango(775,200,20);
  mango11 = new Mango(840,155,20);
  
  
  slingShot = new Chain(rock.body,{x : 120,y : 464});

	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  Engine.update(engine);

  text(mouseX+ " , " +mouseY,50,50);
  
  push();
  imageMode(CENTER);
  image(boyImg,180,520,200,250);
  image(treeImg,950,320,500,600);
  pop();
  
  rock.display();

  ground.display();

  mango1.display(50,50);
  mango2.display(60,60);
  mango3.display(55,55);
  mango4.display(65,65);
  mango5.display(50,50);
  mango6.display(55,60);
  mango7.display(50,50);
  mango8.display(65,65);
  mango9.display(50,50);
  mango10.display(55,60);
  mango11.display(50,50);

  slingShot.display();

  //drawSprites();

  collision(rock,mango1);
  collision(rock,mango2);
  collision(rock,mango3);
  collision(rock,mango4);
  collision(rock,mango5);
  collision(rock,mango6);
  collision(rock,mango7);
  collision(rock,mango8);
  collision(rock,mango9);
  collision(rock,mango10);
  collision(rock,mango11);

  

  
 
}

function collision(bodyA,bodyB){
  //if(bodyA !== null && bodyB !== null){ 
  var posA = bodyA.body.position;
  var posB = bodyB.body.position;
  if(posA.x - posB.x < bodyA.radius + bodyB.radius &&
    posA.y - posB.y < bodyA.radius + bodyB.radius &&
    posB.x - posA.x < bodyB.radius + bodyA.radius &&
    posB.y - posA.y < bodyB.radius + bodyA.radius){ 
    console.log("hi");

    Body.setStatic(bodyB.body,false);
    
  }
//}

}

function mouseDragged(){
  Body.setPosition(rock.body, {x: mouseX, y: mouseY});

}
function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Body.setPosition(rock.body, {x: 120, y: 460});
    slingShot.attach(rock.body);
  }
}


