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