let story;
let buttons = [];

// let qwerty = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];

let start = true;

let Q, W, E, R, T, Y, U, I, O, P, A, S, D, F, G, H, J, K, L, Z, X, C, V, B, N, M;

function preload() {

    story = loadJSON("story.json");
}

function setup() {

    createCanvas(windowWidth, windowHeight);

    createButtons();

    buttons[0].status = "inactive";
}

function draw() {

    update();

    background("#ccc");
    displayButtons();
}

function createButtons() {

    for (n in story.keys) {

        let key = story.keys[n];

        buttons.push(new Button(random(width), random(height), key));
    }
}

function update() {

    for (let i = 0; i < buttons.length; i++) {

		let requirements = false;

		for (let j = 0; j < buttons[i].requirements.length; j++) {

			let requirement = buttons[i].requirements[j];

			if (eval(requirement)) {

				requirements = true;
			}
		}
		if (requirements) {
			buttons[i].status = "inactive";
		} else {
			buttons[i].status = "disabled";
		}
		if (keyIsDown(buttons[i].letter.charCodeAt(0))) {

			if (buttons[i].status == "inactive") {

				buttons[i].status = "active";
			}
			eval(buttons[i].letter + " = true");

        } else {
			if (buttons[i].status == "active") {

				buttons[i].status = "inactive";
			}
			eval(buttons[i].letter + " = false");
		}
    }
}

function displayButtons() {

    for (let i = 0; i < buttons.length; i++) {

        buttons[i].display();
    }
}
