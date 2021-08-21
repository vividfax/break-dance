let A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, X, Y, Z;

function preload() {

	story = loadJSON("story.json");

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

function newAudio(string) {

    let letter = new Audio("sounds/" + string + ".wav");
    letter.loop = true;
    letter.volume = 0;
    letter.play();

    return letter;
}
