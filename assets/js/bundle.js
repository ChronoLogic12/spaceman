(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const initPageBindings = require('./lib/handlers')

// bind event listeners once dom content is loaded

$(document).ready(initPageBindings);
},{"./lib/handlers":3}],2:[function(require,module,exports){
//global variables

let word = "";
let currentGuess = [];
let prevGuesses = [];

const words = [
    "space",
    "nebular",
    "galaxy",
    "asteroid",
    "astronaut",
    "comet",
    "astronomer",
    "astronomy",
    "orbit",
    "constellation",
    "planet",
    "cosmos",
    "meteor",
    "meteorite",
    "deep space",
    "solar system",
    "asteroid belt",
    "black hole",
    "light-year",
    "satellite",
    "moon",
    "universe",
    "cosmonaut",
    "star",
    "eclipse",
    "lunar",
    "gravity",
    "milky way",
    "orbit",
    "shooting star",
    "rocket",
    "exploration",
    "solar wind",
    "space station",
    "starlight",
    "telescope",
    "mercury",
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "neptune",
    "uranus",
    "pluto",
    "half moon",
    "crescent moon",
    "axial tilt",
    "waning",
    "waxing",
    "big bang theory",
    "binary star",
    "elliptical orbit",
    "density",
    "dwarf planet",
    "dwarf star",
    "crater",
    "equinox",
    "ecliptic",
    "falling star",
    "meteor shower",
    "meteoroid",
    "lens",
    "full moon",
    "alien",
    "mass",
    "total eclipse",
    "umbra",
    "penumbra",
    "new moon",
    "rings",
    "partial eclipse",
    "observatory",
    "spaceman",
    "nasa",
    "airlock",
    "outer space",
    "aperture",
    "celestial",
    "equator",
    "cosmology",
    "dark matter",
    "double star",
    "flare",
    "solar flare",
    "gravitation",
    "supernova",
    "hubble",
    "interstellar",
    "gas giant",
    "ice giant",
    "neutron star",
    "neutron",
    "observatory",
    "pulsar",
    "red giant",
    "red dwarf",
    "revolve",
    "singularity",
    "spectrum",
    "terrestrial",
    "twinkling",
    "vacuum",
    "wormhole",
    "zenith",
];

module.exports = {
    words,
    word,
    currentGuess,
    prevGuesses
};
},{}],3:[function(require,module,exports){
const {
    updateCurrentGuess,
    subtractOneFromCountdown,
    createKeyboard,
    createStartGameScreen,
    createWinScreen,
    createLossScreen,
    changeRocketImage,
    preventRightClick,
} = require('./helpers');

let {
    word,
    currentGuess,
    prevGuesses,
    words
} = require('./data');

//Selects a random word and sets the number of underscores and spaces/hyphens representing characters.
let setTargetWord = () => {
    word = words[Math.floor(Math.random() * words.length)];
    word.split('').forEach(char => {
        if (char.match(/[a-z]/g)) {
            currentGuess.push("<div class='tile inactive'>_</div>");
        } else {
            currentGuess.push(`<div class='tile active'>${char}</div>`);
        };
    });
};

/**
 * Checks current game state and executes appropriate response.
 * @param {String} word Passes the completed target word to the gameStateLose function.
 */

let checkGameState = (word) => {
    let currentCount = parseInt($(".counter").text());
    if (currentCount === 10 || currentCount === 9) {
        changeRocketImage("https://res.cloudinary.com/chronologic12/image/upload/v1628162339/Spaceman/rocket1.png", "Red spaceship on a field against a starry sky waiting to take off");
    } else if (currentCount === 8 || currentCount === 7) {
        changeRocketImage("https://res.cloudinary.com/chronologic12/image/upload/v1628514664/Spaceman/Spaceman---Rocket-_2-lights_bgixsk.png", "Red spaceship on a field against a starry sky with bright lights shining. Launch sequence stage 1");
    } else if (currentCount === 6 || currentCount === 5) {
        changeRocketImage("https://res.cloudinary.com/chronologic12/image/upload/v1628514664/Spaceman/Spaceman---Rocket-_2-smoke1_q2y1k1.png", "Red spaceship on a field against a starry sky with bright lights and light smoke. Launch sequence stage 2");
    } else if (currentCount === 4 || currentCount === 3) {
        changeRocketImage("https://res.cloudinary.com/chronologic12/image/upload/v1628514664/Spaceman/Spaceman---Rocket-_2-smoke2_zzibv3.png", "Red spaceship on a field against a starry sky with bright lights and heavy smoke. Launch sequence stage 4");
    } else if (currentCount === 2 || currentCount === 1) {
        changeRocketImage("https://res.cloudinary.com/chronologic12/image/upload/v1628514664/Spaceman/Spaceman---Rocket-_4-blast-off_tcorpn.png", "Red spaceship on a field against a starry sky with roaring jet engine. Launch sequence stage 4");
    } else if (currentCount === 0) {
        gameStateLose(word);
        changeRocketImage("https://res.cloudinary.com/chronologic12/image/upload/v1628550931/Spaceman/Spaceman-GameOver_el72sw.png", "Sad looking astronaut watching red spaceship fly off into the stars without him");
        return;
    };
    if (!$(".target-word")[0].innerText.match(/[_]/g)) {
        gameStateWin();
        changeRocketImage("https://res.cloudinary.com/chronologic12/image/upload/v1628596264/Spaceman/Spaceman-GameWin_jpoj8r.png", "Blastoff! Red spaceship leaving earth behind to go explore the space");
    };
};

/**
 * 
 * @param {string} event 
 * @returns 
 */

let checkSelectedLetter = (event) => {
    if (prevGuesses.includes(event.target.innerText)) {
        return;
    };
    prevGuesses.push(event.target.innerText);
    event.target.classList.toggle("active");
    event.target.classList.toggle("inactive");
    for (let i = 0; i < word.length; i++) {
        if (word[i].toUpperCase() === event.target.innerText) {
            currentGuess[i] = `<div class='tile active'>${word[i].toUpperCase()}</div>`;
        };
    };
    if (!word.toUpperCase().includes(event.target.innerText)) {
        subtractOneFromCountdown();
    };
    updateCurrentGuess(currentGuess);
    checkGameState(word);
};

//reset game

let resetGame = () => {
    word = "";
    currentGuess = [];
    prevGuesses = [];
    $(".letter").addClass("active");
    $(".letter").removeClass("inactive");
    $(".counter").text(9);
    initialiseGame();
    changeRocketImage("https://res.cloudinary.com/chronologic12/image/upload/v1628162339/Spaceman/rocket1.png", "Red spaceship on a field against a starry sky waiting to take off");
    createKeyboard();
    bindLetterHandlers();
};

//game state WIN

let gameStateWin = () => {
    createWinScreen();
    bindRestartHandlers();
};

//game state LOSE

let gameStateLose = (word) => {
    let completeWordHtml = [];
    word.split("").forEach(char => {
        completeWordHtml.push(`<div class='tile active'>${char.toUpperCase()}</div>`);
    });
    $(".target-word").empty();
    $(".target-word").append(`${completeWordHtml.join("")}`);
    createLossScreen();
    bindRestartHandlers();
};

//initialise game

let initialiseGame = () => {
    setTargetWord();
    createStartGameScreen();
    updateCurrentGuess(currentGuess);
}

//event listeners 

let bindLetterHandlers = () => {
    //keyboard letters
    $(".letter").click(function (event) {
        checkSelectedLetter(event)
    });
};

let bindGameStartHandler = () => {
    $(".start-game").click(function () {
        createKeyboard();
        bindLetterHandlers();
        subtractOneFromCountdown();
    });
};

let bindRestartHandlers = () => {
    //reset button
    $(".restart").click(function () {
        resetGame();
    });
};

let bindModalHandlers = () => {
    //open modal button
    $("#info").click(function () {
        $("#modal").toggle();
    });

    //close modal
    $($("#modal")).click(function (event) {
        $("#modal").toggle();
    });
};

let initPageBindings = () => {
    initialiseGame();
    bindGameStartHandler();
    bindLetterHandlers();
    bindRestartHandlers();
    bindModalHandlers();
    preventRightClick();
};

module.exports = initPageBindings;
},{"./data":2,"./helpers":4}],4:[function(require,module,exports){
/**
 * @description replaces the contents of the "target-word" element.
 * @param {Array} guess The players current guess.
 */
let updateCurrentGuess = (guess) => {
    $(".target-word").empty();
    $(".target-word").append(`${guess.join("")}`);
};

//Subtracts one from the remaining attempts counter.  
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
},{}]},{},[1]);
