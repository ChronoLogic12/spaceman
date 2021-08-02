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
    gameStateLose,
    gameStateWin,
    createKeyboard,
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
    if (parseInt($(".counter").text()) === 0) {
        gameStateLose(word);
    } else if (!$(".target-word")[0].innerText.match(/[_]/g)) {
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
    $(".counter").text(10);
    initialiseGame();
};

//initialise game

let initialiseGame = () => {
    setTargetWord();
    createKeyboard();
    updateCurrentGuess(currentGuess);
    subtractOneFromCountdown();
}

//event listeners 

let bindLetterHandlers = () => {
    //keyboard letters
    $(".letter").click(function (event) {
        checkSelectedLetter(event)
    });
};

let bindRestartHandler = () => {
    //reset button
    $("#restart").click(function () {
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
    bindLetterHandlers();
    bindRestartHandler();
    bindModalHandlers();
    initialiseGame();
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

//set letter selection keyboard html 

let createKeyboard = () => {
    $(".letter-selection").empty();
    $(".letter-selection").append(`
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

//game state WIN

let gameStateWin = () => {
    alert("you win!");
};

//game state LOSE

let gameStateLose = (word) => {
    let completeWordHtml = [];
    word.split("").forEach(char => {
        completeWordHtml.push(`<div class='tile active'>${char.toUpperCase()}</div>`);
    });
    $(".target-word").empty();
    $(".target-word").append(`${completeWordHtml.join("")}`);
    alert("you lose!");
};

module.exports = {
    updateCurrentGuess,
    subtractOneFromCountdown,
    gameStateLose,
    gameStateWin,
    createKeyboard,
};
},{}]},{},[1]);
