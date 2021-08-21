class SingleChoice {

    constructor(first) {

        this.first = first;

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
        if (this.lean >= 1) {
            this.timer = 48;
        }
        if (this.lean > 0) {
            eval(this.first.letter).volume = this.lean;
            this.lean -= 0.01;
        } else {
            eval(this.first.letter).volume = 0;
        }
        if (keyIsDown(this.first.letter.charCodeAt(0))) {
            if (this.lean < 1) {
                this.lean += 0.03;
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

        translate(0, this.lean*150);
        translate(width/2, height/2);
        noStroke();
        rectMode(CENTER);

        fill(colors.mid);
        rect(0, -75, 30, 150 + 30, 15);

        translate(0, -this.lean*150);
        fill(colors.dark);
        ellipse(0, 0, 30, 30)

        pop();
    }

    displayButton(button) {

        push();

        translate(0, this.lean*150);
        translate(width/2, height/2);
        noStroke();
        rectMode(CENTER);

        rect(0, -150, 61, 61, 7);

        fill(colors.black);
        textAlign(CENTER, CENTER);
        textSize(23);
        textFont("Nunito");
        text(button.letter, 0, -150 + 2);

        textFont("Times New Roman");
        textStyle(ITALIC);
        text(button.description, 0, -150 + 50);

        pop();
    }
}
