// VARIABLES
const BUTTON_ROCK = document.getElementById("rock")
const BUTTON_PAPER = document.getElementById("paper")
const BUTTON_SCISSORS = document.getElementById("scissors")
const DIV_TEXT_OUTPUT = document.getElementById("output")
const DIV_PLAYER_SCORE = document.getElementById("player-score")
const DIV_COMPUTER_SCORE = document.getElementById("computer-score")

const ROCK = {
    name: "PURROCK",
    beats: [
        "HISSORS"
    ]
};

const PAPER = {
    name: "PAWPER",
    beats: [
        "PURROCK"
    ]
};
const SCISSORS = {
    name: "HISSORS",
    beats: [
        "PAWPER"
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
        updateText(compareOptions(option_a, option_b))
    } else {
        player_score = 0
        computer_score = 0
        updateText("RESTART")
    }
};

function compareOptions(option_a, option_b){
    const outcome = option_a.beats.includes(option_b.name)
    if (option_a === option_b){
        return "DRAW /ᐠ-ꞈ-ᐟ\\"
    } else if (outcome === true) {
        player_score++
        return "HOUSE CAT WON /ᐠ｡ﻌ｡ᐟ\\"
    } else if (outcome === false) {
        computer_score++
        return "STRAY CAT WON /ᐠ｡ꞈ｡ᐟ\\"
    } else {
        return "ERROR"
    };
};

function updateText(outcome){
    DIV_PLAYER_SCORE.textContent = player_score
    DIV_COMPUTER_SCORE.textContent = computer_score

    DIV_PLAYER_SCORE.style.flexGrow = (player_score)+1
    DIV_COMPUTER_SCORE.style.flexGrow = (computer_score)+1

    playAnimation(DIV_TEXT_OUTPUT,"animation-fadeOut")

    if (outcome === "RESTART"){
        DIV_TEXT_OUTPUT.textContent = "CHOOSE YOUR OPTION"
    } else if (player_score >= max_score){
        DIV_TEXT_OUTPUT.textContent = "✧･ﾟ" + "HOUSE CAT WON" + " THIS GAME!" + "ﾟ･✧" + "\n\nCLICK ANY OPTION TO PLAY AGAIN" 
    } else if (computer_score >= max_score){ 
        DIV_TEXT_OUTPUT.textContent = "*･ﾟ" + "STRAY CAT WON" + " THIS GAME!" + "･ﾟ*" +  "\n\nCLICK ANY OPTION TO PLAY AGAIN"
    } else {
        DIV_TEXT_OUTPUT.textContent = player_choice.name + " VS " + computer_choice.name + "\n" + "\n" + outcome
    }
};

function getRandomOption(){
    return OPTION_LIST[Math.floor(Math.random() * OPTION_LIST.length)]
};

function playAnimation(element,animation){
    if (element.classList.contains(animation)){
        element.classList.remove(animation)
    };
    requestAnimationFrame(() => {
        element.classList.add(animation);
    });
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