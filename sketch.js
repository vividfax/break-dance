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
}

function draw() {

    background(colors.light);

	choices[place].update();
	choices[place].display();
}
