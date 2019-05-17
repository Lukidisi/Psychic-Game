var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeftVar = 9;
var guess = "";
var guessesMadeVar = [];
var answer = "";



$("#lossDisplay").html("Losses: " + losses);



function gameStart() {
    answer = letters[Math.floor(Math.random() * letters.length)];
    console.log(answer);
    guessesLeftVar = 9;
    $("#lastGuess").html("Last Guess: ");
    $("#guessesMade").html("Guesses Made: ");
}

gameStart();

document.onkeyup = function (event) {
    guess = String.fromCharCode(event.which).toLowerCase();
    console.log(guess);

    if (guess === answer) {
        wins++
        $("#winDisplay").html("Wins: " + wins);
        gameStart();
    }



    if (guess !== answer) {
        guessesMadeVar.push(guess);
        guessesLeft--;
        $("#guessesLeft").html("Guesses Left: " + guessesLeftVar);
    }
}
// reset gamestate
// var newGameState = function(){
//     guessesLeft = 9;
//     guessesMade = [];
//     newAnswer = function(){
//         (answer = letters[Math.floor(Math.random() * letters.length)]
//         )}
// }
