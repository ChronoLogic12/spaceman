(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//import array of words to guess
const words = require("./words.js");

//global variables

let word = "";
let currentGuess = [];
let prevGuesses = [];

//select random word and set 

let setTargetWord = () => {
    word = words[Math.floor(Math.random()*words.length)];
    word.split('').forEach(char => {
        if (char.match(/[a-z]/g)) {
            currentGuess.push("<div class='tile inactive'>_</div>");
        } else {
            currentGuess.push(`<div class='tile active'>${char}</div>`);
        }
    });
    updateCurrentGuess();
    subtractOneFromCountdown();
}

//update current guess

let updateCurrentGuess = () => {
    $(".target-word").empty();
    $(".target-word").append(`${currentGuess.join("")}`);
}

//update countdown

let subtractOneFromCountdown = () => {
    let currentCount = parseInt($(".counter").text());
    $(".counter").text(--currentCount);
}

//check word contains selected letter

let checkSelectedLetter = (event) => {
    if (prevGuesses.includes(event.target.innerText)) {
        return;
    }
    prevGuesses.push(event.target.innerText);
    event.target.classList.toggle("active");
    event.target.classList.toggle("inactive");
    for (let i=0; i< word.length; i++) {
        if (word[i].toUpperCase() === event.target.innerText) {
            currentGuess[i] = `<div class='tile active'>${word[i].toUpperCase()}</div>` ;
        }
    }
    if (!word.toUpperCase().includes(event.target.innerText)) {
        subtractOneFromCountdown();
    }
    updateCurrentGuess();
    checkGameState();
}

//check game state

let checkGameState = () => {
    if (parseInt($(".counter").text()) === 0) {
        gameStateLose();
    } else if (!$(".target-word")[0].innerText.match(/[_]/g)) {
        gameStateWin();
    }
}

//game state WIN

let gameStateWin = () => {
    alert("you win!");
}

//game state LOSE

let gameStateLose = () => {
    let completeWordHtml= [];
    word.split("").forEach(char => {
        completeWordHtml.push(`<div class='tile active'>${char.toUpperCase()}</div>`);
    });
    $(".target-word").empty();
    $(".target-word").append(`${completeWordHtml.join("")}`);
    alert("you lose!");
}

//rest game

let resetGame = () => {
    word = "";
    currentGuess = [];
    prevGuesses = [];
    $(".letter").addClass("active");
    $(".letter").removeClass("inactive");
    $(".counter").text(10);
    setTargetWord();
}

//event listeners 
//keyboard letters
$(".letter").click(function(event) {
    checkSelectedLetter(event)
});

//reset button
$("#restart").click(function() {
    resetGame();
})


setTargetWord();

},{"./words.js":2}],2:[function(require,module,exports){
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

module.exports = words;
},{}]},{},[1]);
