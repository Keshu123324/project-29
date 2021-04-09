const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground1,polygon,polygon_img,rope;
var b1,b2,b3,b4,b5,b6,b7,b8,b9;

function preload()
{
 polygon_img=loadImage("polygon.png");
}

 function setup() {
	createCanvas(1700,700);

	engine = Engine.create();
	world = engine.world;

  Engine.run(engine);


	//Create the Bodies Here
 ground1=new Ground(790,500,300,20);
// ground2=new Ground(1300,400,500,20);


//set 1
 b1=new Box(730,235,30,40);
 b2=new Box(760,235,30,40);
 b3=new Box(790,235,30,40);
 b4=new Box(820,235,30,40);
 b5=new Box(850,235,30,40);

 
 b6=new Box(760,195,30,40);
 b7=new Box(790,195,30,40);
 b8=new Box(820,195,30,40);
 
 b9=new Box(790,155,30,40);


 polygon=Bodies.circle(50,200,20);




 World.add(world,polygon);

 rope=new launcher(this.polygon,{x:100,y:200});

 
  
}


function draw() {
  background(0);

  textSize(30);
  text("Drag the hexagonal stone and Release it, to launch it towards the block",50,50)

 ground1.display();

 b1.display();
 b2.display();
 b3.display();
 b4.display();
 b5.display();
 b6.display();
 b7.display();
 b8.display();
 b9.display();
 
 imageMode(CENTER);
 image(polygon_img,polygon.position.x,polygon.position.y,40,40);

 rope.display();
  
 
}

function mouseDragged(){
	Matter.Body.setPosition(this.polygon, {x:mouseX, y:mouseY});
  
  }
  
  function mouseReleased(){
  rope.fly();
  
  }

  function keyPressed(){
    if(keyCode==32)
    {
      Matter.Body.setPosition(this.polygon, {x:220, y:380})
      rope.attach(this.polygon)}
  }
  
  