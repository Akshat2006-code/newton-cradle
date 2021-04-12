
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(1200, 700);  
    engine = Engine.create();
  	world = engine.world;
    Engine.run(engine);

  roof1 = new Ground(700,200,1000,20);
	bob1 = new Bob(100,300,100);
	bob2 = new Bob(200,300,100);
 	bob3 = new Bob(300,300,100);  
	bob4 = new Bob(400,300,100);
	bob5 = new Bob(500,300,100);
  Chain1 = new Chain(bob1.body,roof1.body,-200,-100);
  Chain2 = new Chain(bob2.body,roof1.body,-300,-200);
  Chain3 = new Chain(bob3.body,roof1.body,-400,-300);
  Chain4 = new Chain(bob4.body,roof1.body,-500,-400);
  Chain5 = new Chain(bob5.body,roof1.body,-600,-500);

	//Create the Bodies Here.


}
function draw() {
  rectMode(CENTER);
  background("White");
  Engine.update(engine);
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();  
 Chain1.display();
 Chain2.display();
 Chain3.display();
 Chain4.display();
 Chain5.display();
  drawSprites();  
 
}

function keyPressed() {if (keyCode === UP_ARROW)
  { Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45}); } }




