const {
    updateCurrentGuess,
    subtractOneFromCountdown,
    createKeyboard,
    createStartGameScreen,
    createWinScreen,
    createLossScreen,
    changeRocketImage,
    preventRightClick
} = require("./helpers");

let {
    word,
    currentGuess,
    prevGuesses,
    words
} = require("./data");

//select a random word and set the number of underscores and spaces/hyphens representing characters.
let setTargetWord = () => {
    word = words[Math.floor(Math.random() * words.length)];
    word.split("").forEach(char => {
        if (char.match(/[a-z]/g)) {
            currentGuess.push("<div class='tile inactive'>_</div>");
        } else {
            currentGuess.push(`<div class='tile active'>${char}</div>`);
        }
    });
};

/**
 * @description Check and update current game state.
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
    }
    if (!$(".target-word")[0].innerText.match(/[_]/g)) {
        gameStateWin();
        changeRocketImage("https://res.cloudinary.com/chronologic12/image/upload/v1628596264/Spaceman/Spaceman-GameWin_jpoj8r.png", "Blastoff! Red spaceship leaving earth behind to go explore space");
    }
};

let checkSelectedLetter = (event) => {
    //exit function if letter has already been guessed
    if (prevGuesses.includes(event.target.innerText)) {
        return;
    }
    //add guessed letter to prevGuesses array and toggle button styling
    prevGuesses.push(event.target.innerText);
    event.target.classList.toggle("active");
    event.target.classList.toggle("inactive");
    /*check guessed letter against each character in the target word.
      update currentGuess array if letters match*/
    for (let i = 0; i < word.length; i++) {
        if (word[i].toUpperCase() === event.target.innerText) {
            currentGuess[i] = `<div class='tile active'>${word[i].toUpperCase()}</div>`;
        }
    }
    //subtract 1 from counter if guessed letter does not match any character in target word
    if (!word.toUpperCase().includes(event.target.innerText)) {
        subtractOneFromCountdown();
    }
    updateCurrentGuess(currentGuess);
    checkGameState(word);
};

let resetGame = () => {
    word = "";
    currentGuess = [];
    prevGuesses = [];
    $(".letter").addClass("active");
    $(".letter").removeClass("inactive");
    $(".counter").text(9);
    initialiseGame();
    changeRocketImage(
        "https://res.cloudinary.com/chronologic12/image/upload/v1628162339/Spaceman/rocket1.png",
        "Red spaceship on a field against a starry sky waiting to take off"
    );
    createKeyboard();
    bindLetterHandlers();
};

let gameStateWin = () => {
    createWinScreen();
    bindRestartHandlers();
};

/**
 * @description complete the target word and initialise loss game screen
 * @param {string} word Target word
 */
let gameStateLose = (word) => {
    //create new array containing all letters and update target-word game element
    let completeWordHtml = [];
    word.split("").forEach(char => {
        completeWordHtml.push(
            `<div class='tile active'>${char.toUpperCase()}</div>`
        );
    });
    $(".target-word").empty();
    $(".target-word").append(`${completeWordHtml.join("")}`);
    createLossScreen();
    bindRestartHandlers();
};

let initialiseGame = () => {
    setTargetWord();
    createStartGameScreen();
    updateCurrentGuess(currentGuess);
};

//-------event listeners--------

let bindLetterHandlers = () => {
    $(".letter").click(function (event) {
        checkSelectedLetter(event);
    });
};

let bindGameStartHandlers = () => {
    $(".start-game").click(function () {
        createKeyboard();
        bindLetterHandlers();
        subtractOneFromCountdown();
    });
};

let bindRestartHandlers = () => {
    $(".restart").click(function () {
        resetGame();
    });
};

let bindModalHandlers = () => {
    $("#info").click(function () {
        $("#modal").toggle();
    });

    $($("#modal")).click(function () {
        $("#modal").toggle();
    });
};

let initPageBindings = () => {
    initialiseGame();
    bindGameStartHandlers();
    bindLetterHandlers();
    bindRestartHandlers();
    bindModalHandlers();
    preventRightClick();
};

module.exports = initPageBindings;