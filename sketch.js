let story = {
	numberOfButtons: [
		{
			letterItem: [
				{
					letter: "O",
					description: "Open door",
					fileName: "O.m4a"
				},
			],
		},
		{
			letterItem: [
				{
					letter: "B",
					description: "Browse",
					fileName: "B.m4a"
				},
			],
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
				},
			],
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
				},
			],
		},
		{
			letterItem: [
				{
					letter: "T",
					description: "Travel",
					fileName: "B.m4a"
				},
				{
					letter: "H",
					description: "History",
					fileName: "B.m4a"
				},
				{
					letter: "P",
					description: "Popular Science",
					fileName: "B.m4a"
				},
			],
		},
		{
			letterItem: [
				{
					letter: "C",
					description: "Cafe",
					fileName: "C.m4a"
				},
			],
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
					fileName: "M.m4a"
				},
				{
					letter: "I",
					description: "Iced Latte",
					fileName: "I.wav"
				},
			],
		},
		{
			letterItem: [
				{
					letter: "S",
					description: "Sweet",
					fileName: "S.wav"
				},
			],
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
				},
			],
		},
		{
			letterItem: [
				{
					letter: "K",
					description: "Kick back",
					fileName: "K.wav"
				},
			],
		},
		{
			letterItem: [
				{
					letter: "E",
					description: "Exit",
					fileName: "E.wav"
				},
			],
		},
		{
			letterItem: [
				{
					letter: "Y",
					description: "You forgot something?",
					fileName: "Y.wav"
				},
			],
		},
		{
			letterItem: [
				{
					letter: "Z",
					description: "Zup",
					fileName: "Z.wav"
				},
			],
		},
	],
};
let coffeeShop;
let gains = {};
let loop;

function loadAudio() {

}

function preload() {
	coffeeShop = loadImage("images/coffeeShop.png");
	for(let i in story.numberOfButtons){
		for(let j in story.numberOfButtons[i].letterItem) {
			newAudio(story.numberOfButtons[i].letterItem[j].fileName);
		}
	}	
}

function newAudio(c) {
	let player;
	player = new Tone.Player({
		url: "sounds/" + c,
	}).toMaster();
	console.log(c);
	gains[c[0]] = new Tone.Gain(-1);
	player.connect(gains[c[0]]);

	gains[c[0]].toMaster();
	loop = new Tone.Loop((time) => {
		player.start();
	}, "1n").start("+1i");
	
	loop.interval = 12;
	
	Tone.Buffer.on("load", () => {
		Tone.Transport.start();
	});
	
	return player;
}

let colors = {
	white: "#fff",
	light: "#EEDFA9",
	mid: "#9995B0",
	dark: "#625F7B",
	black: "#212026",
};

let choices;
let place;
function setup() {
	for(let i in story.numberOfButtons){
		for(let j in story.numberOfButtons[i].letterItem) {
			console.log(story.numberOfButtons[i].letterItem[j].fileName);
		}
	}	

	place = 0;
	choices = [];
	createCanvas(windowWidth, windowHeight);
	createBackground();
	// loadAudio();

	for (let i in story.numberOfButtons) {
		let size = story.numberOfButtons[i].letterItem.length;
		if (size == 1) {
			choices[i] = new SingleChoice(story.numberOfButtons[i].letterItem[0], newAudio);
		} else if (size == 2) {
			choices[i] = new DoubleChoice(
				story.numberOfButtons[i].letterItem[0],
				story.numberOfButtons[i].letterItem[1],
				newAudio
			);
		} else if (size == 3) {
			choices[i] = new TripleChoice(
				story.numberOfButtons[i].letterItem[0],
				story.numberOfButtons[i].letterItem[1],
				story.numberOfButtons[i].letterItem[2],
				newAudio
			);
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
