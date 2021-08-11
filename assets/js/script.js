/**
 * generates a number between 1-5 and assigns it to a choice for the computer for the game.
 */
function generateCompChoice(){

    let compChoice = Math.ceil(math.random()*5);

    if (compChoice === 1) {
        return "rock";
    }
    else if (compChoice === 2){
        return "paper";
    }
    else if (compChoice === 3){
        return "scissors";
    }
    else if (compChoice === 4){
        return "lizard";
    }
    else if ( compChoice === 5){
        return "spock";
    }
    else {
        alert("Error: Computer could not make a move!")
    }
}