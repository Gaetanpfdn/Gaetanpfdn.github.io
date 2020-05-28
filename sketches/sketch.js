let img;
let friedolin;
let sentence = 'MAKE\nYOUR\nPATH';

function preload() {
  myFont = loadFont('assets/BentonSansF-Bold.otf');
  bottom = loadImage('assets/images/Bottom-black.png');

}

function setup() {

  const c = createCanvas(1170, 1654);
  maxDiameter = 100;
  pulse = 0;
  pixelDensity(1);
  background('rgb(255,255,255)');
  filter(BLUR, 0);
  c.drop(gotFile);
}

function draw() {

  //Text
  textSize(300);
  textFont(myFont);
  textStyle(BOLD);
  textLeading(300);
  text(sentence, 150, 500);
  fill('rgb(0,0,0)');
  text(sentence, 150, 500);
  fill('rgb(0,0,0)');
  fill('rgb(255,255,255)');
  stroke('rgb(0,0,0)');
  strokeWeight(1);
  smooth();

  if(mouseIsPressed){
  colorMode(HSB);

    var diam = 100 + sin(pulse) * maxDiameter;
    pulse += .05;
    fill((3*frameCount) % 360, 100, 100);
    ellipse(mouseX, mouseY, diam, diam);
  }


}

function gotFile(file) {
  // If it's an image file
  if (file.type === 'image'){
// Create an image DOM element but don't show it
const img = createImg(file.data).hide();
// Draw the image onto the canvas
image(img, 0, 0, width, 1820);
} else {
console.log('Not an image file!');
}
}

function keyPressed() {
  if (key == "a") {
    image(bottom, 0, 1182);
    save('export.png');
  }
}
