
    // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var guessesSoFar = [];
    
    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
      // Determines which key was pressed.
      var userGuess = event.key;
      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      // Reworked our code from last step to use "else if" instead of lots of if statements.

      guessesSoFar.push(userGuess); //pushing user guess to guesses so far
      // This logic determines the outcome of the game (win/loss/guess left/guesses so far), and increments the appropriate number
      if (
        (userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")
        )
       {

        if ((userGuess === "a") && (computerGuess === "a")) {
          wins++;
        } else if ((userGuess === "b") && (computerGuess === "b")) {
          losses++;
        } 

        else if (userGuess === computerGuess) {
          wins++;
        }

        else if (guessesLeft <= 10) {
          guessesLeft--;
        }

        else if (userGuess !== computerGuess){
            guessesSoFar++; //decrementing the guesses left
        } 

     
        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        var html =

          "<p>You chose: " + userGuess + "</p>" +
          "<p>The computer chose: " + computerGuess + "</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses Left: " + guessesLeft + "</p>" +
          "<p>Guesses So Far: " + guessesSoFar + "</p>";
        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
      }
    };
