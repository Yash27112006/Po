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
 /* var imageRef = storageRef.child('ali.jpg');
  imageRef.getDownloadURL().then(function(url){
      console.log(url.toString());
      var modURL = "https://cors-anywhere.herokuapp.com/"+url;
      tab = createImg(modURL,"test");
      tab.position(x,y);
      tab.style("width","100px");
      tab.style("height","100px");
  });
  var image2Ref = storageRef.child('anthony.PNG');
  image2Ref.getDownloadURL().then(function(url){
      console.log(url.toString());
      var modURL = "https://cors-anywhere.herokuapp.com/"+url;
      tab2 = createImg(modURL,"test");
      tab2.position(x,y+150);
      tab2.style("width","100px");
      tab2.style("height","100px");
  });*/


  storageRef.child('/').listAll().then(function(result){
     result.items.forEach(function(imageRef){
     //console.log(imageRef.toString());
      i+=150;
      displayImage(i,imageRef); 
    });
  });


  thief = new Thief();
  thief.getCount();
//  thief2 = new Thief();
//  thief2.getCount();
  
}

/*function mouseWheel(event) {
  //console.log(event.delta);
  var scrollPos = event.delta;
  if(scrollPos > 0){
     resizeCanvas(windowWidth - 20, windowHeight + scrollPos);
  }
  background(backImg2);
} */

function displayImage(row,image){
      image.getDownloadURL().then(function(url){
      console.log(url.toString());
      var thiefName = image.name.split(".")[0];
      var modURL = "https://cors-anywhere.herokuapp.com/"+url;
      tab = createImg(modURL,"test");
      tab.position(30,row-100);
      tab.style("width","100px");
      tab.style("height","100px");
      readCriminals(thiefName,row);
  });  
}

function draw(){
  if(thiefCount>1){
    //readCriminals();
  }
}


function readCriminals(thiefName,yPos){
  Thief.getThiefInfo().then(()=>{
    if(allThieves !== undefined){
      var display_position = 50;
          var index = 0;
       var posX = 200;
      // var posY = 60;
   
  
      for(var thief in allThieves){
        index = index + 1 ;
          textSize(15);
          if(thief !== undefined){
            if(thiefName.toLowerCase() === allThieves[thief].Name.toLowerCase()){
              createControls(allThieves[thief].Name,
                allThieves[thief].Age,allThieves[thief].Gender,
                allThieves[thief].addressOfLastCrime,posX,yPos);
        }
      }
    }
  }
  });
}
function createControls(Name,age,gender,address,posX,posY){
  nameElement = createElement ('h4', "Name:  "+ Name); 
  nameElement.position(posX-20, posY-110);
  nameElement.style('color','red');
  //text("Name: " + Name, posX, posY-80);
  ageElement = createElement('h4', "Age:  "+ age);
  ageElement.position(posX-20, posY-90);
  ageElement.style('color','red');
  //text("Age: + age, posX, posY-60); 
  genderElement = createElement('h4', "Gender:  "+ gender);
  genderElement.position(posX-20, posY-70);
  genderElement.style('color','red'); 
  //text("Gender: + gender, posX, posY-40); 
  addrElement = createElement('h4', "Address Of Last Crime:  " + address);
  addrElement.position(posX-20, posY-50);
  addrElement.style('color','red');
  //text("Address Of Last Crime: + address, posX, posY-20);    
          var button = createButton('Inform Police');
          button.position(posX+300,posY-30);
    
          button.mousePressed(()=>{
            window.location.href = "index2.html";
          });
}
