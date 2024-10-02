var t = 0;
var speed = 0.000001;
var step = 0.005;
var size = 32;

function setup() {
	createCanvas(windowWidth, windowHeight);
	strokeWeight(2);
	noLoop();
}

function draw() {
	background(30, 30, 32);
	for (x = 0; x < width; x += size)
		for (y = 0; y < height; y += size) {
			var n = noise(x * step, y * step, t);
	stroke(80, 80, 82);
			if (n > 0.45 && n < 0.55)
				stroke (114, 114, 116);
			if (n > 0.48 && n < 0.52)
				stroke (188, 26, 58);
			if (n < 0.5) {
				line(x, y, x + size, y + size);
			} else {
				line(x, y + size, x + size, y);
			}
			t += speed;
		}
}
