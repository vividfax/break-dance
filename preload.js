let story;

let coffeeShop;

let A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, X, Y, Z;
let gains = {};

let loop;

function preload() {

	story = loadJSON("story.json");

    coffeeShop = loadImage("images/coffeeShop.png");

    A = newAudio("A.m4a");
    B = newAudio("B.m4a");
    C = newAudio("C.m4a");
    D = newAudio("D.m4a");
    E = newAudio("E.wav");
    F = newAudio("F.m4a");
    G = newAudio("G.wav");
    H = newAudio("H.m4a");
    I = newAudio("I.wav");
    J = newAudio("J.wav");
    K = newAudio("K.wav");
    L = newAudio("L.m4a");
    M = newAudio("M.wav");
    N = newAudio("N.m4a");
    O = newAudio("O.m4a");
    P = newAudio("P.m4a");
    Q = newAudio("Q.wav");
    R = newAudio("R.m4a");
    S = newAudio("S.wav");
    T = newAudio("T.m4a");
    U = newAudio("U.wav");
    V = newAudio("V.wav");
    W = newAudio("W.wav");
    X = newAudio("X.wav");
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
