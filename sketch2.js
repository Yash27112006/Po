var email;

function preload(){
    backImg = loadImage("design_files/images/backImg2.PNG");
}
function setup(){
    canvas = createCanvas(windowWidth - 20, windowHeight-30);
    email = new Mail();
    email.sendMail();
}
function draw(){
    background(backImg);

}