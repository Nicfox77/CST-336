// Lab2/js/script.js

//Event Listeners
document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);
document.querySelector("#playerGuess").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkGuess();
    }
});

//Global variables
let randomNumber;
let guesses = [];
let attempts = 0;
let gamesWon = 0;
let gamesLost = 0;
initializeGame();
console.log(randomNumber);

function initializeGame() {
    randomNumber = Math.floor(Math.random() * 99) + 1;
    console.log("randomNumber: " + randomNumber);
    attempts = 0;

    //hiding the Reset button
    document.querySelector("#resetBtn").style.display = "none";

    //showing the Guess button
    document.querySelector("#guessBtn").style.display = "inline";

    let playerGuess = document.querySelector("#playerGuess");
    playerGuess.focus();
    playerGuess.value = "";

    let feedback = document.querySelector("#feedback");
    feedback.textContent = "";

    //clearing the previous guesses
    document.querySelector("#guesses").textContent = "";
}

function checkGuess(){
    let feedback = document.querySelector("#feedback");
    feedback.textContent = "";
    let guess = document.querySelector("#playerGuess").value;
    document.querySelector("#playerGuess").value = "";
    guess = parseInt(guess);
    console.log("Player guess: " + guess);
    if (guess < 1 || guess > 99) {
        feedback.textContent = "Please enter a number between 1 and 99.";
        feedback.style.color = "red";
        return;
    }
    if (guesses.includes(guess)) {
        feedback.textContent = "You have already guessed that number. Please try again.";
        feedback.style.color = "red";
        return;
    }
    guesses.push(guess);
    attempts++;
    console.log("Attempts: " + attempts);
    feedback.style.color = "orange";
    if (guess === randomNumber) {
        feedback.textContent = "Congratulations! You guessed the number in " + attempts + " attempts.";
        feedback.style.color = "green";
        gamesWon++;
        updateGameStats();
        gameOver();
    } else {
        document.querySelector("#guesses").textContent += guess + " ";
        if (attempts === 7) {
            feedback.textContent = "Sorry, you have run out of attempts. The number was " + randomNumber + ".";
            feedback.style.color = "red";
            gamesLost++;
            updateGameStats();
            gameOver();
        } else if (guess > randomNumber) {
            feedback.textContent = "Your guess is too high. Try again.";
        } else {
            feedback.textContent = "Your guess is too low. Try again.";
        }
    }
}

function gameOver() {
    let guessBtn = document.querySelector("#guessBtn");
    let resetBtn = document.querySelector("#resetBtn");
    guessBtn.style.display = "none";
    resetBtn.style.display = "inline";
}

function updateGameStats() {
    document.querySelector("#gamesWon").textContent = String(gamesWon);
    document.querySelector("#gamesLost").textContent = String(gamesLost);
}