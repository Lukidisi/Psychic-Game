var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeftVar;
var guess = "";
var guessesMadeVar = [];
var answer = "";



function gameStart() {
    answer = letters[Math.floor(Math.random() * letters.length)];
    console.log(answer);
    guessesLeftVar = 9;
    $("#winDisplay").html("Wins: " + wins);
    $("#lossDisplay").html("Losses: " + losses);
    $("#guessesLeft").html("Guesses Left: " + guessesLeftVar);
    $("#lastGuess").html("Last Guess: ");
    $("#guessesMade").html("Guesses Made: ");
}

gameStart();
console.log(guessesLeftVar);


document.onkeyup = function (event) {
    guess = String.fromCharCode(event.which).toLowerCase();
    console.log(guess);

    if (guess === answer) {
        wins++;
        $("#winDisplay").html("Wins: " + wins);
        gameStart();
        alert("You Win!");
    }

    if (guess !== answer) {
        guessesMadeVar.push(" " + guess);
        $("#guessesMade").html("Guesses Made: " + guessesMadeVar)
        guessesLeftVar--;
        $("#guessesLeft").html("Guesses Left: " + guessesLeftVar);
    }
    if (guessesLeftVar === 0) {
        losses++;
        $("#lossDisplay").html("Losses: " + losses);
        gameStart();
        alert("You Lose");
    }
}