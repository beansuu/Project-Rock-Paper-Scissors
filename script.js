let playerScore = 0;
let computerScore = 0;
const winningScore = 5;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }

    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        return "You win!";
    } else {
        computerScore++;
        return "You lose!";
    }
}

function createButton(text, selection) {
    const button = document.createElement('button');
    button.textContent = text;

    button.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        const result = playRound(selection, computerSelection);
        displayResult(result);
        displayScore();
        checkWinner();
    });

    return button;
}

const container = document.getElementById('container');
const resultsDiv = document.getElementById('results');
const scoreDiv = document.getElementById('score');

function displayResult(result) {
    const resultElement = document.createElement('p');
    resultElement.textContent = result;
    resultsDiv.appendChild(resultElement);
}

function displayScore() {
    scoreDiv.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}

function checkWinner() {
    if (playerScore === winningScore) {
        displayResult("Congratulations! You are the winner!");
        disableButtons();
    } else if (computerScore === winningScore) {
        displayResult("You lost! The computer is the winner!");
        disableButtons();
    }
}

function disableButtons() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.disabled = true);
}

const rockButton = createButton('Rock', 'rock');
const paperButton = createButton('Paper', 'paper');
const scissorsButton = createButton('Scissors', 'scissors');

container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorsButton);
