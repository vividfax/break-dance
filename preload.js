let story;

let coffeeShop;

let A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, X, Y, Z;
let gains = {};

let loop;

function preload() {

	story = loadJSON("story.json");

    coffeeShop = loadImage("images/coffeeShop.png");

    A = newAudio("A");
    B = newAudio("B");
    C = newAudio("C");
    D = newAudio("D");
    E = newAudio("E");
    F = newAudio("F");
    G = newAudio("G");
    H = newAudio("H");
    I = newAudio("I");
    J = newAudio("J");
    K = newAudio("K");
    L = newAudio("L");
    M = newAudio("M");
    N = newAudio("N");
    O = newAudio("O");
    P = newAudio("P");
    Q = newAudio("Q");
    R = newAudio("R");
    S = newAudio("S");
    T = newAudio("T");
    U = newAudio("U");
    V = newAudio("V");
    W = newAudio("W");
    X = newAudio("X");
    Y = newAudio("Y");
    Z = newAudio("Z");
}

function newAudio(c) {

    let player;

    for (let i = 0; i < 26; i++) {
        player = new Tone.Player({
            url: "sounds/" + c + ".wav",
        }).toMaster();
    };
    gains[c] = new Tone.Gain(-1);
    player.connect(gains[c]);
    gains[c].toMaster();

    loop = new Tone.Loop((time) => {
        player.start();
    }, "1n").start("+1i");

    Tone.Buffer.on('load', () => {
        Tone.Transport.start();
    });
    return player;
}
