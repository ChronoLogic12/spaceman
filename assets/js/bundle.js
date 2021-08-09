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
} = require('./helpers');

let {
    word,
    currentGuess,
    prevGuesses,
    words
} = require('./data');

//select random word and set 

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

//check game state

let checkGameState = (word) => {
    let currentCount = parseInt($(".counter").text());
    if (currentCount === 10 || currentCount === 9) {
        changeRocketImage("https://res.cloudinary.com/chronologic12/image/upload/v1628162339/Spaceman/rocket1.png");
    } else if (currentCount === 8 || currentCount === 7) {
        changeRocketImage("https://res.cloudinary.com/chronologic12/image/upload/v1628514664/Spaceman/Spaceman---Rocket-_2-lights_bgixsk.png");
    } else if (currentCount === 6 || currentCount === 5) {
        changeRocketImage("https://res.cloudinary.com/chronologic12/image/upload/v1628514664/Spaceman/Spaceman---Rocket-_2-smoke1_q2y1k1.png");
    } else if (currentCount === 4 || currentCount === 3) {
        changeRocketImage("https://res.cloudinary.com/chronologic12/image/upload/v1628514664/Spaceman/Spaceman---Rocket-_2-smoke2_zzibv3.png");
    } else if (currentCount === 2 || currentCount === 1) {
        changeRocketImage("https://res.cloudinary.com/chronologic12/image/upload/v1628514664/Spaceman/Spaceman---Rocket-_4-blast-off_tcorpn.png");
    } else if (currentCount === 0) {
        gameStateLose(word);
        changeRocketImage("https://res.cloudinary.com/chronologic12/image/upload/v1628170306/Spaceman/rocket404_ybnyvn.png");
    };
    if (!$(".target-word")[0].innerText.match(/[_]/g)) {
        gameStateWin(word);
    };
};

//check word contains selected letter

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
    checkGameState();
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
    // subtractOneFromCountdown();
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
};

module.exports = initPageBindings;
},{"./data":2,"./helpers":4}],4:[function(require,module,exports){
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
    <button class="restart button">Try again?</button>`);
};

//change rocket image src 

let changeRocketImage = (url) => {
    $(".rocket-image").attr("src", url);
}

module.exports = {
    updateCurrentGuess,
    subtractOneFromCountdown,
    createKeyboard,
    createStartGameScreen,
    createWinScreen,
    createLossScreen,
    changeRocketImage,
};
},{}]},{},[1]);
