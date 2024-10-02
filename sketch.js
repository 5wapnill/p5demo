function setup() {
    createCanvas(400, 400); // Creates a 400x400 canvas
    background(220);        // Sets the background color to light gray
  }
  
  function draw() {
    background(220);        // Clear the canvas each frame
    fill(0, 102, 153);      // Set the circle color to dark blue
    ellipse(mouseX, mouseY, 50, 50);  // Draw a circle that follows the mouse
  }
  