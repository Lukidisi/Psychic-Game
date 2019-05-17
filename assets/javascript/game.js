var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", 
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeftVar = 9;
var guess = "";
var guessesMadeVar = [];
var answer = "";


$("#winDisplay").html("Wins: " + wins);
$("#lossDisplay").html("Losses: " + losses);
$("#lastGuess").html("Last Guess: " + guess);
$("#guessesLeft").html("Guesses Left: " + guessesLeftVar);
$("#guessesMade").html("Guesses Made: " + guessesMadeVar);

answer = letters[Math.floor(Math.random() * letters.length)];

document.onkeyup = function(event) {
    guess = event.key;
    guessesMade.push(guess);
    guessesLeft--;
}

if (guess === answer){
    wins++;
    guessesLeft = 9;
}

if (guessesLeft === 0){

}
// reset gamestate
// var newGameState = function(){
//     guessesLeft = 9;
//     guessesMade = [];
//     newAnswer = function(){
//         (answer = letters[Math.floor(Math.random() * letters.length)]
//         )}
// }
