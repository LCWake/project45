var player, playerImg;
var chicken, chickenImg, chickenGroup, chickenSound;
var cow, cowImg, cowGroup;
var rabbit, rabbitImg, rabbitGroup;
var pig, pigImg, pigGroup, pigSound;
var duck, duckImg, duckGroup, duckSound;
var owl, owlImg;
var background, backgroundImg
var fence1,fence2,fence3,fence4,fence5,fence6,fence7,fence8;
var fenceGroup,wallGroup 
var wall1, wall2, wall3, wall4, wall5;
var cattlePen
var chickenCoop
var pigPen
var quackShack
var animalShelter
var owlHangout
var rabbitHutch 
var rabbit1, rabbit2, rabbit3, rabbit4, rabbit5, rabbit6;
var cow1, cow2, cow3, cow4, cow5, cow6;
var chicken1, chicken2, chicken3, chicken4, chicken5, chicken6;
var duck1, duck2, duck3, duck4, duck5, duck6;
var pig1, pig2, pig3, pig4, pig5, pig6;
var amountPig, amountChicken, amountCow, amountRabbit, amountDuck;
var currentAmountPig, currentAmountChicken, currentAmountCow, CurrentAmountRabbit, currentAmountDuck;

function preload(){
  playerImg = loadImage("./assets/player.jpg")
  cowImg = loadImage("./assets/cow.jpg")
  chickenImg = loadImage("./assets/chicken.jpg")
  pigImg = loadImage("./assets/pig.jpg")
  rabbitImg = loadImage("./assets/rabbit.jpg")
  cowImg = loadImage("./assets/cow.jpg")
  backgroundImg = loadImage("./assets/background.jpeg")
  duckImg = loadImage("./assets/duck.jpg")
  chickenSound = loadSound("./music/chickenSound.mp3")
  pigSound = loadSound("./music/pigSound.mp3")
  duckSound = loadSound("./music/duckSound.mp3")
}

function setup() {
  createCanvas(800,330);
  
  background = createSprite(400, 152, 50, 50);
  background.addImage("background", backgroundImg)
  background.scale = 0.26
  
  fenceGroup = createGroup()
  wallGroup = createGroup()
  cowGroup = createGroup()
  pigGroup = createGroup()
  rabbitGroup = createGroup()
  chickenGroup = createGroup()
  duckGroup = createGroup()

  fence1 = createSprite(530,195, 10, 120 )
  fence1.shapeColor = "black"
  fenceGroup.add(fence1)
  fence2 = createSprite(530, 65, 10, 75)
  fence2.shapeColor = "black"
  fenceGroup.add(fence2)
  fence3 = createSprite(625,65, 150, 10)
  fence3.shapeColor = "black"
  fenceGroup.add(fence3)
  fence4 = createSprite(692.5, 100, 10,80)
  fence4.shapeColor = "black"
  fenceGroup.add(fence4)
  fence5 = createSprite(692.5, 235, 10,100)
  fence5.shapeColor = "black"
  fenceGroup.add(fence5)
  fence6 = createSprite(405,303, 260,10)
  fence6.shapeColor = "black"
  fenceGroup.add(fence6)
  fence7 = createSprite(125, 303, 125,10)
  fence7.shapeColor = "black"
  fenceGroup.add(fence7)

  wall1 = createSprite(629, 170, 5, 100)
  wall1.shapeColor = "black";
  wallGroup.add(wall1)
  wall2 = createSprite(600, 125, 60, 5)
  wall2.shapeColor = "black"
  wallGroup.add(wall2)
  wall3 = createSprite(575,137,5,30)
  wall3.shapeColor = "black"
  wallGroup.add(wall3)
  wall4 = createSprite(600, 220, 60,5)
  wall4.shapeColor = "black"
  wallGroup.add(wall4)
  wall5 = createSprite(575, 205,5,35)
  wall5.shapeColor = "black"
  wallGroup.add(wall5)

  cattlePen = createSprite(75,145, 180,295)
  cattlePen.shapeColor = "blue"

  chickenCoop = createSprite(422, 50,24,40)
  chickenCoop.shapeColor = "red"

  pigPen = createSprite(505, 67, 43,65)
  pigPen.shapeColor = "#8D00A8FF"

  quackShack = createSprite(629,52,20,10)
  quackShack.shapeColor = "purple"

  rabbitHutch = createSprite(637,140,10,30)
  rabbitHutch.shapeColor = "#3AFF0AFF"

  player = createSprite(600, 166, 5, 5)
  player.addImage("player", playerImg)
  player.scale = 0.2
  player.setCollider("rectangle",0,0,60,140)
  //making rabbits
  rabbit1 = createSprite(random(100, 500), random(70, 300))
  rabbit1.addImage("baby rabbit", rabbitImg)
  rabbit1.scale = 0.145
  rabbit2 = createSprite(random(100, 500), random(70, 300))
  rabbit2.addImage("baby rabbit", rabbitImg)
  rabbit2.scale = 0.145
  rabbit3 = createSprite(random(100, 500), random(70, 300))
  rabbit3.addImage("baby rabbit", rabbitImg)
  rabbit3.scale = 0.145
  rabbit4 = createSprite(random(100, 500), random(70, 300))
  rabbit4.addImage("baby rabbit", rabbitImg)
  rabbit4.scale = 0.145
  rabbit5 = createSprite(random(100, 500), random(70, 300))
  rabbit5.addImage("baby rabbit", rabbitImg)
  rabbit5.scale = 0.145
  rabbit6 = createSprite(random(100, 500), random(70, 300))
  rabbit6.addImage("baby rabbit", rabbitImg)
  rabbit6.scale = 0.145
  //making cows
  cow1 = createSprite(random(250, 500), random(70, 300))
  cow1.addImage("baby cow", cowImg)
  cow1.scale = 0.145
  cow2 = createSprite(random(250, 500), random(70, 300))
  cow2.addImage("baby cow", cowImg)
  cow2.scale = 0.145
  cow3 = createSprite(random(250, 500), random(70, 300))
  cow3.addImage("baby cow", cowImg)
  cow3.scale = 0.145
  cow4 = createSprite(random(250, 500), random(70, 300))
  cow4.addImage("baby cow", cowImg)
  cow4.scale = 0.145
  cow5 = createSprite(random(250, 500), random(70, 300))
  cow5.addImage("baby cow", cowImg)
  cow5.scale = 0.145
  cow6 = createSprite(random(250, 500), random(70, 300))
  cow6.addImage("baby cow", cowImg)
  cow6.scale = 0.145
  //making pigs
  pig1 = createSprite(random(100, 500), random(70, 300))
  pig1.addImage("baby pig", pigImg)
  pig1.scale = 0.145
  pig2 = createSprite(random(100, 500), random(70, 300))
  pig2.addImage("baby pig", pigImg)
  pig2.scale = 0.145
  pig3 = createSprite(random(100, 500), random(70, 300))
  pig3.addImage("baby pig", pigImg)
  pig3.scale = 0.145
  pig4 = createSprite(random(100, 500), random(70, 300))
  pig4.addImage("baby pig", pigImg)
  pig4.scale = 0.145
  pig5 = createSprite(random(100, 500), random(70, 300))
  pig5.addImage("baby pig", pigImg)
  pig5.scale = 0.145
  pig6 = createSprite(random(100, 500), random(70, 300))
  pig6.addImage("baby pig", pigImg)
  pig6.scale = 0.145
  //making duck 
  duck1 = createSprite(random(100, 500), random(70, 300))
  duck1.addImage("baby duck", duckImg)
  duck1.scale = 0.145
  duck2 = createSprite(random(100, 500), random(70, 300))
  duck2.addImage("baby duck", duckImg)
  duck2.scale = 0.145
  duck3 = createSprite(random(100, 500), random(70, 300))
  duck3.addImage("baby duck", duckImg)
  duck3.scale = 0.145
  duck4 = createSprite(random(100, 500), random(70, 300))
  duck4.addImage("baby duck", duckImg)
  duck4.scale = 0.145
  duck5 = createSprite(random(100, 500), random(70, 300))
  duck5.addImage("baby duck", duckImg)
  duck5.scale = 0.145
  duck6 = createSprite(random(100, 500), random(70, 300))
  duck6.addImage("baby duck", duckImg)
  duck6.scale = 0.145
  //making chicken 
  chicken1 = createSprite(random(100, 500), random(70, 300))
  chicken1.addImage("baby chicken", chickenImg)
  chicken1.scale = 0.145
  chicken2 = createSprite(random(100, 500), random(70, 300))
  chicken2.addImage("baby chicken", chickenImg)
  chicken2.scale = 0.145
  chicken3 = createSprite(random(100, 500), random(70, 300))
  chicken3.addImage("baby chicken", chickenImg)
  chicken3.scale = 0.145
  chicken4 = createSprite(random(100, 500), random(70, 300))
  chicken4.addImage("baby chicken", chickenImg)
  chicken4.scale = 0.145
  chicken5 = createSprite(random(100, 500), random(70, 300))
  chicken5.addImage("baby chicken", chickenImg)
  chicken5.scale = 0.145
  chicken6 = createSprite(random(100, 500), random(70, 300))
  chicken6.addImage("baby chicken", chickenImg)
  chicken6.scale = 0.145

  currentAmountChicken = 0
  currentAmountCow = 0
  currentAmountDuck = 0
  currentAmountPig = 0
  CurrentAmountRabbit = 0
  amountChicken = 6
  amountCow = 6
  amountDuck = 6
  amountPig = 6
  amountRabbit = 6

  owlHangout = createSprite(497,265, 55,70)
  owlHangout.shapeColor = "#94A9FFA8"


}

function draw() {
  //movement
  if(keyIsDown(UP_ARROW)){
    player.y = player.y - 2
  }
  if(keyIsDown(DOWN_ARROW)){
    player.y = player.y + 2
  }
  if(keyIsDown(LEFT_ARROW)){
    player.x = player.x - 2
  }
  if(keyIsDown(RIGHT_ARROW)){
    player.x = player.x + 2
  }
//colliding walls/fence
  if(player.collide(wallGroup)){
    player.velocityX = 0 
    player.velocityY = 0 
    console.log("you have hit a wall") 
  }

  if(player.collide(fenceGroup)){
    player.velocityX = 0 
    player.velocityY = 0 
    console.log("you have hit a wall") 
  }
//colliding with rabbits/rabbit hutch
//no sound 
  if(rabbit1.collide(player)){
    rabbit1.x = player.x
    rabbit1.y = player.y
  }
  if(rabbit1.isTouching(rabbitHutch)){
    rabbit1.x = rabbitHutch.x
    rabbit1.y = rabbitHutch.y
  }
  if(rabbit1.collide(rabbitHutch)){
    currentAmountRabbit = currentAmountRabbit + 1
  }

  if(rabbit2.collide(player)){
    rabbit2.x = player.x
    rabbit2.y = player.y
  }
  if(rabbit2.isTouching(rabbitHutch)){
    rabbit2.x = rabbitHutch.x
    rabbit2.y = rabbitHutch.y
  }
  if(rabbit2.collide(rabbitHutch)){
    currentAmountRabbit = currentAmountRabbit + 1
  }

  if(rabbit3.collide(player)){
    rabbit3.x = player.x
    rabbit3.y = player.y
  }
  if(rabbit3.isTouching(rabbitHutch)){
    rabbit3.x = rabbitHutch.x
    rabbit3.y = rabbitHutch.y
  }
  if(rabbit3.collide(rabbitHutch)){
    currentAmountRabbit = currentAmountRabbit + 1
  }

  if(rabbit4.collide(player)){
    rabbit4.x = player.x
    rabbit4.y = player.y
  }
  if(rabbit4.isTouching(rabbitHutch)){
    rabbit4.x = rabbitHutch.x
    rabbit4.y = rabbitHutch.y
  }
  if(rabbit4.collide(rabbitHutch)){
    currentAmountRabbit = currentAmountRabbit + 1
  }

  if(rabbit5.collide(player)){
    rabbit5.x = player.x
    rabbit5.y = player.y
  }
  if(rabbit5.isTouching(rabbitHutch)){
    rabbit5.x = rabbitHutch.x
    rabbit5.y = rabbitHutch.y
  }
  if(rabbit5.collide(rabbitHutch)){
    currentAmountRabbit = currentAmountRabbit + 1
  }

  if(rabbit6.collide(player)){
    rabbit6.x = player.x
    rabbit6.y = player.y
  }
  if(rabbit6.isTouching(rabbitHutch)){
    rabbit6.x = rabbitHutch.x
    rabbit6.y = rabbitHutch.y
  }
  if(rabbit6.collide(rabbitHutch)){
    currentAmountRabbit = currentAmountRabbit + 1
  }

  //colliding with cow/cow pen
  //no sound
  if(cow1.collide(player)){
    cow1.x = player.x
    cow1.y = player.y
  }
  if(cow1.isTouching(cattlePen)){
    cow1.x = cattlePen.x
    cow1.y = cattlePen.y
  }
  if(cow1.collide(cattlePen)){
    currentAmountCow = currentAmountCow + 1
  }

  if(cow2.collide(player)){
    cow2.x = player.x
    cow2.y = player.y
  }
  if(cow2.isTouching(cattlePen)){
    cow2.x = cattlePen.x
    cow2.y = cattlePen.y
  }
  if(cow2.collide(cattlePen)){
    currentAmountCow = currentAmountCow + 1
  }

  if(cow3.collide(player)){
    cow3.x = player.x
    cow3.y = player.y
  }
  if(cow3.isTouching(cattlePen)){
    cow3.x = cattlePen.x
    cow3.y = cattlePen.y
  }
  if(cow3.collide(cattlePen)){
    currentAmountCow = currentAmountCow + 1
  }

  if(cow4.collide(player)){
    cow4.x = player.x
    cow4.y = player.y
  }
  if(cow4.isTouching(cattlePen)){
    cow4.x = cattlePen.x
    cow4.y = cattlePen.y
  }
  if(cow4.collide(cattlePen)){
    currentAmountCow = currentAmountCow + 1
  }

  if(cow5.collide(player)){
    cow5.x = player.x
    cow5.y = player.y
  }
  if(cow5.isTouching(cattlePen)){
    cow5.x = cattlePen.x
    cow5.y = cattlePen.y
  }
  if(cow5.collide(cattlePen)){
    currentAmountCow = currentAmountCow + 1
  }

  if(cow6.collide(player)){
    cow6.x = player.x
    cow6.y = player.y
  }
  if(cow6.isTouching(cattlePen)){
    cow6.x = cattlePen.x
    cow6.y = cattlePen.y
  }
  if(cow6.collide(cattlePen)){
    currentAmountCow = currentAmountCow + 1
  }

  //colliding with pig/pig pen
  if(pig1.collide(player)){
    pig1.x = player.x
    pig1.y = player.y
    pigSound.play()
  }
  if(pig1.isTouching(pigPen)){
    pig1.x = pigPen.x
    pig1.y = pigPen.y
  }
  if(pig1.collide(quackShack)){
    currentAmountPig = currentAmountPig + 1
  }

  if(pig2.collide(player)){
    pig2.x = player.x
    pig2.y = player.y
    pigSound.play()
  }
  if(pig2.isTouching(pigPen)){
    pig2.x = pigPen.x
    pig2.y = pigPen.y
  }
  if(pig2.collide(quackShack)){
    currentAmountPig = currentAmountPig + 1
  }

  if(pig3.collide(player)){
    pig3.x = player.x
    pig3.y = player.y
    pigSound.play()
  }
  if(pig3.isTouching(pigPen)){
    pig3.x = pigPen.x
    pig3.y = pigPen.y
  }
  if(pig3.collide(quackShack)){
    currentAmountPig = currentAmountPig + 1
  }

  if(pig4.collide(player)){
    pig4.x = player.x
    pig4.y = player.y
    pigSound.play()
  }
  if(pig4.isTouching(pigPen)){
    pig4.x = pigPen.x
    pig4.y = pigPen.y
  }
  if(pig4.collide(quackShack)){
    currentAmountPig = currentAmountPig + 1
  }

  if(pig5.collide(player)){
    pig5.x = player.x
    pig5.y = player.y
    pigSound.play()
  }
  if(pig5.isTouching(pigPen)){
    pig5.x = pigPen.x
    pig5.y = pigPen.y
  }
  if(pig5.collide(quackShack)){
    currentAmountPig = currentAmountPig + 1
  }

  if(pig6.collide(player)){
    pig6.x = player.x
    pig6.y = player.y
    pigSound.play()
  }
  if(pig6.isTouching(pigPen)){
    pig6.x = pigPen.x
    pig6.y = pigPen.y
  }
  if(pig6.collide(quackShack)){
    currentAmountPig = currentAmountPig + 1
  }
  //colliding with duck/quack Shack
  if(duck1.collide(player)){
    duck1.x = player.x
    duck1.y = player.y
    duckSound.play()
  }
  if(duck1.isTouching(quackShack)){
    duck1.x = quackShack.x
    duck1.y = quackShack.y
  }
  if(duck1.collide(quackShack)){
    currentAmountDuck = currentAmountDuck + 1
  }

  if(duck2.collide(player)){
    duck2.x = player.x
    duck2.y = player.y
    duckSound.play()
  }
  if(duck2.isTouching(quackShack)){
    duck2.x = quackShack.x
    duck2.y = quackShack.y
  }
  if(duck2.collide(quackShack)){
    currentAmountDuck = currentAmountDuck + 1
  }

  if(duck3.collide(player)){
    duck3.x = player.x
    duck3.y = player.y
    duckSound.play()
  }
  if(duck3.isTouching(quackShack)){
    duck3.x = quackShack.x
    duck3.y = quackShack.y
  }
  if(duck3.collide(quackShack)){
    currentAmountDuck = currentAmountDuck + 1
  }

  if(duck4.collide(player)){
    duck4.x = player.x
    duck4.y = player.y
    duckSound.play()
  }
  if(duck4.isTouching(quackShack)){
    duck4.x = quackShack.x
    duck4.y = quackShack.y
  }
  if(duck4.collide(quackShack)){
    currentAmountDuck = currentAmountDuck + 1
  }

  if(duck5.collide(player)){
    duck5.x = player.x
    duck5.y = player.y
    duckSound.play()
  }
  if(duck5.isTouching(quackShack)){
    duck5.x = quackShack.x
    duck5.y = quackShack.y
  }
  if(duck5.collide(quackShack)){
    currentAmountDuck = currentAmountDuck + 1
  }

  if(duck6.collide(player)){
    duck6.x = player.x
    duck6.y = player.y
    duckSound.play()
  }
  if(duck6.isTouching(quackShack)){
    duck6.x = quackShack.x
    duck6.y = quackShack.y
  }
  if(duck6.collide(quackShack)){
    currentAmountDuck = currentAmountDuck + 1
  }

  //colliding the chicken/chicken coop 
  if(chicken1.collide(player)){
    chicken1.x = player.x
    chicken1.y = player.y
    chickenSound.play()
  }
  if(chicken1.overlap(chickenCoop)){
    chicken1.x = chickenCoop.x
    chicken1.y = chickenCoop.y
  }
  if(chicken1.collide(chickenCoop)){
    currentAmountChicken = currentAmountChicken + 1
  }
  if(chicken2.collide(player)){
    chicken2.x = player.x
    chicken2.y = player.y
    chickenSound.play()
  }
  if(chicken2.isTouching(chickenCoop)){
    chicken2.x = chickenCoop.x
    chicken2.y = chickenCoop.y
    
  }
  if(chicken2.collide(chickenCoop)){
    currentAmountChicken = currentAmountChicken + 1
  }

  if(chicken3.collide(player)){
    chicken3.x = player.x
    chicken3.y = player.y
    chickenSound.play()
  }
  if(chicken3.isTouching(chickenCoop)){
    chicken3.x = chickenCoop.x
    chicken3.y = chickenCoop.y
    
  }
  if(chicken3.collide(chickenCoop)){
    currentAmountChicken = currentAmountChicken + 1
  }

  if(chicken4.collide(player)){
    chicken4.x = player.x
    chicken4.y = player.y
    chickenSound.play()
  }
  if(chicken4.isTouching(chickenCoop)){
    chicken4.x = chickenCoop.x
    chicken4.y = chickenCoop.y
    
  }
  if(chicken4.collide(chickenCoop)){
    currentAmountChicken = currentAmountChicken + 1
  }

  if(chicken5.collide(player)){
    chicken5.x = player.x
    chicken5.y = player.y
    chickenSound.play()
  }
  if(chicken5.isTouching(chickenCoop)){
    chicken5.x = chickenCoop.x
    chicken5.y = chickenCoop.y
    
  }
  if(chicken5.collide(chickenCoop)){
    currentAmountChicken = currentAmountChicken + 1
  }

  if(chicken6.collide(player)){
    chicken6.x = player.x
    chicken6.y = player.y
    chickenSound.play()
  }
  if(chicken6.isTouching(chickenCoop)){
    chicken6.x = chickenCoop.x
    chicken6.y = chickenCoop.y
    
  }
  if(chicken6.collide(chickenCoop)){
    currentAmountChicken = currentAmountChicken + 1
  }
  
  

  drawSprites();
  fill("#FFF16BFF")
  text("cattle pen", 50, 145)
  text("chicken coop", 422, 50)
  text("pig pen", 505, 67)
  text("quack shack", 629, 52)
  text("rabbit hutch", 640, 140)
  text("owl buddys trees", 497,265)
  text(currentAmountChicken, 422, 70)
  text("/", 432, 70)
  text(amountChicken, 437, 70)
  text(currentAmountDuck, 629, 72)
  text("/", 634, 72)
  text(amountDuck, 639, 72)
  text(currentAmountCow, 50, 155)
  text("/", 55, 155)
  text(amountCow, 60, 155)
  text(CurrentAmountRabbit, 640, 150)
  text("/", 645, 150)
  text(amountRabbit, 650, 150)
  text(currentAmountPig, 505, 77)
  text("/", 510, 77)
  text(amountPig, 515, 77)
  }
