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
var puckX = 200;
var PuckY = 200;
var PuckY1;
let Hide = false;

let fakePuck1 = false
var fakePuck1X = 400
var fakePuck1X1= 400
var fakePuck1Y = 400
let fakePuck2 = false
var fakePuck2X = 575
var fakePuck2X2 = 575
var fakePuck2Y= 200
let fakePuck3 = false
var fakePuck3X = 500
var fakePuck3X3 = 650
var fakePuck3Y = 650
let fakePuck4 = false
var fakePuck4X = 250
var fakePuck4X4 = 250
var fakePuck4Y = 250

var fakeChangeDirection1X = false;
var fakeChangeDirection1Y = false;
var fakeChangeDirection2X = false;
var fakeChangeDirection2Y = false;
var fakeChangeDirection3X = false;
var fakeChangeDirection3Y = false;
var fakeChangeDirection4X = false;
var fakeChangeDirection4Y = false;

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

var Rock1X 
var Rock1Y 
var Rock2X;
var Rock3Y;
var Rock4X;
var Rock4Y;
var Rock5X;
var Rock5Y;
var Rock6X;
var Rock6Y;
var Rock7X;
var Rock7Y;
var Rock8X;
var Rock8Y;
var Rock9X;
var Rock9Y;
var Rock10X;
var Rock10Y;

var Rock1D
var Rock2D;
var Rock3D;
var Rock4D;
var Rock5D;
var Rock6D;
var Rock7D;
var Rock8D;
var Rock9D;
var Rock10D;

let Rock1 =  true;
let Rock3 =  true;
let Rock5 =  true;
let Rock10 =  true;

var changeDirectionTime = 100;

var now = false;
var nowTime = 0;

var now1 = false;
var nowTime1 = 0;

var now2 = false;
var nowTime2 = 0;

let Warptime = false
var warptimenum = 0;

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
  rocks.attribute('name', 'first')
  rocks.style('width', '125px');
  rocks.position(990, 130);

  Warp = createRadio();
  Warp.option('1');
  Warp.option('2');
  Warp.option('4');
  Warp.option('7');
  Warp.attribute('name', 'second')
  Warp.style('width', '125px');
  Warp.position(990,185)

  puckDisapear = createRadio();
  puckDisapear.option('1');
  puckDisapear.option('2');
  puckDisapear.option('4');
  puckDisapear.option('7');
  puckDisapear.attribute('name', 'third')
  puckDisapear.style('width', '125px')
  puckDisapear.position(990,260)

  multiPuck = createRadio();
  multiPuck.option('1');
  multiPuck.option('2');
  multiPuck.option('3');
  multiPuck.option('4');
  multiPuck.attribute('name', 'fourth')
  multiPuck.style('width', '125px')
  multiPuck.position(990,308)

  changeDirectionChallenge = createRadio();
  changeDirectionChallenge.option('1','On');
  changeDirectionChallenge.option('0','Off')
  changeDirectionChallenge.attribute('name', 'fifth')
  changeDirectionChallenge.style('width', '125px')
  changeDirectionChallenge.position(990,380)

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
  text('Magic Rocks',985,120)
  text('Time Warp', 985, 175)
  text('Disapering', 985, 225)
  text('Puck',985,250)
  text('Fake Pucks',985,300)
  textSize(16)
  fill(255)
  textFont(fontRegular)
  text('Check this project out on Github to learn more about it.', 50 , 740)
  let githubLink = createA('https://github.com/waarn/ITBCfinalProject', 'https://github.com/waarn/ITBCfinalProject');
  githubLink.position(475, 725);
  text('Made By: William Arnholt 2021',900,740)
  fill(0)
  textSize(20)
  textFont(fontSemiBold)
  text('Direction',985,350)
  text('Changing',985,375)


  let val = slider.value();
  let puckDisapearVal = puckDisapear.value();
  let rocksVal = rocks.value();
  let timeWarpVal = Warp.value();
  let multiPuckVal = multiPuck.value();
  let changeDirectionChallengeVal = changeDirectionChallenge.value();

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
    ellipse(puckX, PuckY, 50, 50);
  
  }

  if (multiPuckVal == 1){

    fakePuck1 = true

  }else if (multiPuckVal == 2){
    
    fakePuck1 = true
    fakePuck2 = true

  }else if (multiPuckVal == 3){
    
    fakePuck1 = true
    fakePuck2 = true
    fakePuck3 = true

  }else if (multiPuckVal == 4){

    fakePuck1 = true
    fakePuck2 = true
    fakePuck3 = true
    fakePuck4 = true

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

  if (puckX > 900){

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

    HitMax = PlayerPuckY + 35;
    HitMin = PlayerPuckY - 35;

    if (PuckY > HitMin && PuckY < HitMax){
      PuckY1 = 868
    }else {
      PuckY1 = 925;
    }
    if(puckX>PuckY1){
      changeDirectionX=true
    }else if (puckX<=135){
      changeDirectionX=false
    }
    if (puckX>=0 && changeDirectionX == false){
      puckX=puckX+val+warptimenum
    }else if(changeDirectionX == true){
      puckX=puckX-val-warptimenum
    }
    if(PuckY>675){
      changeDirectionY=true
    }else if (PuckY<=85){
      changeDirectionY=false
    }
    if (PuckY>=0 && changeDirectionY == false){
      PuckY=PuckY+val+warptimenum
    }else if(changeDirectionY == true){
      PuckY=PuckY-val-warptimenum
    }

    if (fakePuck1 == true){
      fill(0);
      ellipse(fakePuck1X, fakePuck1Y, 50, 50);

      if (fakePuck1Y > HitMin && fakePuck1Y < HitMax){
        fakePuck1X1 = 868
      }else {
        fakePuck1X1 = 925;
      }
      if(fakePuck1X>fakePuck1X1){
        fakeChangeDirection1X=true
      }else if (fakePuck1X<=135){
        fakeChangeDirection1X=false
      }
      if (fakePuck1X>=0 && fakeChangeDirection1X == false){
        fakePuck1X=fakePuck1X+val+warptimenum
      }else if(fakeChangeDirection1X == true){
        fakePuck1X=fakePuck1X-val-warptimenum
      }
      if(fakePuck1Y>675){
        fakeChangeDirection1Y=true
      }else if (fakePuck1Y<=85){
        fakeChangeDirection1Y=false
      }
      if (fakePuck1Y>=0 && fakeChangeDirection1Y == false){
        fakePuck1Y=fakePuck1Y+val+warptimenum
      }else if(fakeChangeDirection1Y == true){
        fakePuck1Y=fakePuck1Y-val-warptimenum
      }
  
  }

    if (fakePuck2 == true){
      fill(0);
      ellipse(fakePuck2X, fakePuck2Y, 50, 50);

      if (fakePuck2Y > HitMin && fakePuck2Y < HitMax){
        fakePuck2X2 = 868
      }else {
        fakePuck2X2 = 925;
      }
      if(fakePuck2X>fakePuck2X2){
        fakeChangeDirection2X=true
      }else if (fakePuck2X<=135){
        fakeChangeDirection2X=false
      }
      if (fakePuck2X>=0 && fakeChangeDirection2X == false){
        fakePuck2X=fakePuck2X+val+warptimenum
      }else if(fakeChangeDirection2X == true){
        fakePuck2X=fakePuck2X-val-warptimenum
      }
      if(fakePuck2Y>675){
        fakeChangeDirection2Y=true
      }else if (fakePuck2Y<=85){
        fakeChangeDirection2Y=false
      }
      if (fakePuck2Y>=0 && fakeChangeDirection2Y == false){
        fakePuck2Y=fakePuck2Y+val+warptimenum
      }else if(fakeChangeDirection2Y == true){
        fakePuck2Y=fakePuck2Y-val-warptimenum
      }
  
    }

    if (fakePuck3 == true){
      fill(0);
      ellipse(fakePuck3X, fakePuck3Y, 50, 50);

     if (fakePuck3Y > HitMin && fakePuck3Y < HitMax){
        fakePuck3X3 = 868
      }else {
        fakePuck3X3 = 925;
      }
      if(fakePuck3X>fakePuck3X3){
        fakeChangeDirection3X=true
      }else if (fakePuck3X<=135){
        fakeChangeDirection3X=false
      }
      if (fakePuck3X>=0 && fakeChangeDirection3X == false){
        fakePuck3X=fakePuck3X+val+warptimenum
      }else if(fakeChangeDirection3X == true){
        fakePuck3X=fakePuck3X-val-warptimenum
      }
      if(fakePuck3Y>675){
        fakeChangeDirection3Y=true
      }else if (fakePuck3Y<=85){
        fakeChangeDirection3Y=false
      }
      if (fakePuck3Y>=0 && fakeChangeDirection3Y == false){
        fakePuck3Y=fakePuck3Y+val+warptimenum
      }else if(fakeChangeDirection3Y == true){
        fakePuck3Y=fakePuck3Y-val-warptimenum
      }
  
  }

  if (fakePuck4 == true){
    fill(0);
    ellipse(fakePuck4X, fakePuck4Y, 50, 50);

      if (fakePuck4Y > HitMin && fakePuck4Y < HitMax){
        fakePuck4X4 = 868
      }else {
        fakePuck4X4 = 925;
      }
      if(fakePuck4X>fakePuck4X4){
        fakeChangeDirection4X=true
      }else if (fakePuck4X<=135){
        fakeChangeDirection4X=false
      }
      if (fakePuck4X>=0 && fakeChangeDirection4X == false){
        fakePuck4X=fakePuck4X+val+warptimenum
      }else if(fakeChangeDirection4X == true){
      fakePuck4X=fakePuck4X-val-warptimenum
      }
      if(fakePuck4Y>675){
        fakeChangeDirection4Y=true
      }else if (fakePuck4Y<=85){
        fakeChangeDirection4Y=false
      }
      if (fakePuck4Y>=0 && fakeChangeDirection4Y == false){
        fakePuck4Y=fakePuck4Y+val+warptimenum
      }else if(fakeChangeDirection4Y == true){
        fakePuck4Y=fakePuck4Y-val-warptimenum
      }
  
  }

   
  now = true;
  Timer() 
  
  if (nowTime == (puckDisapearVal * 58)){
    
    if (Hide) {
      Hide = false;
    } else {
      Hide = true;
    }
    nowTime = 0 
  }

  now1 = true;
  Timer1() 
  
  if (nowTime1 == (timeWarpVal * 58)){

    if (Warptime) {
      Warptime = false;
    } else {
      Warptime = true;
    } 
    nowTime1 = 0
  }

  if (Warptime == true){

    warptimenum = random(0,8)
    warptimenum = round(warptimenum)
  }else {
    warptimenum = 0
  }

  now2 = true;
  Timer2() 
  
  if (nowTime2 == changeDirectionTime){
  if (changeDirectionChallengeVal == 1){
  }
    changeDirectionTime = round(random(0,500))
  if (changeDirectionX) {
    changeDirectionX  = false;
  } else {
    changeDirectionX = true;
  } 
  if (changeDirectionY) {
    changeDirectionY = false;
  } else {
    changeDirectionY = true;
  } 
  nowTime2 = 0;
  }

 if (rocksVal == 1){
   if(Rock1 == true){
      Rock1X = random(120,800)
      Rock1X = round(Rock1X)
      Rock1Y = random(120,690)
      Rock1Y = round(Rock1Y)
   }

    var Rock1D = int(dist(Rock1X,Rock1Y,puckX,PuckY));

    if (Rock1D < 50){
      puckX = puckX + round(random(15,45))
    } 
  
    fill(95,158,160)
    ellipse(Rock1X,Rock1Y,50,50)
    Rock1 = false
    }else if (rocksVal == 3){
      if(Rock3 == true){
        Rock1X = random(120,800)
        Rock1X = round(Rock1X)
        Rock1Y = random(120,690)
        Rock1Y = round(Rock1Y)

        Rock2X = random(120,800)
        Rock2X = round(Rock2X)
        Rock2Y = random(120,690)
        Rock2Y = round(Rock2Y)

        Rock3X = random(120,800)
        Rock3X = round(Rock3X)
        Rock3Y = random(120,690)
        Rock3Y = round(Rock3Y)
      }

      var Rock1D = int(dist(Rock1X,Rock1Y,puckX,PuckY));
      var Rock2D = int(dist(Rock2X,Rock2Y,puckX,PuckY));
      var Rock3D = int(dist(Rock3X,Rock3Y,puckX,PuckY));

      if (Rock1D < 50){
       puckX = puckX + round(random(15,45))
      }
      if (Rock2D < 50){
        puckX = puckX + round(random(15,45))
      }
      if (Rock3D < 50){
         puckX = puckX + round(random(15,45))
      }

      fill(95,158,160)
      ellipse(Rock1X,Rock1Y,50,50)
      ellipse(Rock2X,Rock2Y,50,50)
      ellipse(Rock3X,Rock3Y,50,50)
      Rock3 = false
    }else if (rocksVal == 5){
      if(Rock5 == true){
        Rock1X = random(120,800)
        Rock1X = round(Rock1X)
        Rock1Y = random(120,690)
        Rock1Y = round(Rock1Y)

        Rock2X = random(120,800)
        Rock2X = round(Rock2X)
        Rock2Y = random(120,690)
        Rock2Y = round(Rock2Y)

        Rock3X = random(120,800)
        Rock3X = round(Rock3X)
        Rock3Y = random(120,690)
        Rock3Y = round(Rock3Y)

        Rock4X = random(120,800)
        Rock4X = round(Rock4X)
        Rock4Y = random(120,690)
        Rock4Y = round(Rock4Y)

        Rock5X = random(120,800)
        Rock5X = round(Rock5X)
        Rock5Y = random(120,690)
        Rock5Y = round(Rock5Y)
      }
    
      var Rock1D = int(dist(Rock1X,Rock1Y,puckX,PuckY));
      var Rock2D = int(dist(Rock2X,Rock2Y,puckX,PuckY));
      var Rock3D = int(dist(Rock3X,Rock3Y,puckX,PuckY));
      var Rock4D = int(dist(Rock4X,Rock4Y,puckX,PuckY));
      var Rock5D = int(dist(Rock5X,Rock5Y,puckX,PuckY));

      if (Rock1D < 50){
        puckX = puckX + round(random(15,45))
      }
      if (Rock2D < 50){
        puckX = puckX + round(random(15,45))
      }
      if (Rock3D < 50){
        puckX = puckX + round(random(15,45))
      }
      if (Rock4D < 50){
        puckX = puckX + round(random(15,45))
      }
      if (Rock5D < 50){
        puckX = puckX + round(random(15,45))
      }

      fill(95,158,160)
      ellipse(Rock1X,Rock1Y,50,50)
      ellipse(Rock2X,Rock2Y,50,50)
      ellipse(Rock3X,Rock3Y,50,50)
      ellipse(Rock4X,Rock4Y,50,50)
      ellipse(Rock5X,Rock5Y,50,50)
      Rock5 = false
    }else if(rocksVal == 10){
      if(Rock10 == true){
        Rock1X = random(120,800)
        Rock1X = round(Rock1X)
        Rock1Y = random(120,690)
        Rock1Y = round(Rock1Y)

        Rock2X = random(120,800)
        Rock2X = round(Rock2X)
        Rock2Y = random(120,690)
        Rock2Y = round(Rock2Y)

        Rock3X = random(120,800)
        Rock3X = round(Rock3X)
        Rock3Y = random(120,690)
        Rock3Y = round(Rock3Y)

        Rock4X = random(120,800)
        Rock4X = round(Rock4X)
        Rock4Y = random(120,690)
        Rock4Y = round(Rock4Y)

        Rock5X = random(120,800)
        Rock5X = round(Rock5X)
        Rock5Y = random(120,690)
        Rock5Y = round(Rock5Y)
  
        Rock6X = random(120,800)
        Rock6X = round(Rock6X)
        Rock6Y = random(120,690)
        Rock6Y = round(Rock6Y)

        Rock7X = random(120,800)
        Rock7X = round(Rock7X)
        Rock7Y = random(120,690)
        Rock7Y = round(Rock7Y)

        Rock8X = random(120,800)
        Rock8X = round(Rock8X)
        Rock8Y = random(120,690)
        Rock8Y = round(Rock8Y)

        Rock9X = random(120,800)
        Rock9X = round(Rock9X)
        Rock9Y = random(120,690)
        Rock9Y = round(Rock9Y)

        Rock10X = random(120,800)
        Rock10X = round(Rock10X)
        Rock10Y = random(120,690)
        Rock10Y = round(Rock10Y)
      }
   
      var Rock1D = int(dist(Rock1X,Rock1Y,puckX,PuckY));
      var Rock2D = int(dist(Rock2X,Rock2Y,puckX,PuckY));
      var Rock3D = int(dist(Rock3X,Rock3Y,puckX,PuckY));
      var Rock4D = int(dist(Rock4X,Rock4Y,puckX,PuckY));
      var Rock5D = int(dist(Rock5X,Rock5Y,puckX,PuckY));
      var Rock6D = int(dist(Rock6X,Rock6Y,puckX,PuckY));
      var Rock7D = int(dist(Rock7X,Rock7Y,puckX,PuckY));
      var Rock8D = int(dist(Rock8X,Rock8Y,puckX,PuckY));
      var Rock9D = int(dist(Rock9X,Rock9Y,puckX,PuckY));
      var Rock10D = int(dist(Rock10X,Rock10Y,puckX,PuckY));

      if (Rock1D < 50){
        puckX = puckX + round(random(15,45))
      }
      if (Rock2D < 50){
        puckX = puckX + round(random(15,45))
      }
      if (Rock3D < 50){
        puckX = puckX + round(random(15,45))
      }
      if (Rock4D < 50){
        puckX = puckX + round(random(15,45))
      }
      if (Rock5D < 50){
        puckX = puckX + round(random(15,45))
      }
         
      if (Rock6D < 50){
        puckX = puckX + round(random(15,45))
      }
      if (Rock7D < 50){
        puckX = puckX + round(random(15,45))
      }
      if (Rock8D < 50){
        puckX = puckX + round(random(15,45))
      }
      if (Rock9D < 50){
        puckX = puckX + round(random(15,45))
      }
      if (Rock10D < 50){
        puckX = puckX + round(random(15,45))
      }

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

function Timer1(){
  if(now1 == true){
  nowTime1 = nowTime1 + 1;
  now1 = false;
  }
}

function Timer2(){
  if(now2 == true){
  nowTime2 = nowTime2 + 1;
  now2 = false;
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