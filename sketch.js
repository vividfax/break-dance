let colors = {
	"white": "#fff",
	"light": "#EEDFA9",
	"mid": "#9995B0",
	"dark": "#625F7B",
	"black": "#212026"
};

let choices = [];

let place = 0;

function setup() {

	createCanvas(windowWidth, windowHeight);
	imageMode(CENTER);
	createBackground();

	for (let i in story.sets) {

		let size = story.sets[i].set.length;

		if (size == 1) {
			choices[i] = new SingleChoice(story.sets[i].set[0]);
		} else if (size == 2) {
			choices[i] = new DoubleChoice(story.sets[i].set[0], story.sets[i].set[1]);
		} else if (size == 3) {
			choices[i] = new TripleChoice(story.sets[i].set[0], story.sets[i].set[1], story.sets[i].set[2]);
		}
	}
}

function draw() {

	updatePixels();

	choices[place].update();
	choices[place].display();
}

function createBackground() {

	background(colors.black);
	image(coffeeShop, width/2, height/2);

	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			set(x, y, get(x, y));
		}
	}
	updatePixels();
}
