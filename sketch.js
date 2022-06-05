let story = {
	"sets": [
			{
					"set": [
							{
									"letter": "O",
									"description": "Open door"
							}
					]
			},
			{
					"set": [
							{
									"letter": "B",
									"description": "Browse"
							}
					]
			},
			{
					"set": [
							{
									"letter": "F",
									"description": "Fiction"
							},
							{
									"letter": "N",
									"description": "Non-fiction"
							}
					]
			},
			{
					"set": [
							{
									"letter": "D",
									"description": "Detective"
							},
							{
									"letter": "R",
									"description": "Romance"
							},
							{
									"letter": "L",
									"description": "Literature"
							}
					]
			},
			{
					"set": [
							{
									"letter": "T",
									"description": "Travel"
							},
							{
									"letter": "H",
									"description": "History"
							},
							{
									"letter": "P",
									"description": "Popular Science"
							}
					]
			},
			{
					"set": [
							{
									"letter": "C",
									"description": "Cafe"
							}
					]
			},
			{
					"set": [
							{
									"letter": "A",
									"description": "Americano"
							},
							{
									"letter": "M",
									"description": "Mocha"
							},
							{
									"letter": "I",
									"description": "Iced Latte"
							}
					]
			},
			{
					"set": [
							{
									"letter": "S",
									"description": "Sweet"
							}
					]
			},
			{
					"set": [
							{
									"letter": "W",
									"description": "Walnut Cake"
							},
							{
									"letter": "V",
									"description": "Victoria Sponge"
							},
							{
									"letter": "G",
									"description": "Gateaux"
							}
					]
			},
			{
					"set": [
							{
									"letter": "K",
									"description": "Kick back"
							}
					]
			},
			{
					"set": [
							{
									"letter": "E",
									"description": "Exit"
							}
					]
			},
			{
					"set": [
							{
									"letter": "Y",
									"description": "You forgot something?"
							}
					]
			},
			{
					"set": [
							{
									"letter": "Z",
									"description": "Zup"
							}
					]
			}
	]
}
;

let coffeeShop;

let A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, X, Y, Z;
let gains = {};

let loop;

function preload() {
	coffeeShop = loadImage("images/coffeeShop.png");
	O = newAudio("O.m4a");
	B = newAudio("B.m4a");
}
function loadAudio() {

	// story = loadJSON("story.json");

    A = newAudio("A.m4a");
    C = newAudio("C.m4a");
    D = newAudio("D.m4a");
    E = newAudio("E.wav");
    F = newAudio("F.m4a");
    G = newAudio("G.wav");
    I = newAudio("I.wav");
    K = newAudio("K.wav");
    L = newAudio("L.m4a");
    M = newAudio("M.wav");
    N = newAudio("N.m4a");
    R = newAudio("R.m4a");
    S = newAudio("S.wav");
    V = newAudio("V.wav");
    W = newAudio("W.wav");
    Y = newAudio("Y.wav");
    Z = newAudio("Z.wav");
	}

function newAudio(c) {

    let player;

    for (let i = 0; i < 26; i++) {
        player = new Tone.Player({
            url: "sounds/" + c,
        }).toMaster();
    };
    gains[c[0]] = new Tone.Gain(-1);
    player.connect(gains[c[0]]);
    gains[c[0]].toMaster();
    loop = new Tone.Loop((time) => {
        player.start();
    }, "1n").start("+1i");
    loop.interval = 12;
    Tone.Buffer.on('load', () => {
        Tone.Transport.start();
    });
    return player;
}

let colors = {
	"white": "#fff",
	"light": "#EEDFA9",
	"mid": "#9995B0",
	"dark": "#625F7B",
	"black": "#212026"
};

let choices;
let place;
function setup() {
	place = 0;
	choices = [];
	createCanvas(windowWidth, windowHeight);
	createBackground();
	loadAudio();

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
	imageMode(CENTER);
	background(colors.black);
	image(coffeeShop, width/2, height/2);
	
	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			set(x, y, get(x, y));
		}
	}
	updatePixels();
}
