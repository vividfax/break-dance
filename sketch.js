let story = {
	numberOfButtons: [
		{
			letterItem: [
				{
					letter: "O",
					description: "Open door",
					fileName: "O.m4a"
				}
			]
		},
		{
			letterItem: [
				{
					letter: "B",
					description: "Browse",
					fileName: "B.m4a"
				}
			]
		},
		{
			letterItem: [
				{
					letter: "F",
					description: "Fiction",
					fileName: "F.m4a"
				},
				{
					letter: "N",
					description: "Non-fiction",
					fileName: "N.m4a"
				}
			]
		},
		{
			letterItem: [
				{
					letter: "D",
					description: "Detective",
					fileName: "D.m4a"
				},
				{
					letter: "R",
					description: "Romance",
					fileName: "R.m4a"
				},
				{
					letter: "L",
					description: "Literature",
					fileName: "L.m4a"
				}
			]
		},
		{
			letterItem: [
				{
					letter: "T",
					description: "Travel",
					fileName: "T.m4a"
				},
				{
					letter: "H",
					description: "History",
					fileName: "H.m4a"
				},
				{
					letter: "P",
					description: "Popular Science",
					fileName: "P.m4a"
				}
			]
		},
		{
			letterItem: [
				{
					letter: "C",
					description: "Cafe",
					fileName: "C.m4a"
				}
			]
		},
		{
			letterItem: [
				{
					letter: "A",
					description: "Americano",
					fileName: "A.m4a"
				},
				{
					letter: "M",
					description: "Mocha",
					fileName: "M.wav"
				},
				{
					letter: "I",
					description: "Iced Latte",
					fileName: "I.wav"
				}
			]
		},
		{
			letterItem: [
				{
					letter: "S",
					description: "Sweet",
					fileName: "S.wav"
				}
			]
		},
		{
			letterItem: [
				{
					letter: "W",
					description: "Walnut Cake",
					fileName: "W.wav"
				},
				{
					letter: "V",
					description: "Victoria Sponge",
					fileName: "V.wav"
				},
				{
					letter: "G",
					description: "Gateaux",
					fileName: "G.wav"
				}
			]
		},
		{
			letterItem: [
				{
					letter: "K",
					description: "Kick back",
					fileName: "K.wav"
				}
			]
		},
		{
			letterItem: [
				{
					letter: "E",
					description: "Exit",
					fileName: "E.wav"
				}
			]
		},
		{
			letterItem: [
				{
					letter: "Y",
					description: "You forgot something?",
					fileName: "Y.wav"
				}
			]
		},
		{
			letterItem: [
				{
					letter: "Z",
					description: "Zup",
					fileName: "Z.wav"
				}
			]
		}
	]
};
let coffeeShop;
let gains = {};
let loop;

let players = [];
function preload() {
	coffeeShop = loadImage("images/coffeeShop.png");
	let accumulator = 0;
	for (let i in story.numberOfButtons) {
		for (let j in story.numberOfButtons[i].letterItem) {
			players[accumulator] = newAudio(
				story.numberOfButtons[i].letterItem[j].fileName
			);
			accumulator++;
		}
	}
}

function newAudio(c) {
	player = new Tone.Player({
		url: "sounds/" + c
	}).toMaster();
	gains[c[0]] = new Tone.Gain(-1);
	player.connect(gains[c[0]]);
	gains[c[0]].toMaster();
	return player;
}
let loopStarted = false;

function keyPressed() {
	for (let i in players) {
		if (loopStarted == false) {
			loop = new Tone.Loop((time) => {
				players[i].start();
			}, "1n").start("+1i");
			loop.interval = 12;
			Tone.Transport.start();
		}
	}
	loopStarted = true;
}
let colors = {
	white: "#fff",
	light: "#EEDFA9",
	mid: "#9995B0",
	dark: "#625F7B",
	black: "#212026"
};

let choices;
let place;

function setup() {
	let accumulator = 0;

	place = 0;
	choices = [];
	createCanvas(windowWidth, windowHeight);
	createBackground();

	for (let i in story.numberOfButtons) {
		let size = story.numberOfButtons[i].letterItem.length;
		if (size == 1) {
			choices[i] = new SingleChoice(story.numberOfButtons[i].letterItem[0]);
			accumulator++;
		} else if (size == 2) {
			choices[i] = new DoubleChoice(
				story.numberOfButtons[i].letterItem[0],
				story.numberOfButtons[i].letterItem[1]
			);
			accumulator += 2;
		} else if (size == 3) {
			choices[i] = new TripleChoice(
				story.numberOfButtons[i].letterItem[0],
				story.numberOfButtons[i].letterItem[1],
				story.numberOfButtons[i].letterItem[2]);
			accumulator += 3;
		}
	}
}

function draw() {
	updatePixels();

	choices[place].update();
	choices[place].display();
}

function createBackground() {
	imageMode(CENTER);
	background(colors.black);
	image(coffeeShop, width / 2, height / 2);

	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			set(x, y, get(x, y));
		}
	}
	updatePixels();
}
