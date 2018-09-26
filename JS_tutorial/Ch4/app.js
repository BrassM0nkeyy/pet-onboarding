const score1 = document.getElementById('score1');
console.log(score1);
// score1.innerHTML = 1;
// console.log(score1);
const score2 = document.getElementById('score2');
let draw1 = document.getElementById('dr1');
let draw2 = document.getElementById('dr2');
const hold1 = document.getElementById('hl1');
const hold2 = document.getElementById('hl2');

//retrieves the number of the score element
let numScore1 = Number(score1.innerHTML);
let numScore2 = Number(score2.innerHTML);

let holdVal1 = false;
let holdVal2 = false;

hold1.addEventListener("click", 
function (){
    holdVal1 = true;
});

hold2.addEventListener("click", 
function(){
    holdVal2 = true;
});

draw1.addEventListener("click", drawFun1);

function drawFun1(e){
    //picks a number from 1 to 10
    let picked = Math.ceil(Math.random() * 10);

    numScore1 += picked;
    console.log("numScore1: "+numScore1);
    console.log("numScore2: " + numScore2);

    if(numScore1 > 21){
        window.alert("Player 2 Wins");
        numScore1 = 0;
        numScore2 = 0;
        holdVal2 = false;
        score2.innerHTML = numScore1;
    }  else if(holdVal2 === true & numScore1 > numScore2){
        window.alert("Player 1 Wins");
        numScore1 = 0;
        numScore2 = 0;
        holdVal2 = false;
        score2.innerHTML = numScore1;
    }

    score1.innerHTML = numScore1;
      
}

draw2.addEventListener("click", drawFun2);

function drawFun2(e){
    //picks a number from 1 to 10
    let picked = Math.ceil(Math.random() * 10);

    numScore2 += picked;
    console.log("numScore1: "+numScore1);
    console.log("numScore2: " + numScore2);    

    if(numScore2 > 21){
        window.alert("Player 1 Wins");
        numScore1 = 0;
        numScore2 = 0;
        score1.innerHTML = numScore1;
    } else if (holdVal1 === true & numScore2 > numScore1){
        window.alert("Player 2 Wins");
        numScore1 = 0;
        numScore2 = 0;
        score1.innerHTML = numScore1;
    }
    score2.innerHTML = numScore2;   
}

