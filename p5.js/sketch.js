const snowflakes = 400;
const height= 400;
const width = 600;
let y = -1200;
function setup () {
  var myCanvas = createCanvas(width, height)
  myCanvas.parent('p5_sketch')
  frameRate(10)
}

function draw () {
   background('black')
   fill(255);
   noStroke(); 


   for (let s = 0; s < snowflakes; s++) {
     circle(random(width), y + random(1200), random(1, 6)) 
    }

  y += 20;

     if (y > 0) {
        y = -600;
     }

}

draw()