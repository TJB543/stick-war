class character_1 {
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

class character_2 {
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
  MODE = 0;
  do_once_1 = false
  do_once_2 = false
  p1 = new character_1();
  p2 = new character_2();
}

function collision() {
  dx = dist(p1.x, p1.y-20, p2.x, p2.y-20);
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
  if (dx < 10) {
    if(p1.x < p2.x){
      p1.x -= p1.move
      p2.x += p2.move
    }else{
      p1.x += p1.move
      p2.x -= p2.move
    }
    }
}

function draw() {
  background(220);
  collision()
  p2.update();
  p1.update();
  p2.movement();
  p1.movement();
}
