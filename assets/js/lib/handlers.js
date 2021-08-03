const {
    updateCurrentGuess,
    subtractOneFromCountdown,
    gameStateLose,
    gameStateWin,
    createKeyboard,
    createStartGameScreen,
    createWinScreen,
    createLossScreen,
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
    createKeyboard();
    bindLetterHandlers();
};

//initialise game

let initialiseGame = () => {
    setTargetWord();
    createStartGameScreen();
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

let bindGameStartHandler = () => {
    $(".start-game").click(function () {
        resetGame();
    })
}

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
    initialiseGame();
    bindGameStartHandler();
    bindLetterHandlers();
    bindRestartHandler();
    bindModalHandlers();

};

module.exports = initPageBindings;