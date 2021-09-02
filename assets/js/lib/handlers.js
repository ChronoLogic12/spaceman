const {
    updateCurrentGuess,
    decrementCountdown,
    createKeyboard,
    createStartGameScreen,
    createWinScreen,
    createLossScreen,
    changeRocketImage,
    preventRightClick,
    updateModalCheckbox,
    removeStartGameStyling,
} = require("./helpers");

let {
    words
} = require("./data");

let {
    word,
    currentGuess,
    prevGuesses,
    imagePropsByCountdownNumber
} = require("./constants");

//select a random word and set the number of underscores and spaces/hyphens representing characters.
const setTargetWord = () => {
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
const checkGameState = (word) => {
    let currentCount = parseInt($(".countdown").text());

    const {
        src,
        desc
    } = imagePropsByCountdownNumber[currentCount];
    changeRocketImage(src, desc);

    if (currentCount === 0) {
        gameStateLose(word);
        return;
    }

    if (!$(".target-word")[0].innerText.match(/[_]/g)) {
        gameStateWin();
        changeRocketImage("https://res.cloudinary.com/chronologic12/image/upload/v1628596264/Spaceman/Spaceman-GameWin_jpoj8r.png", "Blastoff! Red spaceship leaving earth behind to go explore space");
    }
};

const onKeyDown = (event) => {
    if (event.which >= 65 && event.which <= 90) {
        checkSelectedLetter(String.fromCharCode(event.which));
    }
}

const onLetterSelect = (event) => {
    checkSelectedLetter(event.target.innerText)
}

const checkSelectedLetter = (charStr) => {
    //exit function if letter has already been guessed
    if (prevGuesses.includes(charStr)) {
        return;
    }
    //add guessed letter to prevGuesses array and toggle button styling
    prevGuesses.push(charStr);
    $(`.tile:contains(${charStr})`)[0].classList.toggle("active");
    $(`.tile:contains(${charStr})`)[0].classList.toggle("inactive");
    /*check guessed letter against each character in the target word.
      update currentGuess array if letters match*/
    for (let i = 0; i < word.length; i++) {
        if (word[i].toUpperCase() === charStr) {
            currentGuess[i] = `<div class='tile active'>${word[i].toUpperCase()}</div>`;
        }
    }
    //subtract 1 from countdown if guessed letter does not match any character in target word
    if (!word.toUpperCase().includes(charStr)) {
        decrementCountdown();
    }
    updateCurrentGuess(currentGuess);
    checkGameState(word);
};

const resetGame = () => {
    word = "";
    currentGuess = [];
    prevGuesses = [];
    $(".letter").addClass("active");
    $(".letter").removeClass("inactive");
    $(".countdown").text(9);
    setTargetWord();
    updateCurrentGuess(currentGuess);
    changeRocketImage(
        "https://res.cloudinary.com/chronologic12/image/upload/v1628162339/Spaceman/rocket1.png",
        "Red spaceship on a field against a starry sky waiting to take off"
    );
    createKeyboard();
    bindLetterHandlers();
    updateModalCheckbox();
};

const gameStateWin = () => {
    createWinScreen();
    bindRestartHandlers();
    bindReplayHandlers();
};

/**
 * @description complete the target word and initialise loss game screen
 * @param {string} word Target word
 */
const gameStateLose = (word) => {
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
    bindReplayHandlers();
};

const initialiseGame = () => {
    updateModalCheckbox();
    setTargetWord();
    createStartGameScreen();
    updateCurrentGuess(currentGuess);
};

//-------event listeners--------

const bindLetterHandlers = () => {
    $(".letter").click(function (event) {
        onLetterSelect(event);
    });
    $(document).keydown(function (event) {
        onKeyDown(event);
    })
};

const bindGameStartHandlers = () => {
    $(".start-game").click(function () {
        createKeyboard();
        bindLetterHandlers();
        decrementCountdown();
        removeStartGameStyling();
        if (localStorage.getItem("showInstructionsOnStart") === "true") {
            $("#modal").toggle();
        }
    });
};

const bindRestartHandlers = () => {
    $(".restart").click(function () {
        resetGame();
    });
};

const bindReplayHandlers = () => {
    $(document).one("keydown", function (event) {
        if (event.which === 32 || event.which === 13) {
            resetGame();
        }
    });
};

const bindModalHandlers = () => {
    $("#info").click(function () {
        $("#modal").toggle();
    });
    $(".close").click(function () {
        $("#modal").toggle();
    })
    $("#modal").click(function (event) {
        if (event.target.id === "modal") {
            $("#modal").toggle();
        } else {
            return;
        }
    });
    bindModalOnStartToggle();
};

const bindModalOnStartToggle = () => {
    $("#showInstructionsOnStart").change(function () {
        if (localStorage.getItem("showInstructionsOnStart") == "true") {
            localStorage.setItem("showInstructionsOnStart", "false");
        } else {
            localStorage.setItem("showInstructionsOnStart", "true");
        }
    })
}

const initPageBindings = () => {
    initialiseGame();
    bindGameStartHandlers();
    bindRestartHandlers();
    bindModalHandlers();
    preventRightClick();
};

module.exports = initPageBindings;