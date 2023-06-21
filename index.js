console.log("Script started...")

const choice_list = ["rock", "paper", "scissors"]
let player_choice = prompt("Please enter 'rock', 'paper' or 'scissors': ", getRandomChoice())
let computer_choice = getRandomChoice()

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
                return "Computer Won!"

            case "rock vs scissors":
                return "Player Won!"

            // Paper
            case "paper vs rock":
                return "Player Won!"

            case "paper vs scissors":
                return "Computer Won!"

            // Scissors
            case "scissors vs rock":
                return "Computer Won!"

            case "scissors vs paper":
                return "Player Won!"
        }
    }
}

alert("Player choice: " + player_choice +  "\nComputer choice: " + computer_choice + "\nResult: " + playRound(player_choice,computer_choice))