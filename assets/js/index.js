//global variables

let word = "";
let currentGuess = [];

//import array of words to guess
import words from "/assets/js/words.js";

//select random word and set 

let setTargetWord = () => {
    word = words[Math.floor(Math.random()*words.length)];
    word.split('').forEach(char => {
        currentGuess.push("<span class='tile inactive'>_</span>");
    });
    updateCurrentGuess();
}

// update current guess

let updateCurrentGuess = () => {
    $(".target-word").empty();
    $(".target-word").append(`${currentGuess.join("")}`);
}

//check word contains selected letter

let checkSelectedLetter = (event) => {
    for (let i=0; i< word.length; i++) {
        console.log(word);
        console.log(word[i].toUpperCase() === event.target.innerText);
        console.log(currentGuess);
        if (word[i].toUpperCase() === event.target.innerText) {
            currentGuess[i] = `<span class='tile inactive'>${word[i].toUpperCase()}</span>` ;
        }     
    }
    updateCurrentGuess();
}

$(".letter").click(function(event) {
    checkSelectedLetter(event)
});

setTargetWord();
