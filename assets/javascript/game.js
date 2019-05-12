var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", 
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guess = "";
var guessesMade = [];
var answer = "";


answer = letters[Math.floor(Math.random() * letters.length)];

document.onkeyup = function(event) {
    guess = event.key;
    document.$("#lastGuess").append(guess);
    guessesLeft--;
}

if (guess === answer){
    win++;
    
}

// reset gamestate
var newGameState = function(){
    guessesLeft = 9;
    guessesMade = [];
    newAnswer = function
        answer = letters[Math.floor(Math.random() * letters.length)];
}