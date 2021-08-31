(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const initPageBindings = require('./lib/handlers')

// bind event listeners once dom content is loaded

$(document).ready(initPageBindings);
},{"./lib/handlers":4}],2:[function(require,module,exports){
let word = "";
let currentGuess = [];
let prevGuesses = [];
const keyboardKeys = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", ],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L", ],
    ["Z", "X", "C", "V", "B", "N", "M", ]
];

const IMAGE_CDN_BASE_URL = "https://res.cloudinary.com/chronologic12/image/upload";
const imagePropsByCountdownNumber = {
    10: {
        src: `${IMAGE_CDN_BASE_URL}/v1628162339/Spaceman/rocket1.png`,
        desc: "Red spaceship on a field against a starry sky waiting to take off"
    },
    9: {
        src: `${IMAGE_CDN_BASE_URL}/v1628162339/Spaceman/rocket1.png`,
        desc: "Red spaceship on a field against a starry sky waiting to take off"
    },
    8: {
        src: `${IMAGE_CDN_BASE_URL}/v1628514664/Spaceman/Spaceman---Rocket-_2-lights_bgixsk.png`,
        desc: "Red spaceship on a field against a starry sky with bright lights shining. Launch sequence stage 1"
    },
    7: {
        src: `${IMAGE_CDN_BASE_URL}/v1628514664/Spaceman/Spaceman---Rocket-_2-lights_bgixsk.png`,
        desc: "Red spaceship on a field against a starry sky with bright lights shining. Launch sequence stage 1"
    },
    6: {
        src: `${IMAGE_CDN_BASE_URL}/v1628514664/Spaceman/Spaceman---Rocket-_2-smoke1_q2y1k1.png`,
        desc: "Red spaceship on a field against a starry sky with bright lights and light smoke. Launch sequence stage 2"
    },
    5: {
        src: `${IMAGE_CDN_BASE_URL}/v1628514664/Spaceman/Spaceman---Rocket-_2-smoke1_q2y1k1.png`,
        desc: "Red spaceship on a field against a starry sky with bright lights and light smoke. Launch sequence stage 2"
    },
    4: {
        src: `${IMAGE_CDN_BASE_URL}/v1628514664/Spaceman/Spaceman---Rocket-_2-smoke2_zzibv3.png`,
        desc: "Red spaceship on a field against a starry sky with bright lights and heavy smoke. Launch sequence stage 3"
    },
    3: {
        src: `${IMAGE_CDN_BASE_URL}/v1628514664/Spaceman/Spaceman---Rocket-_2-smoke2_zzibv3.png`,
        desc: "Red spaceship on a field against a starry sky with bright lights and heavy smoke. Launch sequence stage 3"
    },
    2: {
        src: `${IMAGE_CDN_BASE_URL}/v1628514664/Spaceman/Spaceman---Rocket-_4-blast-off_tcorpn.png`,
        desc: "Red spaceship on a field against a starry sky with roaring jet engine. Launch sequence stage 4"
    },
    1: {
        src: `${IMAGE_CDN_BASE_URL}/v1628514664/Spaceman/Spaceman---Rocket-_4-blast-off_tcorpn.png`,
        desc: "Red spaceship on a field against a starry sky with roaring jet engine. Launch sequence stage 4"
    },
    0: {
        src: `${IMAGE_CDN_BASE_URL}/v1628550931/Spaceman/Spaceman-GameOver_el72sw.png`,
        desc: "Sad looking astronaut watching red spaceship fly off into the stars without him"
    }
}

module.exports = {
    currentGuess,
    prevGuesses,
    word,
    keyboardKeys,
    imagePropsByCountdownNumber
};
},{}],3:[function(require,module,exports){
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
    "zenith"
];

module.exports = {
    words
};
},{}],4:[function(require,module,exports){
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
    words
} = require("./data");

let {
    word,
    currentGuess,
    prevGuesses,
    imagePropsByCountdownNumber
} = require("./constants");

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

let onKeyDown = (event) => {
    if (event.which >= 65 && event.which <= 90) {
        checkSelectedLetter(String.fromCharCode(event.which));
    }
}

let onLetterSelect = (event) => {
    checkSelectedLetter(event.target.innerText)
}

let checkSelectedLetter = (charStr) => {
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
    $(".countdown").text(9);
    initialiseGame();
    changeRocketImage(
        "https://res.cloudinary.com/chronologic12/image/upload/v1628162339/Spaceman/rocket1.png",
        "Red spaceship on a field against a starry sky waiting to take off"
    );
    createKeyboard();
    bindLetterHandlers();
    updateModalCheckbox();
};

let gameStateWin = () => {
    createWinScreen();
    bindRestartHandlers();
    bindReplayHandlers();
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
    bindReplayHandlers();
};

let toggleStartGameStyling = () => {
    $("nav").removeClass("hidden");
    $(".target-word-container").removeClass("hidden");
    $(".countdown").removeClass("hidden");
    $(".game-controls").removeClass("start");
    $(".container").removeClass("start-game-container");
}

const updateModalCheckbox = () => {
    if (localStorage.getItem("showInstructionsOnStart") == "true") {
        $("#showInstructionsOnStart").prop('checked', true);
    } else {
        $("#showInstructionsOnStart").prop('checked', false);
    }
}

let initialiseGame = () => {
    updateModalCheckbox();
    setTargetWord();
    createStartGameScreen();
    updateCurrentGuess(currentGuess);
};

//-------event listeners--------

let bindLetterHandlers = () => {
    $(".letter").click(function (event) {
        onLetterSelect(event);
    });
    $(document).keydown(function (event) {
        onKeyDown(event);
    })
};

let bindGameStartHandlers = () => {
    $(".start-game").click(function () {
        createKeyboard();
        bindLetterHandlers();
        subtractOneFromCountdown();
        toggleStartGameStyling();
        if (localStorage.getItem("showInstructionsOnStart") === "true") {
            $("#modal").toggle();
        }
    });
};

let bindRestartHandlers = () => {
    $(".restart").click(function () {
        resetGame();
    });
};

let bindReplayHandlers = () => {
    $(document).one("keydown", function (event) {
        if (event.which === 32 || event.which === 13) {
            resetGame();
        }
    });
};

let bindModalHandlers = () => {
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

let initPageBindings = () => {
    initialiseGame();
    bindGameStartHandlers();
    bindRestartHandlers();
    bindModalHandlers();
    preventRightClick();
};

module.exports = initPageBindings;
},{"./constants":2,"./data":3,"./helpers":5}],5:[function(require,module,exports){
let {
    keyboardKeys
} = require("./constants");

/**
 * @description replaces the contents of the "target-word" element.
 * @param {Array} guess The players current guess.
 */
let updateCurrentGuess = (guess) => {
    $(".target-word").empty();
    $(".target-word").append(`${guess.join("")}`);
};

//Subtracts one from the remaining attempts countdown.  
let subtractOneFromCountdown = () => {
    let currentCount = parseInt($(".countdown").text());
    $(".countdown").text(--currentCount);
};

//The CreateX functions update the HTML of the 'game-controls' element to reflect the current game state. 
let createKeyboard = () => {
    $(".game-controls").empty();
    let keyboardHTML = '';
    keyboardKeys.forEach(row => {
        let rowHTML = `<div class="letters-row">`;
        row.forEach(char => {
            rowHTML += `<button class="letter tile active">${char}</button>`;
        });
        rowHTML += `</div>`;
        keyboardHTML += rowHTML;
    });
    $(".game-controls").append(keyboardHTML);
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
    <button aria-label="Play again" class="restart button active">Try again?</button>`);
};

/**
 * @description Target the "rocket-image" element and replace the value of the src attribute. 
 * @param {string} url Value of the new image file path.
 * @param {string} desc A short description of the image to serve as the atl text.
 */
let changeRocketImage = (url, desc) => {
    $(".rocket-image").attr("src", url);
    $(".rocket-image").attr("alt", desc);
};

/*
disables right click from opening the context menu. 
This code was created using a guid. Please see README for full details.
*/
let preventRightClick = () => {
    $("body").on("contextmenu", function () {
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
},{"./constants":2}]},{},[1]);
