var machine;
var machine2;
var road;
var machineimg,machine2img,roadimg;

function preload(){
machineImage=loadImage("car.png");
machine2Image=loadImage("car2.png");
roadImage=loadImage("12.png");
}

function setup() {
  createCanvas(400,400);

  road=createSprite(12,234,34,45);
  road.addImage(roadimg);

  machine=createSprite(12,23,23,23);
  machine.addImage(machineimg);

  machine2=createSprite(12,23,23,23);
  machine2.addImage(machine2img);

  


  
}


function draw() 
{
  background(0);
  
drawSprites();  
}

