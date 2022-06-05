class SingleChoice {

    constructor(first, newAudio) {

        this.first = first;

        this.lean = 0;
        this.timer = 0;
        
        this.x = random(-200, 200);
        this.y = random(-100, 100);
        
        this.dir = random([-1, 1]);
        
        this.audioLoaded = true;
        this.newAudio = newAudio;
    }

    update() {
        if (this.audioLoaded==false) {
            this.newAudio(this.first.fileName);
            this.audioLoaded = true;
        }


        if (this.timer == 1) {
            place++
            return;
        } else if (this.timer > 0) {
            this.timer--;
            return;
        }
        if (this.lean >= 1) {
            this.timer = 48;
        }
        if (this.lean > 0) {
            gains[this.first.letter].gain.value = map(this.lean, 0, 1, -1, 1);
            this.lean -= 0.005;
        } else {
            gains[this.first.letter].gain.value = -1;
        }
        if (keyIsDown(this.first.letter.charCodeAt(0))) {
            if (this.lean < 1) {
                this.lean += 0.015;
            }
        }
        if (this.lean > 1) {
            this.lean = 1;
        } else if (this.lean < 0) {
            this.lean = 0;
        }
    }

    display() {

        if (this.timer > 0) {
            this.displayButton(this.first);
        } else {
            this.displayShape();
            this.displayButton(this.first);
        }
    }


    displayShape() {

        push();

        translate(-this.lean*150 * this.dir, 0);
        translate(width/2 + this.x, height/2 + this.y);
        noStroke();
        rectMode(CENTER);

        fill(colors.mid);
        rect(75 * this.dir, 0, 150 + 30, 30, 15);

        translate(this.lean*150 * this.dir, 0);
        fill(colors.dark);
        ellipse(0, 0, 30, 30)

        pop();
    }

    displayButton(button) {

        push();

        translate(-this.lean*150 * this.dir, 0);
        translate(width/2 + this.x, height/2 + this.y);
        noStroke();
        rectMode(CENTER);

        rect(150 * this.dir, 0, 61, 61, 7);

        fill(colors.black);
        textAlign(CENTER, CENTER);
        textSize(23);
        textFont("Nunito");
        text(button.letter, 150 * this.dir, 2);

        fill(colors.light);
        textFont("Times New Roman");
        textStyle(ITALIC);
        text(button.description, 150 * this.dir, 50);

        pop();
    }
}
