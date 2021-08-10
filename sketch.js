let colors = {
	"white": "#fff",
	"light": "#ccc",
	"mid": "#aaa",
	"dark": "#888",
	"black": "#333"
};

let singleJson = [
	{
		"letter": "O",
		"description": "Open door"
	}
];
let single;

let doubleJson = [
	{
		"letter": "F",
		"description": "Fiction"
	},
	{
		"letter": "N",
		"description": "Non-fiction"
	}
];
let double;

let tripleJson = [
	{
		"letter": "L",
		"description": "Literature"
	},
	{
		"letter": "R",
		"description": "Romance"
	},
	{
		"letter": "D",
		"description": "Detective"
	}
];
let triple;

let K, T;

function preload() {

	K = new Audio("sounds/K.wav");
	K.loop = true;
	K.volume = 0;
	T = new Audio("sounds/T.wav");
	T.loop = true;
	T.volume = 0;
}

function setup() {

    createCanvas(windowWidth, windowHeight);

	single = new SingleChoice(singleJson[0]);
	double = new DoubleChoice(doubleJson[0], doubleJson[1]);
	triple = new TripleChoice(tripleJson[0], tripleJson[1], tripleJson[2]);

	K.play();
	T.play();
}

function draw() {

	console.log(double.lean);
	if (double.lean > 0) {
		K.volume = double.lean;
		T.volume = 0;
	} else {
		T.volume = double.lean * -1;
		K.volume = 0;
	}

	double.update();
	// triple.update();

    background(colors.light);

	double.display();
	// triple.display();
}
