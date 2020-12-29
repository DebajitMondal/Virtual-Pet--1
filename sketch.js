var dog, happyDog, database, foodS, foodStock;
var dogImg, dogHappyImg;
var milk, milkImg;


function preload()
{
  dogImg = loadImage("Dog.png");
  dogHappyImg = loadImage("happydog.png");
 
  

}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.15;
  
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
  foodStock.set(50);
  



  for (var i = 5; i < 500; i=i+10) 
{

var dot = createSprite(i, 5, 3, 3);
dot.shapeColor = "yellow";

}
for (var i = 5; i < 500; i=i+10) 
{

var dot1 = createSprite(i, 495, 3, 3);
dot1.shapeColor = "yellow";

}
for (var i = 5; i < 500; i=i+10) 
{

var dot2 = createSprite(495,i, 3, 3);
dot2.shapeColor = "yellow";

}
for (var i = 5; i < 500; i=i+10) 
{

var dot3 = createSprite(5,i, 3, 3);
dot3.shapeColor = "yellow";

}
}


function draw() {  
  background("lightgreen")

  if(foodS !== 0){
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappyImg);
    

   
  }

  if(keyWentUp(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg);
    
  }
}

if(foodS == 0){
  
  dog.addImage(dogImg);
  foodS = 20;

}
  drawSprites();
  textSize(17);
  fill("black");
  text("Long Press up arrow key to feed your pet Popo",50,50);
  fill("black");
  text("Milk Bottles Remaining  "+foodS,170,440);
}

function readStock(data)
{
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x = 0;
  }else{
    x=x-1
  }

  database.ref('/').update({
    food:x
  })
}

