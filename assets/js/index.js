//import array of words to guess
import words from "./words.js";

//global variables

let word = "";
let currentGuess = [];
let prevGuesses = [];

//select random word and set 

let setTargetWord = () => {
    word = words[Math.floor(Math.random()*words.length)];
    word.split('').forEach(char => {
        currentGuess.push("<div class='tile inactive'>_</div>");
    });
    updateCurrentGuess();
    subtractOneFromCountdown();
}

// update current guess

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
}

$(".letter").click(function(event) {
    checkSelectedLetter(event)
});

setTargetWord();
