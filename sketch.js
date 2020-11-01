//Create variables here
var dog,happyDog,foodS,foodStock;
var dogImg,happydogImg,database;


function preload()
{
  //load images here
  dogImg=loadImage("images/dogImg.png");
  hapydogImg=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500,500);
  dog=createSprite(250,250,10,10);
  dog.addImage(dogImg);
  
  database=firebase.database();
  var foodStock=database.ref('Food');
  foodStock.on("value",readstock);
}


function draw() {  
  background(46,139,87);

  

  drawSprites();
  //add styles here

}



