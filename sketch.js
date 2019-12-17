function titleScreen() {
  if (TITLE == true) {
    if (MODE == 0) {
      PvP.show();
      coop.show();
      background(220);
      textAlign(CENTER);
      textSize(35);
      text("STICK WAR", width / 2, height / 2 - 50);
      coop.position(width / 2 - 90, height / 2 + 20);
      PvP.position(width / 2 + 50, height / 2 + 20);
      coop.mousePressed(cooperativeMode);
      PvP.mousePressed(pvpMode);
    } else {
      home.show();
      home.mousePressed(HOME);
    }
  }
}

function cooperativeMode() {
  PvP.hide();
  coop.hide();
  MODE = 1;
}

function pvpMode() {
  PvP.hide();
  coop.hide();
  MODE = 2;
}

function HOME() {
  home.hide();
  MODE = 0;
  p1.x = width / 16;
  p1.y = -50;
  p1.grounded = false;
  p2.x = width / 1.125;
  p2.y = -50;
  p2.grounded = false;
}

class character_1_pvp {
  constructor() {
    this.x = width / 16;
    this.y = -50;
    this.move = 1;
    this.g = 1;
    this.v = 0;
    this.lenghth = 0;
    this.grounded = false;
  }
  update() {
    if (this.grounded == false) {
      this.y += this.g
      this.g += this.v
      this.v += 0.01
      this.grounded = false
    }
    if (this.y >= height - 30) {
      this.y = height - 30
      this.g = 1;
      this.v = 0;
      this.grounded = true
    }
    fill(0);
    stroke(0);
    rect(this.x, this.y, 10, 30)
  }
  movement() {
    if (keyIsDown(68)) {
      this.x += this.move;
    }
    if (keyIsDown(65)) {
      this.x -= this.move;
    }
    if (keyIsDown(87) || this.grounded == false) {
      this.grounded = false
      this.y -= this.move * 5;
    }
    if (MODE == 2) {
      fill(0);
      stroke(0);
      if (keyIsDown(83)) {
        rect(this.x + 8, this.y + 10, this.lenghth, 10);
        if (this.lenghth < 20) {
          this.lenghth += 5;
        }
      } else {
        rect(this.x + 8, this.y + 10, this.lenghth, 10);
        if (this.lenghth >= 0) {
          this.lenghth -= 5;
        }
      }
    }
  }
}

class character_2_pvp {
  constructor() {
    this.x = (width / 1.125);
    this.y = -50;
    this.g = 1;
    this.move = 1;
    this.v = 0;
    this.lenghth = 0;
    this.grounded = false
  }
  update() {
    if (this.grounded == false) {
      this.y += this.g
      this.g += this.v
      this.v += 0.01
      this.grounded = false
    }
    if (this.y >= height - 30) {
      this.y = height - 30
      this.g = 1;
      this.v = 0;
      this.grounded = true
    }
    fill(255);
    stroke(255);
    rect(this.x, this.y, 10, 30)
  }
  movement() {
    if (keyIsDown(74)) {
      this.x -= this.move;
    } else {}
    if (keyIsDown(76)) {
      this.x += this.move;
    } else {}
    if (keyIsDown(73) || this.grounded == false) {
      this.grounded = false
      this.y -= this.move * 5;
    }
    if (MODE == 2) {
      fill(255)
      stroke(255)
      if (keyIsDown(75)) {
        rect(this.x + 4, this.y + 10, this.lenghth, 10)
        if (this.lenghth > -20) {
          this.lenghth -= 5;
        }
      } else {
        rect(this.x + 4, this.y + 10, this.lenghth, 10);
        if (this.lenghth <= 0) {
          this.lenghth += 5;
        }
      }
    }
  }
}

class character_1_co {
  constructor() {
    this.x = width / 16;
    this.y = -50;
    this.move = 1;
    this.g = 1;
    this.v = 0;
    this.lenghth = 0;
    this.grounded = false;
    this.ground = height-30
  }
  update() {
    if (this.grounded == false) {
      this.y += this.g
      this.g += this.v
      this.v += 0.01
      this.grounded = false
      this.jumping = false
    } else{}
    if(this.y >= this.ground){
      this.y = this.ground;
      this.g = 1;
      this.v = 0;
      this.grounded = true
      this.jumping = true
    }
    fill(0);
    stroke(0);
    rect(this.x, this.y, 10, 30)
  }
  movement() {
    if (keyIsDown(68)) {
      this.x += this.move;
    }
    if (keyIsDown(65)) {
      this.x -= this.move;
    }
    if (keyIsDown(87) || this.jumping == false) {
      this.y -= this.move*5;
      this.grounded = false
      this.jumping = false
    }
    // if(keyIsDown(83)){
    //   rect(this.x+5,this.y+10,this.lenghth,10)
    //   if(this.lenghth < 50){
    //     this.lenghth += 5;
    //   }
    // }else{
    //   rect(this.x+5,this.y+10,this.lenghth,10);
    //   if(this.lenghth >= 0){
    //     this.lenghth -= 5;
    //   }
    // }
  }
}

class character_2_co {
  constructor() {
    this.x = (width / 1.125);
    this.y = -50;
    this.g = 1;
    this.move = 1;
    this.v = 0;
    this.grounded = false
    this.ground = height - 30
  }
  update() {
    if (this.grounded == false) {
      this.y += this.g
      this.g += this.v
      this.v += 0.01
      this.grounded = false
      this.jumping = false
    } 
    if(this.y>=this.ground){
      this.y = this.ground
      this.g = 1;
      this.v = 0;
      this.grounded = true
      this.jumping = true
    }
    fill(255);
    stroke(255);
    rect(this.x, this.y, 10, 30)
  }
  movement() {
    if (keyIsDown(74)) {
      this.x -= this.move;
    } else {}
    if (keyIsDown(76)) {
      this.x += this.move;
    } else {}
    if (keyIsDown(73) || this.jumping == false) {
      this.jumping = false
      this.grounded = false
      this.y -= this.move*5;
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  TITLE = false;
  MODE = 0;
  coop = createButton('Co-op')
  PvP = createButton('PvP')
  home = createButton('Home')
  home.position(0, 0)
  home.hide();
  coop.hide();
  PvP.hide();
  do_once_1 = false
  do_once_2 = false
  if(MODE = 1){
  p1 = new character_1_co();
  p2 = new character_2_co();
  }
  if(MODE == 2){
    p1 = new character_1_pvp();
    p2 = new character_2_pvp(); 
  }
}

function collision() {
  dx = dist(p1.x, p1.y-20, p2.x, p2.y-20);
  
  //P1 jumping on P2
   if(p1.y < p2.y-30 && p1.x > p2.x-10 && p1.x < p2.x+10){
     p1.ground = p2.y-30
     p1.jumping = false
     p1.grounded = false
     do_once_1 = false
  } else{
    if(do_once_1 == false){
      do_once_1 = true
      p1.ground = height - 30;
    }
    p1.grounded = false
  }
  
  //P2 jumping on P1
  if(p2.y < p1.y-30 && p2.x > p1.x-10 && p2.x < p1.x+10){
     p2.ground = p1.y-30
     p2.jumping = false
     p2.grounded = false
     do_once_2 = false
  } else{
    if(do_once_2 == false){
      do_once_2 = true
      p2.ground = height - 30;
    }
    p2.grounded = false
  }
  
  //Character collision
  if (dx < 10) {
    if(p1.x < p2.x){
      p1.x -= p1.move
      p2.x += p2.move
    }else{
      p1.x += p1.move
      p2.x -= p2.move
    }
    }
  
  //Punch collision(PvP mode only)
  if(MODE == 2) {
    pnch1 = dist(p1.x + p1.lenghth, p1.y - 15, p2.x, p2.y - 15);
    pnch2 = dist(p2.x + p2.lenghth, p2.y - 15, p1.x, p1.y - 15);
    pnchC = dist(p2.x + p2.lenghth, p2.y - 15, p1.x + p1.lenghth, p1.y - 15);
        if (p1.x < p2.x) {
      if (pnch1 <= 5) {
        p2.x += 25;
      }
      if (pnch2 <= 5) {
        p1.x -= 25;
      }
      if (pnchC <= 5) {
        p1.x -= 2;
        p2.x += 2;
      }
  }
}

function draw() {
  background(220);
  if(p1.grounded == true && p2.grounded == true) {
    TITLE = true;
  }else{
    TITLE = false;
  }
  titleScreen();
  collision()
  p2.update();
  p1.update();
  if(MODE != 0){
  p2.movement();
  p1.movement();
  }
}
