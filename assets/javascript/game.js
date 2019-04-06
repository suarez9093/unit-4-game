// Variables
// ==================================================================
var randomScore = Math.floor(Math.random()*101+19);
var tonyValue = Math.floor(Math.random()*12+1);
var trixValue = Math.floor(Math.random()*12+1);
var cocoValue = Math.floor(Math.random()*12+1);
var luckyValue = Math.floor(Math.random()*12+1);
var wins = 0; 
var losses = 0;
var playerScore = 0;
var totalScore = 0;
$("#random-number").text("Score: " + randomScore);

console.log("random score " + randomScore)
console.log("tony " + tonyValue)
console.log("trix " + trixValue)
console.log("coco " + cocoValue)
console.log("lucky " + luckyValue)


// Functions
// ===============================================================
$(document).ready()


// Reset Game
function resetGame() 
{
    // // Resets the player score to 0
    playerScore = 0;

   // Resets the value of the random number 
    randomScore = Math.floor(Math.random()*101+19);
    console.log("random score", randomScore);

    // Resets the character values
    tonyValue = Math.floor(Math.random()*12+1);
    trixValue = Math.floor(Math.random()*12+1);
    cocoValue = Math.floor(Math.random()*12+1);
    luckyValue = Math.floor(Math.random()*12+1);

    // reset the player-score html
    $("#player-score").text("Your total score is: " + playerScore);   
    
    // reset the random score HTML
    $("#random-number").text("Score: " + randomScore);

    console.log("reset random score " + randomScore);
    console.log("reset tony " + tonyValue);
    console.log("reset trix " + trixValue);
    console.log("reset coco " + cocoValue);
    console.log("reset lucky " + luckyValue);

}
// When Tony is clicked
function tonyIncrement()
{
    
    playerScore+=tonyValue;
    console.log(playerScore);
    $("#player-score").text("Your total score is: " + playerScore);   
    checkWin();
}
// When Trix is clicked
function trixIncrement()
{
    playerScore+=trixValue;
    console.log(playerScore);
    $("#player-score").text("Your total score is: " + playerScore);   
    checkWin();
}
// When Coco is clicked
function cocoIncrement()
{
    playerScore+=cocoValue;
    console.log(playerScore);
    $("#player-score").text("Your total score is: " + playerScore);   
    checkWin();
}
// When Lucky is clicked
function luckyIncrement()
{
    playerScore+=luckyValue;
    console.log(playerScore);
    $("#player-score").text("Your total score is: " + playerScore);   
    checkWin();
}
// If playerScore matches randomScore
function win() 
{
    alert("You win!");
    wins++;
    resetGame();
    $("#wins").text("Wins: " + wins);
}
// If playerScore does not match randomScore
function lose() 
{
    alert("lose");
    losses++;
    resetGame();
}
// When Characters are clicked check to see if it's a win
function checkWin() 
{
    if(playerScore === randomScore)
    {
        alert("You win!")
        wins++;
        $("#wins").text("Wins: " + wins);
        resetGame();
        
    }  else if (playerScore > randomScore)
        {
            alert("You lose!");
            losses++;
            $("#losses").text("Losses: " + losses);
            resetGame();
        }
}


// Clicks for characters
// ========================================================================

$("#tony").on("click" , function() 
{
    tonyIncrement();
});

$("#coco").on("click" , function() 
{
   cocoIncrement();
});

$("#lucky").on("click" , function() 
{
    luckyIncrement();
});

$("#trix").on("click" , function() 
{
    trixIncrement()
});
