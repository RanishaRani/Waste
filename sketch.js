//Create variables here
var database , dog, dog1, happyDog, foodS, foodStock;

function preload()
{
dog1 = loadImage("images/dogImg.png");
happyDog = loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
  createCanvas(800, 700);
  dog = createSprite(400,600,10,10);
  //scale = 0.1;
  database = firebase.database();
  dog.addImage(dog1);
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  console.log(database)
}


function draw() {  
background(46,139,87);
if (keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(happyDog);
}

  drawSprites();
  //add styles here
  textSize(15)
  text("Press Up Arrow Key to feed Ronald",0,10)
  stroke(3.5);
  textSize(20);
  fill("red");
  
text( "No. of milk bottles available: " + foodStock, 300,30);

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
if (x <= 0){
  x= 0
}
else{
  x = x - 1
}
database.ref('/').update({
  food: x 
})
}