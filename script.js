//variables
let startButton;
let homeScreenImg, firstScreenImg, secondScreenImg, thirdScreenImg, fourthScreenImg, fifthScreenImg, sixthScreenImg, seventhScreenImg, eighthScreenImg, ninthScreenImg, tenthScreenImg, eleventhScreenImg;
let starImg, dimStarImg, purpleStarImg, blueStarImg, orangeStarImg;
let spaceMusic;
let screen = 0; 
let pressPlay;
let proceed;

//preload
function preload(){
  homeScreenImg = loadImage('assets/space.png');
  firstScreenImg = loadImage('assets/space1.png');
  secondScreenImg = loadImage('assets/space2.png');
  thirdScreenImg = loadImage('assets/space3.png');
  fourthScreenImg = loadImage('assets/space4.png');
  fifthScreenImg = loadImage('assets/space5.png');
  sixthScreenImg = loadImage('assets/space6.png');
  seventhScreenImg = loadImage('assets/space7.png');
  eighthScreenImg = loadImage('assets/space8.png');
  ninthScreenImg = loadImage('assets/space9.png');
  tenthScreenImg = loadImage('assets/space10.png');
  eleventhScreenImg = loadImage('assets/space11.png');
  
  starImg = loadImage("assets/star.png");
  dimStarImg = loadImage('assets/dimstar.png');
  blueStarImg = loadImage('assets/star1.png');
  purpleStarImg = loadImage('assets/star2.png');
  orangeStarImg = loadImage('assets/star3.png');
  pressPlay = loadFont('assets/font1.ttf');

  spaceMusic = loadSound('assets/spacemusic.mp3');

}

function setup(){
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  
//create star
  star = new Sprite(starImg,700,600,"k");
  dimStar = new Sprite(dimStarImg, -1000, -1000, "k");
  blueStar = new Sprite(blueStarImg, -1000, -1000, "k");
  purpleStar = new Sprite(purpleStarImg, -1000, -1000, "k");
  orangeStar = new Sprite(orangeStarImg, -1000, -1000, "k");
  
//start screen
  startButton=new Sprite(width / 2, height / 2, 'k');
//button initialization
  proceed=new Sprite(width/2,height/1.4,'k');
  opt1Screen2=new Sprite(width/2+120,height / 2 + 145, 'k');
  opt2Screen2=new Sprite(width/2-120,height / 2 + 145, 'k');
  opt1Screen3=new Sprite(width/2+120,height / 2 + 145, 'k');
  opt2Screen3=new Sprite(width/2-120,height / 2 + 145, 'k');
  opt1Screen4=new Sprite(width/2+120,height / 2 + 145, 'k');
  opt2Screen4=new Sprite(width/2-120,height / 2 + 145, 'k');
  opt1Screen5=new Sprite(width/2, height/1.4, 'k');
  opt1Screen6=new Sprite(width/2, height/1.4, 'k');
  opt1Screen7=new Sprite(width/2, height/1.4, 'k');
  opt1Screen8=new Sprite(width/2, height/1.4, 'k');
  opt1Screen9=new Sprite(width/2+120,height / 2 + 145, 'k');
  opt2Screen9=new Sprite(width/2-120,height / 2 + 145, 'k');
  opt1Screen10=new Sprite(width/2, height/1.4, 'k');

  backgroundMusic();
} 

function backgroundMusic() {
  spaceMusic.play();
  spaceMusic.loop();
  spaceMusic.setVolume(0.1);
  userStartAudio();
}

function draw(){

  star.visible = false;
  image(homeScreenImg, 0,0, windowWidth-18, windowHeight-25);

//display startButton + hide other buttons
  startButton.w = 175;
  startButton.h = 50;
  startButton.text = "Play!";
  startButton.fillColor = color(255,255,255);
  startButton.strokeColor = color(0,0,0,0);
  proceed.visible = false;
  opt1Screen2.visible = false;
  opt2Screen2.visible = false;
  opt1Screen3.visible = false;
  opt2Screen3.visible = false;
  opt1Screen4.visible = false;
  opt2Screen4.visible = false;
  opt1Screen5.visible = false;
  opt1Screen6.visible = false; 
  opt1Screen7.visible = false;
  opt1Screen8.visible = false;
  opt1Screen9.visible = false;
  opt2Screen9.visible = false;
  opt1Screen10.visible = false;
  
//display introduction text
  stroke(180, 0, 198);
  strokeWeight(3);
  textFont(pressPlay);
  textSize(12);
  fill(255);
  text("A lost star has become separated from \nthe rest of the stars. Help the star \nmake choices to find their friends!", width / 2, height / 2 + 100);

//display title text
  stroke(180, 0, 198);
  strokeWeight(4);
  textSize(30);
  fill(255);
  text("Welcome to Star Explorer!\nPress play to begin...", width/2, 190);

//startButton functionality
  if (startButton.mouse.presses()) {
    screen = 1;
  }
   
  if (screen == 1){
    drawFirstScreen();
  } else if (screen == 2){
    drawSecondScreen();
  } else if (screen == 4){
    drawFourthScreen();
  } else if (screen == 5){
    drawFifthScreen();
  } else if (screen == 6){
    drawSixthScreen();
  } else if (screen == 7){
    drawSeventhScreen();
  } else if (screen == 8){
    drawEighthScreen();
  } else if (screen == 9){
    drawNinthScreen();
  } else if (screen == 10){
    drawTenthScreen();
  } else if (screen == 11){
    drawEleventhScreen();
  }
}

function drawFirstScreen(){
  image(firstScreenImg,0,0, windowWidth-18, windowHeight-25);
  star.visible = true;
  
//display firstScreen text
  stroke(180, 0, 198);
  strokeWeight(3);
  textFont(pressPlay);
  textSize(20);
  fill(255);
  text("This is Polaris, \nplease help them find their friends! \nPress continue to proceed.", width/2, 120);
  
//move star to center
  star.pos = {x:width/2,y:height/2};
  starImg.resize(168,132);
  
//hide startButton + show proceed button
  startButton.visible = false;
  proceed.visible = true;
  proceed.w = 175;
  proceed.h = 60;
  proceed.text = "Continue";
  proceed.fillColor = color(255,255,255);
  proceed.strokeColor = color(0,0,0,0);

//proceed button functionality
  if (proceed.mouse.presses()){
    screen = 2;
  }
}

function drawSecondScreen(){
  image(secondScreenImg,0,0, windowWidth-18, windowHeight-25);
  star.visible = true;
  star.pos = {x:width/2-75,y:height/2};
  
//display secondScreen text
  stroke(180, 0, 198);
  strokeWeight(3);
  textFont(pressPlay);
  textSize(20);
  fill(255);
  text("Oh no! Polaris has run into a monster, \nwhat should we do?", width/2, 120);

//remove proceed button + add option buttons
  proceed.visible = false;
  
  opt1Screen2.visible = true;
  opt1Screen2.w = 220;
  opt1Screen2.h = 40;
  opt1Screen2.text = "Retreat! Retreat!";
  opt1Screen2.fillColor = color(255,255,255);
  opt1Screen2.strokeColor = color(0,0,0,0);
  opt2Screen2.visible = true;
  opt2Screen2.w = 220;
  opt2Screen2.h = 40;
  opt2Screen2.text = "Time for a battle!";
  opt2Screen2.fillColor = color(255,255,255);
  opt2Screen2.strokeColor = color(0,0,0,0);

  if (opt1Screen2.mouse.presses()){
    screen = 5;
  }
  if (opt2Screen2.mouse.presses()){
    screen = 4;
  }
}

function drawThirdScreen(){
  image(thirdScreenImg,0,0, windowWidth-18, windowHeight-25);
  star.visible = true;
//remove previous options + display new ones
  opt1Screen2.visible = false;
  opt2Screen2.visible = false;
  
  opt1Screen3.visible = true;
  opt1Screen3.w = 220;
  opt1Screen3.h = 40;
  opt1Screen3.text = "Ignore it coldly.";
  opt1Screen3.fillColor = color(255,255,255);
  opt1Screen3.strokeColor = color(0,0,0,0);
  opt2Screen3.visible = true;
  opt2Screen3.w = 220;
  opt2Screen3.h = 40;
  opt2Screen3.text = "Smile brightly!";
  opt2Screen3.fillColor = color(255,255,255);
  opt2Screen3.strokeColor = color(0,0,0,0);
  
//move star
  star.pos = {x:width/2-150,y:height/2};
  
//display thirdScreen text
  stroke(180, 0, 198);
  strokeWeight(3);
  textFont(pressPlay);
  textSize(20);
  fill(255);
  text("We sucessfully escape..\nPhew.. \n \nAaaaak! A snake!", width/2, 120);

  if (opt1Screen3.mouse.presses()){
    screen = 7;
  }
  if (opt2Screen3.mouse.presses()){
    screen = 8;
  }
}

function drawFourthScreen(){
  image(fourthScreenImg,0,0, windowWidth-18, windowHeight-25);
  star.visible = true;
//remove previous options + display new ones
  opt1Screen2.visible = false;
  opt2Screen2.visible = false;
  opt1Screen3.visible = false;
  opt2Screen3.visible = false;
  
  opt1Screen4.visible = true;
  opt1Screen4.w = 220;
  opt1Screen4.h = 40;
  opt1Screen4.text = "Attack!";
  opt1Screen4.fillColor = color(255,255,255);
  opt1Screen4.strokeColor = color(0,0,0,0);
  opt2Screen4.visible = true;
  opt2Screen4.w = 220;
  opt2Screen4.h = 40;
  opt2Screen4.text = "Surrender";
  opt2Screen4.fillColor = color(255,255,255);
  opt2Screen4.strokeColor = color(0,0,0,0);
  
//move star
  star.pos = {x:width/2-150,y:height/2};

//display fourthScreen text
  stroke(180, 0, 198);
  strokeWeight(3);
  textFont(pressPlay);
  textSize(20);
  fill(255);
  text("The monster inches closer and closer..\nWhat do we do?!", width/2, 120);

  if (opt2Screen4.mouse.presses()){
    screen = 5;
  }
  if (opt1Screen4.mouse.presses()){
    screen = 6;
  }
}

//surrender

function drawFifthScreen(){
  image(fifthScreenImg,0,0, windowWidth-18, windowHeight-25);
  star.visible = true;
  
//remove previous options + display new ones
  opt1Screen2.visible = false;
  opt2Screen2.visible = false;
  opt1Screen3.visible = false;
  opt2Screen3.visible = false;
  opt1Screen4.visible = false;
  opt2Screen4.visible = false;
  
  opt1Screen5.visible = true;
  opt1Screen5.w = 220;
  opt1Screen5.h = 40;
  opt1Screen5.text = "Regain our light!";
  opt1Screen5.fillColor = color(255,255,255);
  opt1Screen5.strokeColor = color(0,0,0,0);

// remove star + replace with dim star
  star.visible = false;
  dimStar.pos = {x:width/2,y:height/2};
  
//display ending screen text
  stroke(180, 0, 198);
  strokeWeight(3);
  textFont(pressPlay);
  textSize(20);
  fill(255);
  text("The monster cuts all the \nlight out of the galaxy... \nDon't give up now! Polaris! Retrieve your light!", width/2, 120);

   if (opt1Screen5.mouse.presses()){
    screen = 6;
  }
}

function drawSixthScreen(){
  image(sixthScreenImg, 0, 0, windowWidth-18, windowHeight-25);
  star.visible = true;
  
  // hide buttons and dim star + bright star reappears
  opt1Screen2.visible = false;
  opt2Screen2.visible = false;
  opt1Screen3.visible = false;
  opt2Screen3.visible = false;
  opt1Screen4.visible = false;
  opt2Screen4.visible = false;
  opt1Screen5.visible = false;
  
  dimStar.visible = false;
  star.visible = true;
  star.pos = {x:width/2-50,y:height/2.5};
  
  opt1Screen6.visible = true;
  opt1Screen6.w = 250;
  opt1Screen6.h = 40;
  opt1Screen6.text = "Walk carefully..";
  opt1Screen6.fillColor = color(255,255,255);
  opt1Screen6.strokeColor = color(0,0,0,0);
  
  // sixthScreen text
  stroke(180, 0, 198);
  strokeWeight(3);
  textFont(pressPlay);
  textSize(20);
  fill(255);
  text("Polaris flies up, shining brighter than ever. \nThe foolish monster is banished into the depths of the waters!", width/2, 120);

   if (opt1Screen6.mouse.presses()){
    screen = 9;
  }
}

function drawSeventhScreen(){
  image(seventhScreenImg, 0, 0, windowWidth-18, windowHeight-25);
  star.visible = true;
  
  opt1Screen2.visible = false;
  opt2Screen2.visible = false;
  opt1Screen3.visible = false;
  opt2Screen3.visible = false;
  opt1Screen4.visible = false;
  opt2Screen4.visible = false;
  opt1Screen5.visible = false;
  opt1Screen6.visible = false;

  opt1Screen7.visible = true;
  opt1Screen7.w = 220;
  opt1Screen7.h = 40;
  opt1Screen7.text = "Proceed cautiously..";
  opt1Screen7.fillColor = color(255,255,255);
  opt1Screen7.strokeColor = color(0,0,0,0);
  
// seventhScreen text
  stroke(180, 0, 198);
  strokeWeight(3);
  textFont(pressPlay);
  textSize(20);
  fill(255);
  text("Polaris continues the search for their friends..", width/2, 120);
}

function drawEighthScreen(){
  image(eighthScreenImg, 0, 0, windowWidth-18, windowHeight-25);  
  star.visible = true;
  
  opt1Screen2.visible = false;
  opt2Screen2.visible = false;
  opt1Screen3.visible = false;
  opt2Screen3.visible = false;
  opt1Screen4.visible = false;
  opt2Screen4.visible = false;
  opt1Screen5.visible = false;
  opt1Screen6.visible = false;
  opt1Screen7.visible = false;
  
  opt1Screen8.visible = true;
  opt1Screen8.w = 220;
  opt1Screen8.h = 40;
  opt1Screen8.text = "Follow the snake";
  opt1Screen8.fillColor = color(255,255,255);
  opt1Screen8.strokeColor = color(0,0,0,0);
  
// eighthScreen text
  stroke(180, 0, 198);
  strokeWeight(3);
  textFont(pressPlay);
  textSize(20);
  fill(255);
  text("The snake guides you to the skies.. \nWhat might we find there?", width/2, 120);

  if (opt1Screen8.mouse.presses()){
    screen = 11;
  }
}

function drawNinthScreen(){
  image(ninthScreenImg, 0, 0, windowWidth-18, windowHeight-25);
  star.visible = true;
  
  opt1Screen2.visible = false;
  opt2Screen2.visible = false;
  opt1Screen3.visible = false;
  opt2Screen3.visible = false;
  opt1Screen4.visible = false;
  opt2Screen4.visible = false;
  opt1Screen5.visible = false;
  opt1Screen6.visible = false; 
  opt1Screen7.visible = false;
  opt1Screen8.visible = false;

  star.pos = {x:width/2-80,y:height/2.4};
  
  opt1Screen9.visible = true;
  opt1Screen9.w = 220;
  opt1Screen9.h = 40;
  opt1Screen9.text = "Run hurriedly!";
  opt1Screen9.fillColor = color(255,255,255);
  opt1Screen9.strokeColor = color(0,0,0,0);
  opt2Screen9.visible = true;
  opt2Screen9.w = 220;
  opt2Screen9.h = 40;
  opt2Screen9.text = "Walk carefully!";
  opt2Screen9.fillColor = color(255,255,255);
  opt2Screen9.strokeColor = color(0,0,0,0);

    if (opt1Screen9.mouse.presses()){
    screen = 10;
  }
   if (opt2Screen9.mouse.presses()){
    screen = 11;
 }
}
function drawTenthScreen(){
  image(tenthScreenImg, 0, 0, windowWidth-18, windowHeight-25);
  star.visible = true;
  
  opt1Screen2.visible = false;
  opt2Screen2.visible = false;
  opt1Screen3.visible = false;
  opt2Screen3.visible = false;
  opt1Screen4.visible = false;
  opt2Screen4.visible = false;
  opt1Screen5.visible = false;
  opt1Screen6.visible = false; 
  opt1Screen7.visible = false;
  opt1Screen8.visible = false;
  opt1Screen9.visible = false;
  opt2Screen9.visible = false;
  
  opt1Screen10.visible = true;
  opt1Screen10.w = 220;
  opt1Screen10.h = 40;
  opt1Screen10.text = "Keep going!";
  opt1Screen10.fillColor = color(255,255,255);
  opt1Screen10.strokeColor = color(0,0,0,0);
// tenthScreen text
  stroke(180, 0, 198);
  strokeWeight(3);
  textFont(pressPlay);
  textSize(20);
  fill(255);
  text("We should've walked more carefully.. \nI hope we're almost there...", width/2, 120);
  
  if (opt1Screen10.mouse.presses()){
    screen = 11;
  }
}
function drawEleventhScreen(){
  image(eleventhScreenImg, 0, 0, windowWidth-18, windowHeight-25);
  
  star.visible = true;
  star.pos = {x:width/2-100,y:height/2.2};
  blueStar.visible = true;
  blueStar.pos = {x:width/2+100,y:height/2.2};
  purpleStar.visible = true;
  purpleStar.pos = {x:width/2-100,y:450};
  orangeStar.visible = true;
  orangeStar.pos = {x:width/2+100,y:450};

  opt1Screen2.visible = false;
  opt2Screen2.visible = false;
  opt1Screen3.visible = false;
  opt2Screen3.visible = false;
  opt1Screen4.visible = false;
  opt2Screen4.visible = false;
  opt1Screen5.visible = false;
  opt1Screen6.visible = false; 
  opt1Screen7.visible = false;
  opt1Screen8.visible = false;
  opt1Screen9.visible = false;
  opt2Screen9.visible = false;
  opt1Screen10.visible = false;
  
// eleventhScreen text
  stroke(190, 0, 198);
  strokeWeight(3);
  textFont(pressPlay);
  textSize(25);
  fill(255);
  text("Polaris profusely thanks you \nfor reuniting them with their friends!! \nWoo-hoo!", width/2, 120);
}
