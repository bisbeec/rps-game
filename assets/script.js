let userScore = 0;
let gameEnded = false;

function playGame(playerChoice) {
    if (gameEnded) return;  // Prevent playing a new game if one is already in progress

    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    // Reset button styles
    document.querySelectorAll('.choice').forEach(button => {
        button.classList.remove('winning-button', 'losing-button', 'user-choice', 'computer-choice');
        button.classList.remove('hidden');
    });

    let result = '';

    if (playerChoice === computerChoice) {
        result = `It's a tie!`;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = `You win`;
        userScore++;  // Increment the score if the user wins
        document.getElementById(playerChoice).classList.add('winning-button');  // Add the winning style
        document.getElementById(computerChoice).classList.add('losing-button');  // Style computer's choice as losing
    } else {
        result = `You lose`;
        userScore--;  // Decrement the score if the computer wins
        if (userScore < 0) {
            userScore = 0;  // Ensure the score doesn't go below 0
        }
        document.getElementById(computerChoice).classList.add('winning-button');  // Style computer's winning choice
        document.getElementById(playerChoice).classList.add('losing-button');  // Add the losing style to user's choice
    }

    // Add specific classes for user and computer choices
    document.getElementById(playerChoice).classList.add('user-choice');
    document.getElementById(computerChoice).classList.add('computer-choice');

    // Hide the buttons that weren't chosen
    document.querySelectorAll('.choice').forEach(button => {
        if (button.id !== playerChoice && button.id !== computerChoice) {
            button.classList.add('hidden');
        }
    });

    document.getElementById('result').innerHTML = result;
    document.querySelector('#score span').innerHTML = userScore; //Update the score within the span
    document.getElementById('results-block').classList.add('show-results'); 
    //document.getElementById('results-block').style.opacity = '1';  // Show the "New Game" button
    gameEnded = true;  // Prevent further plays until reset


}


function resetGame() {
    // Show all buttons
    document.querySelectorAll('.choice').forEach(button => {
        button.classList.remove('hidden', 'winning-button', 'losing-button', 'user-choice', 'computer-choice');
    });

    // Hide the "Play Again" button and reset game state
    document.getElementById('results-block').classList.remove('show-results');
    document.getElementById('result').innerHTML = '';
    gameEnded = false;  // Allow the game to be played again
}



///////////modal popup//////
function openModal() {
  document.getElementById("modal").style.cssText = "visibility: visible; opacity: 1";
  document.getElementById("overlay").style.cssText = "visibility: visible; opacity: 1";
  document.getElementById("body").style.cssText = "overflow-y: hidden";
}
function closeModal() {
  document.getElementById("modal").style.cssText = "visibility: hidden; opacity: 0";
  document.getElementById("overlay").style.cssText = "visibility: hidden; opacity: 0";
  document.getElementById("body").style.cssText = "overflow-y: scroll";
}