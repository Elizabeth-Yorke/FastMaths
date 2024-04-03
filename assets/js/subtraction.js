// Definitions of variables for use throughout the document
let highscoreC = document.getElementById("highscoreC");
let highscoreCValue = 0;

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
            if (this.id === "questionC") {
                runSubtractionGame();
            } else if (this.id === "submitC") {
                checkSubtractionAnswer();
            } else if (this.id === "resetC") {
                location.reload();
            }
        }
    );}
});

/**
 * Generates integers between 1 and 12
 * Generates subtraction questions
 */

function runSubtractionGame() {

    let numberC1 = Math.floor(Math.random() * 11)+1;
    let numberC2 = Math.floor(Math.random() * 11)+1;

    document.getElementById('partC1').textContent = numberC1 + numberC2;
    document.getElementById('partC2').textContent = numberC2;

}

/**
 * Checks if user answer is correct
 * Increases appropriate score
 * Sets next question
 */

function checkSubtractionAnswer() {

    // Reads generated question
    let partC1 = parseInt(document.getElementById('partC1').innerText);
    let partC2 = parseInt(document.getElementById('partC2').innerText);
    console.log(partC1);
    console.log(partC2);

    // Calculates correct answer
    let calculatedAnswer = partC1 - partC2;
    console.log(calculatedAnswer);

    // Reads user answer
    let userAnswer = parseInt(document.getElementById("answer-box-C").value);
    console.log(userAnswer);

    // Checks if user answer matches correct answer
    let rightAnswer = userAnswer === parseInt(calculatedAnswer);
    console.log(rightAnswer);

    // If user answer is correct positive score increases
    if (rightAnswer) {
        let positiveTally = parseInt(document.getElementById("positiveC").innerText);
        document.getElementById("positiveC").innerText = ++positiveTally;

    // If user answer is not correct negative score increases
    } else {
        let negativeTally = parseInt(document.getElementById("negativeC").innerText);
        document.getElementById("negativeC").innerText = ++negativeTally;
    }

    //clears the answer box
    document.getElementById("answer-box-C").value = '';

    //sets the next question
    runSubtractionGame();
}

function updateHighscore() {

    //retreives latest figures for highscoreC and positiveC
    let positiveC = parseInt(document.getElementById("positiveC").innerText);

    //replaces highscoreC with positiveC if positiveC is greater
    if (positiveC > highscoreCValue){
        highscoreCValue = parseInt(positiveC);
        highscoreC.innerText = positiveC;
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
    let positiveC = document.getElementById("positiveC");
    let negativeC = document.getElementById("negativeC");      
    positiveC.innerText = '0';
    negativeC.innerText = '0';
    
    //Sets question numbers to ?
    let partC1 = document.getElementById("partC1");
    let partC2 = document.getElementById("partC2");
    partC1.innerText = '?';
    partC2.innerText = '?';
}

/**
 * Makes it so that the timers can be clicked again
 * Puts the labels back on the timers
 */

function resetTimers() {
    document.getElementById('noviceTimerC').removeAttribute('disabled');
    document.getElementById('adeptTimerC').removeAttribute('disabled');
    document.getElementById('advancedTimerC').removeAttribute('disabled');
    document.getElementById('noviceTimerC').innerText = 'Novice';
    document.getElementById('adeptTimerC').innerText = 'Adept';
    document.getElementById('advancedTimerC').innerText = 'Advanced';
}

/**
 * Novice Timer to start at 60 seconds on click
 */

let noviceTimerC = document.querySelector('#noviceTimerC');
noviceTimerC.onclick = function () {
    resetScores();
    let time = 60; // time in seconds here
    startTimer(time, noviceTimerC);
    let timers = document.querySelectorAll('.timer');
    console.log("timers", timers);
    timers.forEach((timer) => {        
        timer.setAttribute("disabled", "");
    });
};

/**
 * Adept Timer to start at 40 seconds on click
 */

let adeptTimerC = document.querySelector('#adeptTimerC');
adeptTimerC.onclick = function () {
    resetScores();
    let time = 40; // time in seconds here
    startTimer(time, adeptTimerC);
    let timers = document.querySelectorAll('.timer');
    console.log("timers", timers);
    timers.forEach((timer) => {        
        timer.setAttribute("disabled", "");
    });
};

/**
 * Advanced Timer to start at 20 seconds on click
 */

let advancedTimerC = document.querySelector('#advancedTimerC');
advancedTimerC.onclick = function () {
    resetScores();
    let time = 20; // time in seconds here
    startTimer(time, advancedTimerC);
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
            resetTimers();
        }
    }, 1000);
}
