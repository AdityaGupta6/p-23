var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var line1,line2,line3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6


	engine = Engine.create();
	world = engine.world;
	var options={
		restitution:0.8,
	  isStatic:true
		
		
		}
	packageBody =new Box(390,200,50,50,options)


	line1 =new Line(400,550,200,20)
	line2 =new Line(311,510,20,100)
	line3 =new Line(509,510,20,100)

	

	//Create a Ground
	ground =new Ground(width/2, 560, width, 10 )


	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  Engine.update(engine)
  background(0);
 
	packageBody.display();

	line1.display();
	 line2.display();
	 line3.display();

	 ground.display()

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Body.setStatic(packageBody.object,false)
    
  }
}



