var canvas;
var thiefCount;
var allThieves;
var database;
var thief;
var tab,tab2;
var i = 0;
var x = 30;
var y = 60;
var email;
var backImg,backImg2;
var imageName;

function preload(){
   backImg2 = loadImage("design_files/images/rr.jpg");
}

function setup(){
  canvas = createCanvas(windowWidth - 20, windowHeight-30);
  background(backImg2);
  database = firebase.database();
  var storageRef = firebase.storage().ref();
}

function draw(){
  if(thiefCount>1){
    //readCriminals();
  }
}
