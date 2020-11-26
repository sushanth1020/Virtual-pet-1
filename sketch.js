//Create variables here
var dog
var happyDog
var database
var foodS
var foodStock
function preload()
dog.loadImage("dogImg.png");
happyDog.loadImage("dogImg1.png");
{
	//load images here
}

function setup() {
	createCanvas(500,500);
  dog= createSprite(100,200,10,20);
  dog.addImage(dog);
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
}


function draw() { 
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

  drawSprites();
  //add styles here
  text("Note:press Up_ARROW to feed Drago Milk");
  textSize(20);
  fill("blue")
  stroke();

}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  database.ref('/').update({
  Food:x
  })
}


