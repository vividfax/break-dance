let colors = {
	"white": "#fff",
	"light": "#ccc",
	"mid": "#aaa",
	"dark": "#888",
	"black": "#333"
};

let story;
let choices = [];

let place = 0;

let K, T;

function preload() {

	story = loadJSON("story.json");

	K = new Audio("sounds/K.wav");
	K.loop = true;
	K.volume = 0;
	T = new Audio("sounds/T.wav");
	T.loop = true;
	T.volume = 0;
}

function setup() {

    createCanvas(windowWidth, windowHeight);

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

	K.play();
	T.play();
}

function draw() {

	// if (double.lean > 0) {
	// 	K.volume = double.lean;
	// 	T.volume = 0;
	// } else {
	// 	T.volume = double.lean * -1;
	// 	K.volume = 0;
	// }
    background(colors.light);

	choices[place].update();
	choices[place].display();
}
