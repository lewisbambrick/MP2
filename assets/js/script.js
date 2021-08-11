
/**
 * Generates a number between 1 and 5 and asigns it to a computer choice for the game
 */
 function generateComputerChoice() {

    let comChoice = Math.ceil(Math.random() * 5);

    if (comChoice === 1) {
        return "Rock";
    } else if (comChoice === 2) {
        return "Paper";
    } else if (comChoice === 3) {
        return "Scissors";
    } else if (comChoice === 4) {
        return "Lizard";
    } else if (comChoice === 5) {
        return "Spock";
    } else {
        return "error";
    }
}
/**
 * Comapres the user choice from the buttons to the randomly generated computers choice
 */
function decideWinner(userChoice) {
    let comChoice = generateComputerChoice();
    let result;
    if (userChoice === comChoice) {
        result = 'Draw!';
        alert("Wow! You've drawn with the Computer!")
    
    } else {
        if (userChoice === "Rock" && (comChoice == "Scissors" || comChoice == "Lizard")) {
            incrementScore();
            result = 'Win!';
        } else if (userChoice === "Paper" && (comChoice == "Rock" || comChoice == "Spock")) {
            incrementScore();
            result = 'Win!';
        } else if (userChoice === "Scissors" && (comChoice == "Paper" || comChoice == "Lizard")) {
            incrementScore();
            result = 'Win!';
        } else if (userChoice === "Lizard" && (comChoice == "Spock" || comChoice == "Paper")) {
            incrementScore();
            result = 'Win!';
        } else if (userChoice === "Spock" && (comChoice == "Scissors" || comChoice == "Rock")) {
            incrementScore();
            result = 'Win!';
        } else {
            incrementLoss();
            result = 'Loss!';
        }
    }

}
/**
 * gets current score from the DOM and increases it by one
 */
function incrementScore() {
    let previousScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++previousScore;
    alert('Congratulations! You have beaten the Computer!');
}
/**
 * gets current loss from the DOM and increases it by one
 */
function incrementLoss() {
    let previousLoss = parseInt(document.getElementById("loss").innerText);
    document.getElementById("loss").innerText = ++previousLoss;
    alert("Ohh no! You've been beaten by the computer!");
}
/**
 * to allow to show rules
 */const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
 
openModalButtons.forEach(button => {
 button.addEventListener('click', () => {
   const modal = document.querySelector(button.dataset.modalTarget)
   openModal(modal)
 })
})
 
overlay.addEventListener('click', () => {
 const modals = document.querySelectorAll('.modal.active')
 modals.forEach(modal => {
   closeModal(modal)
 })
})
 
closeModalButtons.forEach(button => {
 button.addEventListener('click', () => {
   const modal = button.closest('.modal')
   closeModal(modal)
 })
})
 
function openModal(modal) {
 if (modal == null) return
 modal.classList.add('active')
 overlay.classList.add('active')
}
 
function closeModal(modal) {
 if (modal == null) return
 modal.classList.remove('active')
 overlay.classList.remove('active')
}




