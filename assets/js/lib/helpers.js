let {
    keyboardKeys
} = require("./constants");

/**
 * @description replaces the contents of the "target-word" element.
 * @param {Array} guess The players current guess.
 */
let updateCurrentGuess = (guess) => {
    $(".target-word").empty();
    $(".target-word").append(`${guess.join("")}`);
};

//Subtracts one from the remaining attempts countdown.  
let decrementCountdown = () => {
    let currentCount = parseInt($(".countdown").text());
    $(".countdown").text(--currentCount);
};

//The CreateX functions update the HTML of the 'game-controls' element to reflect the current game state. 
let createKeyboard = () => {
    $(".game-controls").empty();
    let keyboardHTML = '';
    keyboardKeys.forEach(row => {
        let rowHTML = `<div class="letters-row">`;
        row.forEach(char => {
            rowHTML += `<button class="letter tile active">${char}</button>`;
        });
        rowHTML += `</div>`;
        keyboardHTML += rowHTML;
    });
    $(".game-controls").append(keyboardHTML);
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
    <button aria-label="Play again" class="restart button active">Try again?</button>`);
};

/**
 * @description Target the "rocket-image" element and replace the value of the src attribute. 
 * @param {string} url Value of the new image file path.
 * @param {string} desc A short description of the image to serve as the atl text.
 */
let changeRocketImage = (url, desc) => {
    $(".rocket-image").attr("src", url);
    $(".rocket-image").attr("alt", desc);
};

/*
disables right click from opening the context menu. 
This code was created using a guid. Please see README for full details.
*/
let preventRightClick = () => {
    $("body").on("contextmenu", function () {
        return false;
    });
};

module.exports = {
    updateCurrentGuess,
    decrementCountdown,
    createKeyboard,
    createStartGameScreen,
    createWinScreen,
    createLossScreen,
    changeRocketImage,
    preventRightClick,
};