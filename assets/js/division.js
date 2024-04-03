// Definitions of variables for use throughout the document
let highscoreD = document.getElementById("highscoreD");
let highscoreDValue = 0;

/**
 * Waits for DOM content to load
 * Listens for actions from user
 * Assigns appropriate functions
 */

document.addEventListener("DOMContentLoaded", function(){
    let clickOns = document.getElementsByClassName("clickOn");
    console.log("clickOns", clickOns);
    for (let clickOn of clickOns){
        clickOn.addEventListener("click", function(){
            if (this.id === "questionD") {
                runDivisionGame();
            } else if (this.id === "submitD") {
                checkDivisionAnswer();
            } else if (this.id === "resetD") {
                location.reload();
            }
        }
    );}
});

/**
 * Generates integers between 1 and 12
 * Generates division questions
 */

function runDivisionGame() {

    let numberD1 = Math.floor(Math.random() * 11)+1;
    let numberD2 = Math.floor(Math.random() * 11)+1;

    document.getElementById('partD1').textContent = numberD1 * numberD2;
    document.getElementById('partD2').textContent = numberD2;

}

/**
 * Checks if user answer is correct
 * Increases appropriate score
 * Sets next question
 */

function checkDivisionAnswer() {

    // Reads generated question
    let partD1 = parseInt(document.getElementById('partD1').innerText);
    let partD2 = parseInt(document.getElementById('partD2').innerText);
    console.log(partD1);
    console.log(partD2);

    // Calculates correct answer
    let calculatedAnswer = partD1 / partD2;
    console.log(calculatedAnswer);

    // Reads user answer
    let userAnswer = parseInt(document.getElementById("answer-box-D").value);
    console.log(userAnswer);

    // Checks if user answer matches correct answer
    let rightAnswer = userAnswer === parseInt(calculatedAnswer);
    console.log(rightAnswer);

    // If user answer is correct positive score increases
    if (rightAnswer) {
        let positiveTally = parseInt(document.getElementById("positiveD").innerText);
        document.getElementById("positiveD").innerText = ++positiveTally;

    // If user answer is not correct negative score increases
    } else {
        let negativeTally = parseInt(document.getElementById("negativeD").innerText);
        document.getElementById("negativeD").innerText = ++negativeTally;
    }

    //clears the answer box
    document.getElementById("answer-box-D").value = '';

    //sets the next question
    runDivisionGame();
}

function updateHighscore() {

    //retreives latest figures for highscoreD and positiveD
    let positiveD = parseInt(document.getElementById("positiveD").innerText);

    //replaces highscoreD with positiveD if positiveD is greater
    if (positiveD > highscoreDValue){
        highscoreDValue = parseInt(positiveD);
        highscoreD.innerText = positiveD;
    } else {
        return;
    }
}

/**
 * Resets scores to 0.
 * Resets question numbers to ?
 */

function resetScores() {
    //clears scores
    let positiveD = document.getElementById("positiveD");
    let negativeD = document.getElementById("negativeD");      
    positiveD.innerText = '0';
    negativeD.innerText = '0';
    
    //Sets question numbers to ?
    let partD1 = document.getElementById("partD1");
    let partD2 = document.getElementById("partD2");
    partD1.innerText = '?';
    partD2.innerText = '?';
}

/**
 * Makes it so that the timers can be clicked again
 * Puts the labels back on the timers
 */

function resetTimers() {
    document.getElementById('noviceTimerD').removeAttribute('disabled');
    document.getElementById('adeptTimerD').removeAttribute('disabled');
    document.getElementById('advancedTimerD').removeAttribute('disabled');
    document.getElementById('noviceTimerD').innerText = 'Novice';
    document.getElementById('adeptTimerD').innerText = 'Adept';
    document.getElementById('advancedTimerD').innerText = 'Advanced';
}

/**
 * Novice Timer to start at 60 seconds on click
 */

let noviceTimerD = document.querySelector('#noviceTimerD');
noviceTimerD.onclick = function () {

    let time = 60; // time in seconds here
    startTimer(time, noviceTimerD);
    let timers = document.querySelectorAll('.timer');
    console.log("timers", timers);
    timers.forEach((timer) => {        
        timer.setAttribute("disabled", "");
    });
};

/**
 * Adept Timer to start at 40 seconds on click
 */

let adeptTimerD = document.querySelector('#adeptTimerD');
adeptTimerD.onclick = function () {

    let time = 40; // time in seconds here
    startTimer(time, adeptTimerD);
    let timers = document.querySelectorAll('.timer');
    console.log("timers", timers);
    timers.forEach((timer) => {        
        timer.setAttribute("disabled", "");
    });
};

/**
 * Advanced Timer to start at 20 seconds on click
 */

let advancedTimerD = document.querySelector('#advancedTimerD');
advancedTimerD.onclick = function () {

    let time = 20; // time in seconds here
    startTimer(time, advancedTimerD);
    let timers = document.querySelectorAll('.timer');
    timers.forEach((timer) => {        
        timer.setAttribute("disabled", "");
    });
};

/**
 * Timer counts down
 */

function startTimer(sec, display){
    var timer = setInterval(function(){
        display.innerHTML= +sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            updateHighscore();
            resetScores();
            resetTimers();
        }
    }, 1000);
}
