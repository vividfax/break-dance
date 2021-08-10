class DoubleChoice {

    constructor(first, second) {

        this.first = first;
        this.second = second;

        this.lean = 0;
    }

    update() {

        if (keyIsDown(70)) {
            if (this.lean < 1 - 0.02) {
                this.lean += 0.02;
            }
        }
        if (keyIsDown(78)) {
            if (this.lean > -1 + 0.02) {
                this.lean -= 0.02;
            }
        }
    }

    display() {

        this.displayShape();
        this.displayButton(-150, this.first);
        this.displayButton(150, this.second);
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
