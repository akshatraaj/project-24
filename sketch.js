const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;
const Constraint = Matter.Constraint;
const Composite = Matter.Composite;
const Dectector = Matter.Dectector;

var engine, world;
var box1, CannonBall;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(200,300,200,100);
    box2 = new Box(200,395,225,20);
    box3 = new Box(180,260,70, 50);
    box4 = new Box(190,200,90,50);

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();

    box3.display();
    box4.display();
}