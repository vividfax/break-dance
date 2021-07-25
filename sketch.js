let story;
let buttons = [];
let part = 0;

function preload() {

    story = loadJSON("story.json");
}

function setup() {

    createCanvas(windowWidth, windowHeight);

    createButtons();
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

        if (keyIsDown(buttons[i].letter.charCodeAt(0))) {
            buttons[i].status = "active";
        }
    }
}

function displayButtons() {

    for (let i = 0; i < buttons.length; i++) {

        if (part == buttons[i].part) {

            buttons[i].display();
        }
    }
}
