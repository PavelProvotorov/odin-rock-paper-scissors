console.log("Script started...")

const choice_list = ["rock", "paper", "scissors"]
let player_choice = ""
let computer_choice = getRandomChoice()
let player_score = 0
let computer_score = 0

function getPlayerChoice(){
    return prompt("Please enter 'rock', 'paper' or 'scissors': ", getRandomChoice())
};

function getRandomChoice(){
    return choice_list[Math.floor(Math.random() * choice_list.length)]
};

function playRound(option_a, option_b){
    if (option_a == option_b){
        return "Tie!"
    } else {
        switch (option_a + " vs " + option_b){
            // Rock
            case "rock vs paper":
                computer_score++
                return "Computer Won!"

            case "rock vs scissors":
                player_score++
                return "Player Won!"

            // Paper
            case "paper vs rock":
                player_score++
                return "Player Won!"

            case "paper vs scissors":
                computer_score++
                return "Computer Won!"

            // Scissors
            case "scissors vs rock":
                computer_score++
                return "Computer Won!"

            case "scissors vs paper":
                player_score++
                return "Player Won!"
        }
    }
};

while (player_score < 5 && computer_score < 5){
    player_choice = getPlayerChoice()
    alert("Result: " + playRound(player_choice,computer_choice) + "\n\nPlayer choice: " + player_choice +  "\nComputer choice: " + computer_choice + "\n\nPlayer score: " + player_score + "\nComputer score: " + computer_score)
};