var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var boxs1,boxs2,boxs3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
boxs1= createSprite(width/2,height-45, 200,20);
boxs2= createSprite(300,height-70 , 20,100);
boxs3= createSprite(500, height-70, 20,100);



	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(400, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);


	helicopterBody = Bodies.circle(400 , 200 , 5 ,{ isStatic:true});
	World.add(world,helicopterBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  boxs1.shapeColor="red"
  boxs2.shapeColor="red"
  boxs3.shapeColor="red"
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  helicopterSprite.x= helicopterBody.position.x 
  helicopterSprite.y=helicopterBody.position.y 
 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

	Matter.Body.setStatic(packageBody,false)

  }
}

function Left(){
	if (keyCode === LEFT_ARROW) {
		Matter.Body.setStatic( helicopterBody,false)

		helicopterBody.y === helicopterBody.y-10;
	
	  }
}

