let userChosen
let computerChosen

var result = results()
const displayResult = document.getElementById('result')
// console.log('init', displayResult)
const computerChoice = document.getElementById('computer-choice')
const userChoice = document.getElementById('user-choice')
const possibleChoices = document.querySelectorAll('.choices')
const randomNumber = Math.floor(Math.random() * (3))

// Get users userChoice
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChosen = e.target.id
    generatedComputerChoice()
    results()
    userChoice.innerHTML = userChosen
    console.log('User Choice', userChoice)
    computerChoice.innerHTML = computerChosen
    console.log('Computer Choice', computerChoice)
    console.log('Display Result', displayResult)
    displayResult.innerHTML = result
}))

//Get a random computers choice
function generatedComputerChoice() {
    if (randomNumber === 0) {
        return computerChosen = 'rock'
    } else if (randomNumber === 1) {
        return computerChosen = 'paper'
    } else if (randomNumber === 2) {
        return computerChosen = 'scissors'
    }
}

// Get Results 

function results() {
    if (computerChosen == userChosen) {
        return result = 'There was a tie'
    } else if (computerChosen === 'rock' && userChosen === 'paper') {
        return result = 'you lost'
    } else if (computerChosen === 'rock' && userChosen === 'scissors') {
        return result = 'you win!'
    } else if (computerChosen === 'paper' && userChosen === 'rock') {
        return result = 'you lost'
    } else if (computerChosen === 'paper' && userChosen === 'scissors') {
        return result = 'you win!'
    } else if (computerChosen === 'scissors' && userChosen === 'rock') {
        return result = 'you win!'
    } else if (computerChosen === 'scissors' && userChosen === 'paper') {
        return result = 'you lost'
    }
}
