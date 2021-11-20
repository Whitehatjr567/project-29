const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.body;
const Constraint = Matter.Constraint;

var engine, world;
var ground,hammer1;
//var HammerImg

function preload() {
  
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
   ground = new Surface(900,200,300,20);
   ground2 = new Surface(500,300,300,20);
   box1 = new box(500,280,70,70);
   box2 = new box(450,280,70,70);
   box3 = new box(550,280,70,70);
   box4 = new box(500,280,70,70);
   box5 = new box(900,180,70,70);
   box6 = new box(850,180,70,70);
   box7 = new box(950,180,70,70);
   box8 = new box(900,160,70,70);
   ground3 = new Surface(600,390,4000,20);
  
   hammer1 = new Hammer(200,250);
   slingshot = new SlingShot(hammer1.body,{x:200, y:50});
}

function draw(){
    background("black");
    Engine.update(engine);
    ground.display();
    ground2.display();
    ground3.display();
    hammer1.display();
    slingshot.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
}
function mouseDragged(){
    Matter.Body.setPosition(hammer1.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode===32)
     slingshot.attach(hammer1.body)
 }
