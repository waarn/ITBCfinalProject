/*
*This is a game created for
*Intro To Buisness Concepts Class
*
*This game was created By: William Arnholt
*
*The fonts used in this game are protected under the  Apache License Version 2.0, January 2004
*http://www.apache.org/licenses/
*
*/
var PuckX = 200;
var PuckY = 200;
var PuckY1;
let Hide = false;

var CompPuckX = 90;
var CompPuckY = 375; 

var PlayerPuckX = 920;
var PlayerPuckY = 375;

var Score = 0;
var Start = 0;
var PuckAngle; 
var Times;

var changeDirectionX;
var changeDirectionY;

let slider;
let val;

var HitMax;
var HitMin;

var miliseconds;
var seconds;
var gametime


var Rock1X = false;
var Rock1Y = false;
var Rock2X = false;
var Rock3Y = false;
var Rock4X = false;
var Rock4Y = false;
var Rock5X = false;
var Rock5Y = false;
var Rock6X = false;
var Rock6Y = false;
var Rock7X = false;
var Rock7Y = false;
var Rock8X = false;
var Rock8Y = false;
var Rock9X = false;
var Rock9Y = false;
var Rock10X = false;
var Rock10Y = false;


let Rock1 =  true;
let Rock3 =  true;
let Rock5 =  true;
let Rock10 =  true;


var now = false;
var nowTime = 0;

let i = 0;

let fontRegular, fontBold, fontSemiBold;


function preload() {

  fontRegular = loadFont('addons/Open_Sans/OpenSans-Regular.ttf');
  fontSemiBold = loadFont('addons/Open_Sans/OpenSans-SemiBold.ttf');
  fontBold = loadFont('addons/Open_Sans/OpenSans-Bold.ttf');

}


function setup() { 
  createCanvas(1150, 750);

	changeDirectionX = false;
  changeDirectionY = false;

  slider = createSlider(2.5, 7, 3.5);
  slider.position(300, 20);
  slider.style('width', '300px');

  rocks = createRadio();
  rocks.option('1');
  rocks.option('3');
  rocks.option('5');
  rocks.option('10');
  rocks.style('width', '125px');
  rocks.position(990, 130);

  timeWarp = createRadio();
  timeWarp.option('1');
  timeWarp.option('2');
  timeWarp.option('4');
  timeWarp.option('7');
  timeWarp.style('width', '125px');
  timeWarp.position(990,185)

  puckDisapear = createRadio();
  puckDisapear.option('1');
  puckDisapear.option('2');
  puckDisapear.option('4');
  puckDisapear.option('7');
  puckDisapear.style('width', '125px')
  puckDisapear.position(990,260)


} 

function draw() { 
  background(54,126,182);

  fill(198,204,216);
  rect(980,50,150,650)
  fill(0)
textSize(28)
textFont(fontSemiBold)
text('Challenges', 980,75)
textSize(20)
text('Rocks',985,120)
text('Time Warp', 985, 175)
text('Disapering', 985, 225)
text('Puck',985,250)

 

  let val = slider.value();
let puckDisapearVal = puckDisapear.value();
let rocksVal = rocks.value();

  fill(255)
  textFont(fontSemiBold);
  textSize(30)
  text('ITBC Final Project', 10,35)

  fill(255,240,21);
  rect(800,15,160,50);
  fill(0)
  textSize(25);
  textFont(fontRegular);
  text('Seconds: ' + Score, 805, 40);

  fill(238,93,72);
  rect(679,15,75,25);
  fill(0)
  textSize(23);
  text('Start', 690, 37)

  noStroke();
  fill(255,240,21);
  rect(50,50,10,650);
  rect(50,50,900,10);
  rect(950,50,10,650);
  rect(50,700,910,10);

  fill(198,204,216);
  noStroke();
  rect(60,60,890,640);
  
  if(Hide == false){
  fill(0);
  ellipse(PuckX, PuckY, 50, 50);
  }


  fill(69,176,70)
  ellipse(PlayerPuckX, PlayerPuckY, 50, 50);
  fill(1,183,217);
  ellipse(PlayerPuckX, PlayerPuckY, 25, 25);
  
  fill(238,93,72);
  ellipse(CompPuckX, CompPuckY, 50, 50);
  fill(1,183,217);
  ellipse(CompPuckX, CompPuckY,25, 25);  

  CompPuckY = PuckY;
  miliseconds = millis();
  seconds = miliseconds / 1000;

  if (PuckX > 900){
    Start = 2;
  }

  if (Start == 1){

    Score = (round(seconds)) - gametime

    PuckAngle = random(0,100);
    PuckAngle = round(PuckAngle);
    while (PuckAngle > (PuckY - 50)){
      PuckAngle = random(0,10000);
      PuckAngle = round(PuckAngle);
    }

  HitMax = PlayerPuckY + 25;
  HitMin = PlayerPuckY - 25;

  if (PuckY > HitMin && PuckY < HitMax){
    PuckY1 = 868
  }else {
    PuckY1 = 925;
  }
  if(PuckX>PuckY1){
    changeDirectionX=true
  }else if (PuckX<=135){
    changeDirectionX=false
  }
  if (PuckX>=0 && changeDirectionX == false){
    PuckX=PuckX+val
  }else if(changeDirectionX == true){
  PuckX=PuckX-val}

  if(PuckY>675){
    changeDirectionY=true
  }else if (PuckY<=85){
    changeDirectionY=false
  }
  if (PuckY>=0 && changeDirectionY == false){
    PuckY=PuckY+val
  }else if(changeDirectionY == true){
    PuckY=PuckY-val
  }
   
  now = true;
Timer() 
  
  if (nowTime == (puckDisapearVal * 58)){
    console.log(puckDisapearVal)

    if (Hide) {
      Hide = false;
    } else {
      Hide = true;
    }
    nowTime = 0 
  }


 if (rocksVal == 1){
   if(Rock1 == true){
Rock1X = random(100,800)
Rock1X = round(Rock1X)
Rock1Y = random(100,690)
Rock1Y = round(Rock1Y)
   }

   fill(95,158,160)
ellipse(Rock1X,Rock1Y,50,50)
Rock1 = false
 }else if (rocksVal == 3){
  if(Rock3 == true){
    Rock1X = random(100,800)
    Rock1X = round(Rock1X)
    Rock1Y = random(100,690)
    Rock1Y = round(Rock1Y)

    Rock2X = random(100,800)
    Rock2X = round(Rock2X)
    Rock2Y = random(100,690)
    Rock2Y = round(Rock2Y)

   Rock3X = random(100,800)
   Rock3X = round(Rock3X)
   Rock3Y = random(100,690)
   Rock3Y = round(Rock3Y)
       }

    //console.log("X" + Rock2X + "Y" + Rock2Y)
    fill(95,158,160)
    ellipse(Rock1X,Rock1Y,50,50)
    ellipse(Rock2X,Rock2Y,50,50)
    ellipse(Rock3X,Rock3Y,50,50)
    Rock3 = false
//wall sit ups
 }else if (rocksVal == 5){
  if(Rock5 == true){
    Rock1X = random(100,800)
    Rock1X = round(Rock1X)
    Rock1Y = random(100,690)
    Rock1Y = round(Rock1Y)

    Rock2X = random(100,800)
    Rock2X = round(Rock2X)
    Rock2Y = random(100,690)
    Rock2Y = round(Rock2Y)

   Rock3X = random(100,800)
   Rock3X = round(Rock3X)
   Rock3Y = random(100,690)
   Rock3Y = round(Rock3Y)

   Rock4X = random(100,800)
   Rock4X = round(Rock4X)
   Rock4Y = random(100,690)
   Rock4Y = round(Rock4Y)

   Rock5X = random(100,800)
   Rock5X = round(Rock5X)
   Rock5Y = random(100,690)
   Rock5Y = round(Rock5Y)
       }
    
    //console.log("X" + Rock2X + "Y" + Rock2Y)
    fill(95,158,160)
    ellipse(Rock1X,Rock1Y,50,50)
    ellipse(Rock2X,Rock2Y,50,50)
    ellipse(Rock3X,Rock3Y,50,50)
    ellipse(Rock4X,Rock4Y,50,50)
    ellipse(Rock5X,Rock5Y,50,50)
    Rock5 = false
 }else if(rocksVal == 10){
  if(Rock10 == true){
    Rock1X = random(100,800)
    Rock1X = round(Rock1X)
    Rock1Y = random(100,690)
    Rock1Y = round(Rock1Y)

    Rock2X = random(100,800)
    Rock2X = round(Rock2X)
    Rock2Y = random(100,690)
    Rock2Y = round(Rock2Y)

   Rock3X = random(100,800)
   Rock3X = round(Rock3X)
   Rock3Y = random(100,690)
   Rock3Y = round(Rock3Y)

   Rock4X = random(100,800)
   Rock4X = round(Rock4X)
   Rock4Y = random(100,690)
   Rock4Y = round(Rock4Y)

   Rock5X = random(100,800)
   Rock5X = round(Rock5X)
   Rock5Y = random(100,690)
   Rock5Y = round(Rock5Y)
  
   Rock6X = random(100,800)
   Rock6X = round(Rock6X)
   Rock6Y = random(100,690)
   Rock6Y = round(Rock6Y)

   Rock7X = random(100,800)
   Rock7X = round(Rock7X)
   Rock7Y = random(100,690)
   Rock7Y = round(Rock7Y)

  Rock8X = random(100,800)
  Rock8X = round(Rock8X)
  Rock8Y = random(100,690)
  Rock8Y = round(Rock8Y)

  Rock9X = random(100,800)
  Rock9X = round(Rock9X)
  Rock9Y = random(100,690)
  Rock9Y = round(Rock9Y)

  Rock10X = random(100,800)
  Rock10X = round(Rock10X)
  Rock10Y = random(100,690)
  Rock10Y = round(Rock10Y)
  }
    
    //console.log("X" + Rock2X + "Y" + Rock2Y)
    fill(95,158,160)
    ellipse(Rock1X,Rock1Y,50,50)
    ellipse(Rock2X,Rock2Y,50,50)
    ellipse(Rock3X,Rock3Y,50,50)
    ellipse(Rock4X,Rock4Y,50,50)
    ellipse(Rock5X,Rock5Y,50,50)
    ellipse(Rock6X,Rock6Y,50,50)
    ellipse(Rock7X,Rock7Y,50,50)
    ellipse(Rock8X,Rock8Y,50,50)
    ellipse(Rock9X,Rock9Y,50,50)
    ellipse(Rock10X,Rock10Y,50,50)
    Rock10 = false
console.log("10 rocks")
 }






  }else if (Start == 2){
    fill(238,93,72);
    rect(325,250,350,250)
    fill(0)
    textSize(50)
    textFont(fontBold);
    text('You Missed!', 355,325)
    textSize(25)
    text('You lasted ' + Score + ' seconds', 370, 375)
    fill(198,204,216);
    rect(450,400, 120,50)
    fill(0)
    textSize(24)
    text('Try again', 455,430)
  }

  if (keyIsPressed) {
    if (keyCode == UP_ARROW && PlayerPuckY > 85) {
     PlayerPuckY -= 10; 
   } else if (keyCode == DOWN_ARROW && PlayerPuckY < 675) {
     PlayerPuckY +=10; 
   }else if (keyCode == ENTER){
    Start = 1;
    gametime = round(seconds);
   }
  }  


}

function Timer(){
  if(now == true){
  nowTime = nowTime + 1;
  now = false;
  }
}



function mouseClicked() {

  if (mouseX > 678 && mouseX < 753 && mouseY > 15 && mouseY < 38){
    Start = 1;
    gametime = round(seconds);
  }
  if (mouseX > 450 && mouseX < 560 && mouseY > 400 && mouseY < 450 && Start == 2){ 
    location.reload();
  }

 }