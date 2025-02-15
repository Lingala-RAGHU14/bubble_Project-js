var ranNum = 0;
var score = 0 
function increaseScore() {
    score += 10;
    document.querySelector("#incscore").textContent = score;
}

function getNewHit() {
    ranNum = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = ranNum;
}

function bubbleMaker() {
    var clutter = ""
for (var i= 1; i<=184;i++) {
    let ran = Math.floor(Math.random()*10)
    clutter += `<div class='bubble'>${ran}</div>`  
}
document.querySelector("#pbtm").innerHTML = clutter;
}

var timer = 60; 
function runTimer() {
    var timerint = setInterval(function(){
    if(timer>0) {
        timer--;
    document.querySelector("#timerval").textContent = timer;
    }
    else {
        clearInterval(timerint)
        document.querySelector("#pbtm").innerHTML= `<h1> Lights Out, Game is Over...! Your score is  ${score} </h>`
    }
},1000);
}
document.querySelector("#pbtm")
.addEventListener("click",function(details) {
   var clickedNum = (Number(details.target.textContent)); 
   if(clickedNum === ranNum) {
        increaseScore()
        bubbleMaker();
        getNewHit()
        
   }
});
runTimer();
bubbleMaker();
getNewHit();
