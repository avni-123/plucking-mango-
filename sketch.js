const Engine = Matter.Engine;

const World = Matter.World;

const Bodies = Matter.Bodies;

const Body = Matter.Body;

const Render = Matter.Render;

const Constraint = Matter.Constraint;

var treeObj, stoneObj, groundObject, launcherObject;

var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11, mango12;

var world, boy;

var rock;

var slingShot;

function preload(){

	boy = loadImage("images/boy.png");

  }

function setup(){

	createCanvas(1300, 600);

	engine = Engine.create();

	world = engine.world;

	mango1 = new Mango(1100, 100, 30);

  mango2 = new Mango(1070, 250, 40);

  mango3 = new Mango(1010, 100, 30);

  mango4 = new Mango(1100, 40, 20);

  mango5 = new Mango(1140, 200, 25);

  mango6 = new Mango(950, 150, 35);

  mango7 = new Mango(950, 250, 15);

  mango8 = new Mango(1170, 260, 37);

  mango9 = new Mango(1220, 180, 30);

  mango10 = new Mango(900, 200, 28);

  mango11 = new Mango(1030, 180, 30);

  mango12 = new Mango(1170, 130, 40);

	treeObj = new tree(1050,580);

	groundObject = new ground(width / 2, 600, width, 20);

	rock = new Rock(100, 200, 50, 50);

	slingShot = new Slingshot(rock.body, {x : 240, y : 420});
	
	Engine.run(engine);

}

function mouseDragged(){

  Matter.Body.setPosition(rock.body, {x : mouseX, y : mouseY});

}

function mouseReleased(){

  slingShot.rockFly();

}

function draw(){

  background("rgb(100, 150, 220)");

  image(boy, 200, 340, 200, 300);

  console.log(rock);

  treeObj.display();

  mango1.display();

  mango2.display();

  mango3.display();

  mango4.display();

  mango5.display();

  mango6.display();

  mango7.display();

  mango8.display();

  mango9.display();

  mango10.display();

  mango11.display();

  mango12.display();

  groundObject.display();

  rock.display();

  slingShot.display();

  collision(rock, mango1);

	collision(rock, mango2);

	collision(rock, mango3);

	collision(rock, mango4);

	collision(rock, mango5);

	collision(rock, mango6);

  collision(rock, mango7);

	collision(rock, mango8);

	collision(rock, mango9);

	collision(rock, mango10);

	collision(rock, mango11);

	collision(rock, mango12);

} 

  function collision(A, mango){

    var d = dist(A.body.position.x, A.body.position.y, mango.body.position.x, mango.body.position.y);

    if(d <= 50){

      A.Body.setStatic(mango.body, false);

    }

}
