function titleScreen() {
  if (TITLE == true) {
    if (MODE == 0) {
      hub.show();
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
      hub.hide();
      home.show();
      home.mousePressed(HOME);
    }
  }
}

function cooperativeMode() {
  p1 = new character_1_co();
  p2 = new character_2_co();
  //co-op mode!!!!!!!
  PvP.hide();
  coop.hide();
  MODE = 1;
}

function pvpMode() {
  p1 = new character_1_pvp();
  p2 = new character_2_pvp();
  p1.health = 100;
  p2.health = 100;
  PvP.hide();
  coop.hide();
  MODE = 2;
}

function HOME() {
  if(MODE == 2) {
    p1.health = 100;
    p2.health = 100;
  }
  home.hide();
  MODE = 0;
  p1.x = width / 16;
  p1.y = -50;
  p1.v = 0;
  p1.grounded = false;
  p2.x = width / 1.125;
  p2.y = -50;
  p2.v = 0;
  p2.grounded = false;
  p1 = new character_1_co();
  p2 = new character_2_co();
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
    this.ground = height - 30
  }
  update() {
    if (this.grounded == false) {
      this.y += this.g
      this.g += this.v
      this.v += 0.01
      this.grounded = false
      this.jumping = false
    } else {}
    if (this.y >= this.ground) {
      this.y = this.ground;
      this.g = 1;
      this.v = 0;
      this.grounded = true
      this.jumping = true
    }
    stroke(0);
    fill(0);
    rect(this.x - 10, this.y - 20 , 25, 5);
    if (this.health <= 20) {
      fill(255, 0, 0);
    } else {
      fill(0, 255, 0);
    }
    rect(this.x - 10, this.y - 20 , this.health / 4, 5);
    fill(0);
    image(p2_image, this.x, this.y, 10, 30)
    if (this.health <= 0) {
      p2Win = true;
    } else {
      p2Win = false;
    }
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
    this.grounded = false;
    this.health = 100;
    this.ground = height - 30;
    this.rotated = true;
  }
    update() {
    if (this.grounded == false) {
      this.y += this.g
      this.g += this.v
      this.v += 0.01
      this.grounded = false
      this.jumping = false
    }
    if (this.y >= this.ground) {
      this.y = this.ground
      this.g = 1;
      this.v = 0;
      this.grounded = true
      this.jumping = true
    }
    stroke(255);
    fill(255);
    rect(this.x - 10, this.y - 20 , 25, 5);
    if (this.health <= 20) {
      fill(255, 0, 0);
    } else {
      fill(0, 255, 0);
    }
    rect(this.x - 10, this.y - 20 , this.health / 4, 5);
    fill(255);
    image(p1_image, this.x, this.y, 10, 30)
    if (this.health <= 0) {
      p1Win = true;
    } else {
      p1Win = false;
    }
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
      this.y -= this.move * 5;
    }
    if (MODE == 2) {
      fill(255)
      stroke(255)
      if (keyIsDown(75)) {
        if(this.arm == false){
          if(this.rotated){
        rotate(PI/2)
            this.rotated = false;
          }
        }
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

function PvP_winner() {
  if (MODE == 2) {
    if (p1Win == true) {
      background(0);
      textAlign(CENTER);
      textSize(width / 20);
      fill(255)
      text("PLAYER 1 WINS", width / 2, height / 2 - 30);
      home.position(width / 2, height / 2 + 50);
    } else if (p2Win == true) {
      background(255);
      textAlign(CENTER);
      textSize(width / 20);
      fill(0);
      text("PLAYER 2 WINS", width / 2, height / 2 - 30);
      home.position(width / 2, height / 2 + 50);
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
    this.ground = height - 30
  }
  update() {
    if (this.grounded == false) {
      this.y += this.g
      this.g += this.v
      this.v += 0.01
      this.grounded = false
      this.jumping = false
    } else {}
    if (this.y >= this.ground) {
      this.y = this.ground;
      this.g = 1;
      this.v = 0;
      this.grounded = true
      this.jumping = true
    }
    fill(0);
    stroke(0);
    image(p2_image, this.x, this.y, 10, 30)
  }
  movement() {
    if (keyIsDown(68)) {
      this.x += this.move;
    }
    if (keyIsDown(65)) {
      this.x -= this.move;
    }
    if (keyIsDown(87) || this.jumping == false) {
      this.y -= this.move * 5;
      this.grounded = false
      this.jumping = false
    }
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
    if (this.y >= this.ground) {
      this.y = this.ground
      this.g = 1;
      this.v = 0;
      this.grounded = true
      this.jumping = true
    }
    fill(255);
    stroke(255);
    image(p1_image, this.x, this.y, 10, 30)
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
      this.y -= this.move * 5;
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  hub = createImg("Hub.png")
  p1_image = loadImage('Character 1!!!.png');
  p2_image = loadImage('character-2!!!.png');
  TITLE = false;
  p1Win = false;
  p2Win = false;
  MODE = 0;
  coop = createButton('Co-op');
  PvP = createButton('PvP');
  home = createButton('Home');
  home.position(0, 0);
  home.hide();
  coop.hide();
  PvP.hide();
  do_once_1 = false;
  do_once_2 = false;
  p1 = new character_1_co();
  p2 = new character_2_co();
}

function collision() {
  dxl = dist(p1.x, p1.y - 20, p2.x, p2.y - 20);
  dxm = dist(p1.x, p1.y - 10, p2.x, p2.y - 10);
  dxh = dist(p1.x, p1.y, p2.x, p2.y);

  //P1 jumping on P2
  if (p1.y < p2.y - 30 && p1.x > p2.x - 10 && p1.x < p2.x + 10) {
    p1.ground = p2.y - 30
    p1.jumping = false
    p1.grounded = false
    do_once_1 = false
  } else {
    if (do_once_1 == false) {
      do_once_1 = true
      p1.ground = height - 30;
    }
    p1.grounded = false
  }

  //P2 jumping on P1
  if (p2.y < p1.y - 30 && p2.x > p1.x - 10 && p2.x < p1.x + 10) {
    p2.ground = p1.y - 30
    p2.jumping = false
    p2.grounded = false
    do_once_2 = false
  } else {
    if (do_once_2 == false) {
      do_once_2 = true
      p2.ground = height - 30;
    }
    p2.grounded = false
  }

  //Character collision
  if (dxl < 10 || dxm < 10 || dxh < 10) {
    if (p1.x < p2.x) {
      p1.x -= p1.move
      p2.x += p2.move
    } else {
      p1.x += p1.move
      p2.x -= p2.move
    }
  }

  //Punch collision(PvP mode only)
  if (MODE == 2) {
    pnch1 = dist(p1.x + p1.lenghth, p1.y - 15, p2.x, p2.y - 15);
    pnch2 = dist(p2.x + p2.lenghth, p2.y - 15, p1.x, p1.y - 15);
    pnchC = dist(p2.x + p2.lenghth, p2.y - 15, p1.x + p1.lenghth, p1.y - 15);
    if (p1.x < p2.x) {
      if (pnch1 <= 5) {
        p2.x += 25;
        p2.health -= 10;
      }
      if (pnch2 <= 5) {
        p1.x -= 25;
        p1.health -=10;
      }
      if (pnchC <= 5) {
        p1.x -= 2;
        p2.x += 2;
      }
    }
  }
}

function draw() {
  p1.x = constrain(p1.x,0,width-30);
  p2.x = constrain(p2.x,0,width-10);
  if(p1.x < p2.x){
     p1.arm = true
    p2.arm = true
     }else{
     p1.arm = false;
       p2.arm = false
     }
  background(220);
  if (p1.grounded == true && p2.grounded == true) {
    TITLE = true;
  } else {
    TITLE = false;
  }
  titleScreen();
  collision();
  p2.update();
  p1.update();
  if (MODE != 0) {
    p2.movement();
    p1.movement();
  }
  PvP_winner();
}
