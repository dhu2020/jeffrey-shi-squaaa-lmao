//setup
var levelNumber

//crystals
var crystal
var crystalTwo
var crystalThree
var crystalFour
var crystalFive
var crystalCount

//images
var playerAvatarLeft
var playerAvatarRight

//declaring for more images
var bg

// var crystals = [
//     crystal, crystalTwo, crystalThree, crystalFour, crystalFive
//     ]

var playerCrystals = []

//movement
var playerX = 50
var playerY = 50
var jump = 0;

//hill numbers
var hillX1 = getRndInteger(0, 50)
var hillY1 = 600
var hillX2 = getRndInteger(500, 650)
var hillY2 = 600
var hillX3 = getRndInteger(400, 500)
var hillY3 = getRndInteger(200, 300)
var hillX4 = getRndInteger(50, 70)
var hillY4 = hillY3

function gravity() {
    playerY = playerY + 10 - jump;
    if (jump > 0) {
        jump--
    }


    if (playerY == windowHeight - 180) {
        jump = 0;
    
    }
    
    if ((playerY > hillY3 && (playerX < hillX3 && playerX > hillX4))){
         playerY = hillY3-50;
         jump=10
    }
       

    if (playerY > windowHeight - 180) {
        playerY = windowHeight - 180
        if (keyIsDown(32) && jump == 0) {
            jump = 27
        }

    }
}





function createHill() {
    ellipse
}

function preload() {
    crystal = loadImage("https://lh6.ggpht.com/j27uj6uG2iZ3X6Dng577bjS5SW0XIMGPuySCpHAaBx3YwpPeo8mQkt0xUEeMlH_Q8n63=w300-rw")
    bg = loadImage("https://vignette.wikia.nocookie.net/glee/images/d/d7/Sky.jpg/revision/latest?cb=20130910145646")
    playerAvatarLeft = loadImage("/time/8bit-megaman-left.png")
    playerAvatarRight = loadImage("/time/8bit-megaman-right.png")
}
var isRight = true
var subject = playerAvatarRight

function Player() {
    if (isRight) { image(playerAvatarRight, playerX, playerY, 50, 50) }
    else { image(playerAvatarLeft, playerX, playerY, 50, 50) }
    if (keyIsDown(LEFT_ARROW)) {
        isRight = false
        playerX = playerX - 5;
    }

    if (keyIsDown(RIGHT_ARROW)) {
        isRight = true
        playerX = playerX + 5;
    }
    
    if(playerX+10 === (hillX1+hillX2)/2 ||playerX-10 === (hillX1+hillX2)/2 ){
        
        playerCrystals.push(1)
        console.log(playerCrystals)
    }
}

function setup() {}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}



var seconds = 60


function timer() {
    if (6000 - nf(millis() / 10) > 0) {
        document.getElementById("timer").innerHTML = nf((6000 - nf(millis() / 10, 3, 2)) / 100, 2, 2)
    }
    if (6000 - nf(millis() / 10) === 0)
        document.getElementById("timer").innerHTML = "END";
}


function createLevel() {
    fill(200, 100, 50)
    //Random hills
    quad(hillX1, hillY1, hillX2, hillY2, hillX3, hillY3, hillX4, hillY4);
    fill(0, 220, 0);
    rect(hillX4, hillY3-20, (hillX3-hillX4), 20);
    //Set up five crystals
}

function userInterface() {
    rect(3 / 4 * windowWidth, 0, 1 / 4 * windowWidth - 20, windowHeight - 20)
}

function draw() {
    createCanvas(windowWidth - 20, windowHeight - 20);
    background(bg);
    gravity()
    createLevel()
    Player()
    image(crystal, (hillX1+hillX2)/2, hillY3-50, 50, 50);

    fill(200, 100, 50);
    noStroke();
    rect(0, windowHeight - 120, windowWidth - 20, 100);
    fill(0, 220, 0);
    rect(0, windowHeight - 140, windowWidth - 20, 20);
    fill(255)
    userInterface()
   
    timer()
}
