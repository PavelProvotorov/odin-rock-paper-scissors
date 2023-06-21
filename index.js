console.log("Script started...")

const choice_list = ["rock", "paper", "scissors"]
let player_choice = getRandomChoice()
let computer_choice = getRandomChoice()

function getRandomChoice(){
    return choice_list[Math.floor(Math.random() * choice_list.length)]
};

function playRound(option_a, option_b){
    let result = ""
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

console.log(player_choice)
console.log(computer_choice)
console.log(playRound(player_choice,computer_choice))