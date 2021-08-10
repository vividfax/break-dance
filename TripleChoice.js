class TripleChoice {

    constructor(first, second, third) {

        this.first = first;
        this.second = second;
        this.third = third;
    }

    update() {

    }

    display() {

        this.displayShape();
        this.displayButton(0, -150, this.first);
        this.displayButton(-173, 150, this.second);
        this.displayButton(173, 150, this.third);
    }

    displayShape() {

        push();

        translate(width/2, height/2);
        noStroke();
        fill(colors.mid);

        triangle(0, -150, -173, 150, 173, 150);

        pop();
    }

    displayButton(x, y, button) {

        push();

        translate(this.lean, 0);
        translate(width/2, height/2);
        noStroke();
        rectMode(CENTER);

        rect(x, y, 61, 61, 7);

        fill(colors.black);
        textAlign(CENTER, CENTER);
        textSize(23);
        textFont("Nunito");
        text(button.letter, x, y+2);

        textFont("Times New Roman");
        textStyle(ITALIC);
        text(button.description, x, y+50);

        pop();
    }
}
