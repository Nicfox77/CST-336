//Event Listeners
document.querySelector("#guessBtn").addEventListener("click", checkGuess);

//Global variables
let randomNumber;
let attempts = 0;
initializeGame();
console.log(randomNumber);

function initializeGame() {
    randomNumber = Math.floor(Math.random() * 99) + 1;
    console.log("randomNumber: " + randomNumber);

    //hiding the Reset button
    document.querySelector("#resetBtn").style.display = "none";

    //adding focus to textbox
    document.querySelector("#playerGuess").focus();
}

function checkGuess(){
    let guess = document.querySelector("#playerGuess").value;
    console.log("Player guess: " + guess);
    if (guess < 1 || guess > 99){
        alert("Guess out of range")
        return;
    }
}