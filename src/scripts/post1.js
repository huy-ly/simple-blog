const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() { 
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1

    switch(randomNumber) {
        case 1:
            computerChoice = 'Rock'
            break
        
        case 2:
            computerChoice = 'Paper'
            break
        case 3:
            computerChoice = 'Scissors'
            break
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'It\'s a draw!'
        resultDisplay.innerHTML = result
        return
    }

    if (computerChoice === 'Rock') {
        if (userChoice === 'Paper') {
            result = 'You win!'
        }
        else{
            result = 'You lose!'
        }
           
    }

    if (computerChoice === 'Paper') {
        if (userChoice === 'Rock') {
            result = 'You lose!'
        }
        else{
            result = 'You win!'
        }
           
    }

    if (computerChoice === 'Scissors') {
        if (userChoice === 'Rock') {
            result = 'You win!'
        }
        else{
            result = 'You lose!'
        }
           
    }
    resultDisplay.innerHTML = result
}

