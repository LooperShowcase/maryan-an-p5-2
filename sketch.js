function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(400, 400);
  angleMode(DEGREES);
}
let r = 100;
let g = 30;
let b = 70;
function draw() {
  // The same as doing: background(220); or --> background(220,220,220);
  background("#F0F0F0");
  translate(width / 2, height / 2);
  rotate(-90);

  let sec = second();
  let min = minute();
  let hr = hour();

  if (frameCount % 180 == 0) {
    r = random(0, 256);
    g = random(0, 256);
    b = random(0, 256);
  }
  noFill();
  stroke(r, g, b);
  //264653;

  strokeWeight(5);
  let seca = map(sec, 0, 60, 0, 360);
  //arc(0, 0, 300, 300, 0, seca);

  push();
  rotate(seca);
  line(0, 0, 150, 0);
  pop();

  stroke(b, g, r);
  //("#2a9d8f");
  let mina = map(min, 0, 60, 0, 360) + map(sec, 0, 60, 0, 6);
  //arc(0, 0, 250, 250, 0, mina);

  push();
  rotate(mina);
  line(0, 0, 125, 0);
  pop();

  push();
  stroke(g, r, b);
  // ("#e9c46a");
  let hra = map(hr % 12, 0, 12, 0, 360) + map(min, 0, 60, 0, 10);
  //arc(0, 0, 200, 200, 0, hra);

  rotate(hra);
  line(0, 0, 100, 0);
  pop();

  ellipse(0, 0, 10, 10);
  noFill();

  push();
  textSize(32);
  rotate(90);
  fill(r, g, b);
  strokeWeight(0);
  text("12", 0, -170);
  pop();

  push();
  textSize(32);
  rotate(90);
  fill(r, g, b);
  strokeWeight(0);
  text("3", 170, 0);
  pop();

  push();
  textSize(32);
  rotate(90);
  fill(r, g, b);
  strokeWeight(0);
  text("6", 0, 180);
  pop();

  push();
  textSize(32);
  rotate(90);
  fill(r, g, b);
  strokeWeight(0);
  text("9", -180, 0);
  pop();
}
