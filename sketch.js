const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12;
var box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24;
var box25,box26,box27,box28;
var ball,loncher;
var ground1,ground2;
var hexImage
function preload(){
hexImage = loadImage("hex.png");
}
function setup(){
    var canvas = createCanvas(1800,650);
    engine = Engine.create();
    world = engine.world;
    hexagon1 = Bodies.circle(50,200,20);
    
    loncher = new SlingShot(this.hexagon1,{x:200, y:100});
   //first stand
   //first layer
    ground1 = new Ground(670,450,200,20);
    box1 = new Box(595,417,30,40);
    box2 = new Box(625,417,30,40);
    box3 = new Box(655,417,30,40);
    box4 = new Box(685,417,30,40); 
    box5 = new Box(710,417,30,40);
    box6 = new Box(740,417,30,40);
   //second layer
   box7 = new Box(610,375,30,40);
   box8 = new Box(640,375,30,40);
   box9 = new Box(670,375,30,40);
   box10 = new Box(700,375,30,40);
   box11 = new Box(730,375,30,40);
   //third layer
   box12 = new Box(635,335,30,40);
   box13 = new Box(665,335,30,40);
   box14 = new Box(695,335,30,40);
   //top layer
   box15 = new Box(665,295,30,40)
   
//second stand
//first layer
ground2 = new Ground(1100,350,200,20);
box16 = new Box(1030,320,30,40)
box17 = new Box(1060,320,30,40)
box18 = new Box(1090,320,30,40)
box19 = new Box(1120,320,30,40)
box20 = new Box(1150,320,30,40)
//second layer
box21 = new Box(1040,280,30,40)
box22 = new Box(1070,280,30,40)
box23 = new Box(1100,280,30,40)
box24 = new Box(1130,280,30,40)
  //third layer
  box25 = new Box(1050,240,30,40)
  box26 = new Box(1080,240,30,40)
  box27 = new Box(1110,240,30,40) 
  //top layer 
  box28 = new Box(1080,200,30,40) 

  
}

function draw(){
    background(0);
    Engine.update(engine);

//first lyaer
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  
//second layer
  box7.display();
  box8.display(); 
  box9.display();
  box10.display();
  box11.display();
 //third layer
 box12.display();
 box13.display();
 box14.display();
 //top layer
 box15.display();
  
 //second stand
 //first layer
 ground2.display();
 box16.display();
 box17.display();
 box18.display();
 box19.display();
 box20.display();
 // second layer
 box21.display();
 box22.display();
 box23.display();
 box24.display();
 // third layer
 box25.display();
 box26.display();
 box27.display();
 //top layer
 box28.display();
 imageMode(CENTER);
 image(hexImage,hexagon1.position.x,hexagon1.position.y,30,30);
 
 loncher.display();
}
function mouseDragged(){
  
      Matter.Body.setPosition(this.hexagon1, {x: mouseX , y: mouseY});

}
function mouseReleased(){
  loncher.fly();
}


