class character_1 {
  constructor(){
    this.x = width/16;
    this.y = -50;
    this.g = 1;
    this.v = 0;
    this.grounded = true;
  }
  update(){
    if (this.y < height-30) {
      this.y += this.g
      this.g += this.v
      this.v += 0.01
      this.grounded = false
    } else {
      this.y = height-30
      this.g = 1;
      this.v = 0;
      this.grounded = true
    }
    fill(0);
    stroke(0);
    rect(this.x,this.y,10,30)
  }
  movement(){
    if(keyIsDown(68)){
        this.x += 1;
  }
    if(keyIsDown(65)){
      this.x -= 1;   
    }
    if(keyIsDown(87) || this.grounded == false){
      this.y -= 5;
    }
  }
}

class character_2 {
  constructor(){
    this.x = (width/1.125);
    this.y = -50;
    this.g = 1;
    this.v = 0;
    this.grounded = true
  }
  update(){
    if (this.y < height-30) {
      this.y += this.g
      this.g += this.v
      this.v += 0.01
      this.grounded = false
    } else {
      this.y = height-30
      this.g = 1;
      this.v = 0;
      this.grounded = true
    }
    fill(255);
    stroke(255);
    rect(this.x,this.y,10,30)
  }
  movement(){
    if(keyIsDown(74)){
      this.x -= 1;
    }
    if(keyIsDown(76)){
      this.x += 1;
    }
    if(keyIsDown(73) || this.grounded == false){
      this.y -= 5;
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  p1 = new character_1();
  p2 = new character_2();
}

function collision() {
  dx = p1.x-p2.x;
  dy = p1.y-p2.y;
  if(dx>-10&&dy<30&&dx<10){
    p1.x -= 1;
    p2.x += 1;
    rect(10,10,10,10);
  } else if(dy<30&&dx<10){
    rect(10,20,10,10)
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
