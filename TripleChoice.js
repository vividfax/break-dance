class TripleChoice {

    constructor(first, second, third) {

        this.first = first;
        this.second = second;
        this.third = third;

        this.xLean = 0;
        this.yLean = 0;
        this.timer;

        this.x = random(-200, 200);
        this.y = random(-100, 100);
    }

    update() {

        if (this.timer == 1) {
            place++
            return;
        } else if (this.timer > 0) {
            this.timer--;
            return;
        }
        if (this.xLean >= 1 || this.xLean <= -1 || this.yLean >= 1) {
            this.timer = 48;
        }
        if (this.yLean > 0) {
            eval(this.first.letter).volume = 0;
            eval(this.second.letter).volume = this.yLean;
            eval(this.third.letter).volume = 0;
            this.yLean -= 0.01;
        }
        if (this.xLean > 0) {
            eval(this.first.letter).volume = this.xLean;
            eval(this.second.letter).volume = 0;
            eval(this.third.letter).volume = 0;
            this.xLean -= 0.01;
        }
        if (this.xLean < 0) {
            eval(this.first.letter).volume = 0;
            eval(this.second.letter).volume = 0;
            eval(this.third.letter).volume = -this.xLean;
            this.xLean += 0.01;
        }
        if (keyIsDown(this.first.letter.charCodeAt(0))) {
            if (this.xLean < 1 && this.yLean == 0) {
                this.xLean += 0.03;
            }
        }
        if (keyIsDown(this.third.letter.charCodeAt(0))) {
            if (this.xLean > -1 && this.yLean == 0) {
                this.xLean -= 0.03;
            }
        }
        if (keyIsDown(this.second.letter.charCodeAt(0))) {
            if (this.yLean < 1 && this.xLean == 0) {
                this.yLean += 0.03;
            }
        }
        if (this.xLean > -0.01 && this.xLean < 0.01) {
            this.xLean = 0;
        } else if (this.xLean > 1) {
            this.xLean = 1;
        } else if (this.xLean < -1) {
            this.xLean = -1;
        }
        if (this.yLean > 1) {
            this.yLean = 1;
        } else if (this.yLean < 0) {
            this.yLean = 0;
        }
    }

    display() {

        if (this.timer > 0) {
            if (this.xLean == 1) {
                this.displayButton(-150, 0, this.first);
            } else if (this.xLean == -1) {
                this.displayButton(150, 0, this.third);
            } else if (this.yLean == 1) {
                this.displayButton(0, -150, this.second);
            }
        } else {
            this.displayShape();
            this.displayButton(-150, 0, this.first);
            this.displayButton(0, -150, this.second);
            this.displayButton(150, 0, this.third);
        }
    }

    displayShape() {

        push();

        translate(this.xLean*150, this.yLean*150);
        translate(width/2 + this.x, height/2 + this.y);
        noStroke();
        rectMode(CENTER);

        fill(colors.mid);
        rect(0, 0, 300, 30);
        rect(0, -75, 30, 150 + 30);

        translate(-this.xLean*150, -this.yLean*150);
        fill(colors.dark);
        ellipse(0, 0, 30, 30)

        pop();
    }

    displayButton(x, y, button) {

        push();

        translate(this.xLean*150, this.yLean*150);
        translate(width/2 + this.x, height/2 + this.y);
        noStroke();
        rectMode(CENTER);

        rect(x, y, 61, 61, 7);

        fill(colors.black);
        textAlign(CENTER, CENTER);
        textSize(23);
        textFont("Nunito");
        text(button.letter, x, y + 2);

        fill(colors.light);
        textFont("Times New Roman");
        textStyle(ITALIC);
        text(button.description, x, y + 50);

        pop();
    }
}
