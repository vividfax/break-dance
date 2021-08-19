class DoubleChoice {

    constructor(first, second) {

        this.first = first;
        this.second = second;

        this.lean = 0;
        this.timer = 0;
    }

    update() {

        if (this.timer == 1) {
            place++
            return;
        } else if (this.timer > 0) {
            this.timer--;
            return;
        }
        if (this.lean >= 1 || this.lean <= -1) {
            this.timer = 48;
        }
        if (this.lean > 0) {
            this.lean -= 0.01;
        }
        if (this.lean < 0) {
            this.lean += 0.01;
        }
        if (keyIsDown(this.first.letter.charCodeAt(0))) {
            if (this.lean < 1) {
                this.lean += 0.03;
            }
        }
        if (keyIsDown(this.second.letter.charCodeAt(0))) {
            if (this.lean > -1) {
                this.lean -= 0.03;
            }
        }
        if (this.lean > -0.01 && this.lean < 0.01) {
            this.lean = 0;
        } else if (this.lean > 1) {
            this.lean = 1;
        } else if (this.lean < -1) {
            this.lean = -1;
        }
    }

    display() {

        if (this.timer > 0) {
            if (this.lean == 1) {
                this.displayButton(-150, this.first);
            } else if (this.lean == -1) {
                this.displayButton(150, this.second);
            }
        } else {
            this.displayShape();
            this.displayButton(-150, this.first);
            this.displayButton(150, this.second);
        }
    }

    displayShape() {

        push();

        translate(this.lean*150, 0);
        translate(width/2, height/2);
        noStroke();
        rectMode(CENTER);

        fill(colors.mid);
        rect(0, 0, 300, 30);

        translate(-this.lean*150, 0);
        fill(colors.dark);
        ellipse(0, 0, 30, 30)

        pop();
    }

    displayButton(x, button) {

        push();

        translate(this.lean*150, 0);
        translate(width/2, height/2);
        noStroke();
        rectMode(CENTER);

        rect(x, 0, 61, 61, 7);

        fill(colors.black);
        textAlign(CENTER, CENTER);
        textSize(23);
        textFont("Nunito");
        text(button.letter, x, 2);

        textFont("Times New Roman");
        textStyle(ITALIC);
        text(button.description, x, 50);

        pop();
    }
}
