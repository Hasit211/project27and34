const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ball1,ball2,ball3,ball4
var ground,sling1,sling2,sling3,sling4

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ground = new Ground(330,200,250,20)
ball1 = new Ball(250,350)
ball2 = new Ball(300,350)
ball3 = new Ball(350,350)
ball4 = new Ball(400,350)
sling1 = new SlingShot(ball1.body,{x:250,y:205})
sling2= new SlingShot(ball2.body,{x:300,y:205})
sling3= new SlingShot(ball3.body,{x:350,y:205})
sling4= new SlingShot(ball4.body,{x:400,y:205})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine)
ball1.display()
ball2.display()
 ball3.display()
 ball4.display()
 ground.display()
 sling1.display()
 sling2.display()
 sling3.display()
 sling4.display()
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
   // }
}
