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
 * @param {Array} word Passes the completed target word to the gameStateLose function.
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