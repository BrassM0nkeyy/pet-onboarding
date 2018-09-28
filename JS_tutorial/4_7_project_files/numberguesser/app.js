/*
game:
- guess a number between a min and max
- player gets a few guesses
- tell player if they win or lose
- let them choose to play again
*/

//game values
let min = 1,
    max = 10,
    winningNum = getRandom(min, max),
    guessesLeft = 3;

//UI elements
const game  = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessIn = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

//ass ui min max
minNum.textContent = min;
maxNum.textContent = max;


//play again listener delegation
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});

//guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessIn.value);
    console.log(guess);
    //check in
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    //win
    if(guess === winningNum){
        
        gameOver(true, `${winningNum} is correct! Winner!`);

    } else {
        guessesLeft--;
        if(guessesLeft === 0){
            gameOver(false, 'Game Over');
        } else {
            setMessage(`Wrong number, ${guessesLeft} guesses left`, 'red');
            guessIn.style.borderColor = 'red';
        }
    }
});

function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';
    guessIn.disabled = true;
    guessIn.style.borderColor = color;
    message.style.color = color;
    setMessage(msg, color);

    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
    // since play agin happens at run time i need to delegate this function to a parent that is present at runtime   
}


function getRandom(min){
    return Math.floor(Math.random()*(max-min+1) + min);
}

function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}