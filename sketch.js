const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world,engine;
var ground;

var division = []
var plinko = []
var particle = []

var divisionHeight = 300;

function setup(){
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,780,480,30);

  for(var i = 0;i<width;i = i+80){
    division.push(new Division(i,height-divisionHeight/2,10,divisionHeight));
  }

  for(var j=40;j<width;j = j+50){
    plinko.push(new Plinko(j,75));
  }
  for(var j=15;j<width;j = j+50){
    plinko.push(new Plinko(j,175));
  }
  for(var j=40;j<width;j = j+50){
    plinko.push(new Plinko(j,275));
  }
  for(var j=15;j<width;j = j+50){
    plinko.push(new Plinko(j,375));
  }
}

function draw(){
  background(0,0,0);
  Engine.update(engine);
  
  if(frameCount % 60===0){
    particle.push(new Particle(random(width/2-30,width/2+30),10,10));
  }

  ground.display();
  
  for(var j = 0;j<plinko.length;j++){
    plinko[j].display();
  }
  for(var k = 0;k<particle.length;k++){
    particle[k].display();
  }
  for(var i = 0;i<division.length;i++){
    division[i].display();
  }
}