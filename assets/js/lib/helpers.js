/**
 * @description replaces the contents of the "target-word" element.
 * @param {Array} guess The players current guess.
 */
let updateCurrentGuess = (guess) => {
    $(".target-word").empty();
    $(".target-word").append(`${guess.join("")}`);
};

//Subtracts one from the failed attempts counter.  
let subtractOneFromCountdown = () => {
    let currentCount = parseInt($(".counter").text());
    $(".counter").text(--currentCount);
};

//The CreateX functions update the HTML of the 'game-controls' element to reflect the current game state. 
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

let createStartGameScreen = () => {
    $(".game-controls").empty();
    $(".game-controls").append(`
    <h2>Ready?</h2>
    <button aria-label="Start" class="start-game button active">Start Game</button>`);
};

let createWinScreen = () => {
    $(".game-controls").empty();
    $(".game-controls").append(`
    <h2>You Win!</h2>
    <button aria-label="Play again" class="restart button active">Play again?</button>`);
};

let createLossScreen = () => {
    $(".game-controls").empty();
    $(".game-controls").append(`
    <h2>Game Over!</h2>
    <button aria-label="Play again" class="restart button">Try again?</button>`);
};

/**
 * @description Target the "rocket-image" element and replace the value of the src attribute. 
 * @param {string} url Value of the new image file path.
 * @param {string} desc A short description of the image to serve as the atl text.
 */
let changeRocketImage = (url, desc) => {
    $(".rocket-image").attr("src", url);
    $(".rocket-image").attr("alt", desc);
}

/*
disables right click from opening the context menu. 
This code was created using a guid. Please see README for full details.
*/
let preventRightClick = () => {
    $("body").on("contextmenu", function (e) {
        return false;
    });
};

module.exports = {
    updateCurrentGuess,
    subtractOneFromCountdown,
    createKeyboard,
    createStartGameScreen,
    createWinScreen,
    createLossScreen,
    changeRocketImage,
    preventRightClick,
};