console.log("Script started...")

const choice_list = ["rock", "paper", "scissors"]
let player_choice = ""
let computer_choice = ""
let player_score = 0
let computer_score = 0
let max_score = 0

function getPlayerChoice(){
    return prompt("Please enter 'rock', 'paper' or 'scissors': ")
};

function getRandomChoice(){
    return choice_list[Math.floor(Math.random() * choice_list.length)]
};

function checkInput(input){
    if (typeof(input) === "string"){
        player_choice = input
            .toLowerCase()
            .trim()
        if(choice_list.includes(player_choice)){
            return true
        }
    }
    return false
}

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

// Game start
while (player_score < max_score && computer_score < max_score){
    // Reset choices to default
    computer_choice = getRandomChoice()
    player_choice = ""

    // Request input until valid
    while (checkInput(player_choice) == false){
        player_choice = getPlayerChoice()
    };

    // Display scorecard
    alert("Result: " + playRound(player_choice,computer_choice) + "\n\nPlayer choice: " + player_choice +  "\nComputer choice: " + computer_choice + "\n\nPlayer score: " + player_score + "\nComputer score: " + computer_score)
};

// Game end
if (player_score == 5){
    alert("YOU WON :) \n\nREFRESH PAGE TO PLAY AGAIN")
} else {
    //alert("YOU LOST :( \n\nREFRESH PAGE TO PLAY AGAIN")
};