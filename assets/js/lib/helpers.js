//update current guess

let updateCurrentGuess = (guess) => {
    $(".target-word").empty();
    $(".target-word").append(`${guess.join("")}`);
};

//update countdown

let subtractOneFromCountdown = () => {
    let currentCount = parseInt($(".counter").text());
    $(".counter").text(--currentCount);
};

//set letter selection keyboard HTML 

let createKeyboard = () => {
    $(".game-controls").empty();
    $(".game-controls").append(`
        <div class="letters-row">
            <button class="letter tile active">Q</button>
            <button class="letter tile active">W</button>
            <button class="letter tile active">E</button>
            <button class="letter tile active">R</button>
            <button class="letter tile active">T</button>
            <button class="letter tile active">Y</button>
            <button class="letter tile active">U</button>
            <button class="letter tile active">I</button>
            <button class="letter tile active">O</button>
            <button class="letter tile active">P</button>
        </div>
        <div class="letters-row">
            <button class="letter tile active">A</button>
            <button class="letter tile active">S</button>
            <button class="letter tile active">D</button>
            <button class="letter tile active">F</button>
            <button class="letter tile active">G</button>
            <button class="letter tile active">H</button>
            <button class="letter tile active">J</button>
            <button class="letter tile active">K</button>
            <button class="letter tile active">L</button>
        </div>
        <div class="letters-row">
            <button class="letter tile active">Z</button>
            <button class="letter tile active">X</button>
            <button class="letter tile active">C</button>
            <button class="letter tile active">V</button>
            <button class="letter tile active">B</button>
            <button class="letter tile active">N</button>
            <button class="letter tile active">M</button>
        </div>`);
};

//Start game/page load HTML

let createStartGameScreen = () => {
    $(".game-controls").empty();
    $(".game-controls").append(`
    <h2>Ready?</h2>
    <button class="start-game button active">Start Game</button>`);
};

//Game win state HTML

let createWinScreen = () => {
    $(".game-controls").empty();
    $(".game-controls").append(`
    <h2>You Win!</h2>
    <button class="restart button active">Play again?</button>`);
};

//Game loss state HTML

let createLossScreen = () => {
    $(".game-controls").empty();
    $(".game-controls").append(`
    <h2>Game Over!</h2>
    <button class="restart">Try again?</button>`);
};

module.exports = {
    updateCurrentGuess,
    subtractOneFromCountdown,
    createKeyboard,
    createStartGameScreen,
    createWinScreen,
    createLossScreen,
};