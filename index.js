console.log("Script started...")

// VARIABLES
const BUTTON_ROCK = document.getElementById("rock")
const BUTTON_PAPER = document.getElementById("paper")
const BUTTON_SCISSORS = document.getElementById("scissors")
const TEXT_OUTPUT = document.getElementById("output")

const ROCK = {
    name: "ROCK",
    beats: [
        "SCISSORS"
    ]
};

const PAPER = {
    name: "PAPER",
    beats: [
        "ROCK"
    ]
};
const SCISSORS = {
    name: "SCISSORS",
    beats: [
        "PAPER"
    ]
};

const OPTION_LIST = [ROCK, PAPER, SCISSORS]

let player_score = 0
let player_choice = []

let computer_score = 0
let computer_choice = []

let max_score = 5

// FUNCTIONS
function playRound(option_a, option_b){
    if (player_score < max_score && computer_score < max_score){
        console.log(option_a)
        console.log(option_b)
        compareOptions(option_a, option_b)
    } else {
        console.log("GAME OVER")
    }
};

function compareOptions(option_a, option_b){
    const outcome = option_a.beats.includes(option_b.name)
    if (option_a === option_b){
        console.log("DRAW")
        return
    } else if (outcome === true) {
        console.log("PLAYER WON")
        return
    } else if (outcome === false) {
        console.log("COMPUTER WON")
        return
    } else {
        console.log("ERROR")
    };
};

function getRandomOption(){
    return OPTION_LIST[Math.floor(Math.random() * OPTION_LIST.length)]
};

// SIGNALS
BUTTON_ROCK.onclick = (event) => {
    player_choice = ROCK
    computer_choice = getRandomOption()
    playRound(player_choice, computer_choice)
};

BUTTON_PAPER.onclick = (event) => {
    player_choice = PAPER
    computer_choice = getRandomOption()
    playRound(player_choice, computer_choice)
};

BUTTON_SCISSORS.onclick = (event) => {
    player_choice = SCISSORS
    computer_choice = getRandomOption()
    playRound(player_choice, computer_choice)
};