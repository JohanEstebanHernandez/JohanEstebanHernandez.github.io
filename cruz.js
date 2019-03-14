class Cruz {

  constructor(posX, posY) {
    this.xpos=posX;
    this.ypos=posY;
    this.speed = 0.1;
    this.rot = 0;
  }

  display() {
    push();
    translate(this.xpos, this.ypos);
    fill(random(5), random(103), random(250));
    rotate(this.rot);
    rectMode(CENTER);
    rect(0, 0, 25, 100);
    rect(0, 0, 100, 25);
    pop();
    this.rot = this.rot + this.speed;
  }

  move() {
    //if (mouseIsPressed == true) {
      //this.speed = 2;
    //}
    //if (mouseIsPressed == false) {
      this.speed = 50;
    //}
    this.xpos = this.xpos + this.speed;
    if (random(this.xpos) >= width) {
      this.xpos = -25;
    }
    this.ypos = this.ypos + this.speed;
    if (random(this.ypos) >= height) {
      this.ypos = -25;
    }
  }
}