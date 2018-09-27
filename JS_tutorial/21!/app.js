const score1 = document.getElementById('score1');
const card = document.getElementById('num');
const score2 = document.getElementById('score2');
let draw1 = document.getElementById('dr1');
let draw2 = document.getElementById('dr2');
const hold1 = document.getElementById('hl1');
const hold2 = document.getElementById('hl2');

//retrieves the number of the score element
let numScore1 = Number(score1.innerHTML);
let numScore2 = Number(score2.innerHTML);
let cardNum = Number

//initalizes the hold button to off
let holdVal1 = false;
let holdVal2 = false;

//changes the hold button on and recolors it
hold1.addEventListener("click", 
function (){
    document.getElementById('hDiv1').style.backgroundColor = '#683328';
    holdVal1 = true;
});

hold2.addEventListener("click", 
function(){
    document.getElementById('hDiv2').style.backgroundColor = '#683328';
    holdVal2 = true;
});


draw1.addEventListener("click", drawFun1);

function drawFun1(e){
    //picks a number from 1 to 10
    let picked = Math.ceil(Math.random() * 10);
    card.innerHTML = picked;

    numScore1 += picked;

    //checks if p2 score is over 21 if not it checks if p1 is holding and if p2 > p1
    if(numScore1 > 21){
        setTimeout(function(){
            window.alert("Player 2 Wins");
            restartGame();
        }, 50);
    }  else if(holdVal2 === true & numScore1 > numScore2){
        setTimeout(function(){
            window.alert("Player 1 Wins");
            restartGame();
        }, 50);
    }

    score1.innerHTML = numScore1;
}

draw2.addEventListener("click", drawFun2);

function drawFun2(e){
    //picks a number from 1 to 10
    let picked = Math.ceil(Math.random() * 10);
    card.innerHTML = picked;
    numScore2 += picked;  

    //checks if p2 score is over 21 if not it checks if p1 is holding and if p2 > p1
    if(numScore2 > 21){
        setTimeout(function(){
        window.alert("Player 1 Wins");
        restartGame();
        }, 50);
    } else if (holdVal1 === true & numScore2 > numScore1){
        setTimeout(function(){
        window.alert("Player 2 Wins");
        restartGame();
        }, 50);
    }

    score2.innerHTML = numScore2;
}

//sets the game to its defult settings
function restartGame(){
    holdVal2 = false;
    holdVal1 = false;
    numScore1 = 0;
    numScore2 = 0;
    document.getElementById('hDiv1').style.backgroundColor = '#644E5B';
    document.getElementById('hDiv2').style.backgroundColor = '#644E5B';
    score2.innerHTML = numScore2;
    score1.innerHTML = numScore1;
    card.innerHTML = 0;
}