var cnv;

let x = 1;
let y = 1;
let easing = 0.10;
// var contents = "";

function setup() {
cnv = createCanvas(windowWidth, windowHeight); // create canvas of 300,300 and store it in cnv
cnv.parent("#canvasParent"); // put cnv inside of #canvasParent

  r = -255;
  g = 0;
  b = 0;
  night = -255;
  st = 0;

  input = createInput('type anything here...');
  input.position(25, 25);
  input.addClass('entertext');

  colorPicker = createColorPicker('#6471FF');
  colorPicker.position(25,100);
  colorPicker.addClass('controls');

  slider = createSlider(0, 250, 50);
  slider.position(25, 160);
  slider.style('width', '80px');
  slider.addClass('Slider')

  checkbox = createCheckbox(' Light Mode', false);
  checkbox.changed(lightmode);
  checkbox.position(25,200)
  checkbox.addClass('controls');

  checkbox = createCheckbox(' White Border', false);
  checkbox.changed(whiteborder);
  checkbox.position(25,250)
  checkbox.addClass('controls');

  sel = createSelect();
  sel.position(25, 300);
  sel.option('orpheuspro');
  sel.option('p22-mackinac-pro');
  sel.option('Helvetica');
  sel.option('Times New Roman');
  sel.selected('Helvetica');
  sel.changed(mySelectEvent);
  sel.addClass('controls');


  button = createButton('clear canvas');
  button.position(25, 350);
  button.mousePressed(clearCnv);
  button.addClass('controlsclear');


}

function mySelectEvent() {
    let item = sel.value();
  textFont(item);
}

function clearCnv() {
  clear();
}

function lightmode() {
  if (this.checked()) {
cnv.addClass('bodycolor');
  } else {
    cnv.removeClass('bodycolor');
  }
}

function whiteborder() {
  if (this.checked()) {
st = 255;
  } else {
st = 0
  }
}
// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

function touchMoved(){
   let val = slider.value();
  textColor = colorPicker.color();
  fill(textColor);
  textSize(slider.value());
  textAlign(LEFT, TOP);
  text(input.value(),mouseX,mouseY); // Text wraps within text box
}

function draw() {

background(night,0);
strokeWeight(1);
stroke(st);

}
// When the user clicks the mouse
function mousePressed() {

}


function on() {
  document.getElementById("overlay").style.clipPath = "circle(99.9% at 26% 47%)";

}
function off() {
  document.getElementById("overlay").style.clipPath = "circle(0% at 97% 5%)";
              console.log('this does not work in safari rip');
              // document.getElementById("overlay").style.display = "none";
}
