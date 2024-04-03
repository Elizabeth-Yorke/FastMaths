let highscoreA = document.getElementById("highscoreA");
let highscoreAValue = 0;

/**
 * Waits for DOM content to load
 * Listens for actions from user
 * Assigns appropriate functions
 */

document.addEventListener("DOMContentLoaded", function(){
    let clickOns = document.getElementsByClassName("clickOn");
    for (let clickOn of clickOns){
        clickOn.addEventListener("click", function(){
            if (this.id === "questionA") {
                runMultiplicationGame();
            } else if (this.id === "submitA") {
                checkMultiplicationAnswer();
            } else if (this.getAttribute("data-type") === "timer") {
                startTimer(clickOn.id);
            } else if (this.id === "resetA") {
                location.reload();
            }
        }
    );}
});

/**
 * Generates integers between 1 and 12
 * Generates multiplication questions
 */

function runMultiplicationGame() {

    let firstNumber = Math.floor(Math.random() * 11)+1;
    let secondNumber = Math.floor(Math.random() * 11)+1;

    document.getElementById('partA1').textContent = firstNumber;
    document.getElementById('partA2').textContent = secondNumber;

}

/**
 * Checks if user answer is correct
 * Increases appropriate score
 * Sets next question
 */

function checkMultiplicationAnswer() {

    // Reads generated question
    let partA1 = parseInt(document.getElementById('partA1').innerText);
    let partA2 = parseInt(document.getElementById('partA2').innerText);

    // Calculates correct answer
    let calculatedAnswer = partA1 * partA2;

    // Reads user answer
    let userAnswer = parseInt(document.getElementById("answer-box-A").value);

    // Checks if user answer matches correct answer
    let rightAnswer = userAnswer === parseInt(calculatedAnswer);

    // If user answer is correct positive score increases
    if (rightAnswer) {
        let positiveTally = parseInt(document.getElementById("positiveA").innerText);
        document.getElementById("positiveA").innerText = ++positiveTally;

    // If user answer is not correct negative score increases
    } else {
        let negativeTally = parseInt(document.getElementById("negativeA").innerText);
        document.getElementById("negativeA").innerText = ++negativeTally;
    }

    //clears the answer box
    document.getElementById("answer-box-A").value = '';

    //sets the next question
    runMultiplicationGame();

}

function updateHighscore() {

    //retreives latest figures for highscoreA and positiveA
    let positiveA = parseInt(document.getElementById("positiveA").innerText);

    //replaces highscoreA with positiveA if positiveA is greater
    if (positiveA > highscoreAValue){
        highscoreA.innerText = positiveA;
    }
}

/**
 * Resets scores to 0.
 * Resets question numbers to ?
 */

function resetScores() {
    //clears scores
    let positiveA = document.getElementById("positiveA");
    let negativeA = document.getElementById("negativeA");      
    positiveA.innerText = '0';
    negativeA.innerText = '0';
    
    //Sets question numbers to ?
    let partA1 = document.getElementById("partA1");
    let partA2 = document.getElementById("partA2");
    partA1.innerText = '?';
    partA2.innerText = '?';
}

function resetTimers() {
    document.getElementById('noviceTimerA').removeAttribute('disabled');
    document.getElementById('adeptTimerA').removeAttribute('disabled');
    document.getElementById('advancedTimerA').removeAttribute('disabled');
    document.getElementById('noviceTimerA').innerText = 'Novice';
    document.getElementById('adeptTimerA').innerText = 'Adept';
    document.getElementById('advancedTimerA').innerText = 'Advanced';
}

/**
 * Novice Timer to start at 60 seconds on click
 */

let noviceTimerA = document.querySelector('#noviceTimerA');
noviceTimerA.onclick = function () {

    let time = 60; // time in seconds here
    startTimer(time, noviceTimerA);
    let timers = document.querySelectorAll('.timer');
    console.log("timers", timers);
    timers.forEach((timer) => {        
        timer.setAttribute("disabled", "");
    });
};

/**
 * Adept Timer to start at 40 seconds on click
 */

let adeptTimerA = document.querySelector('#adeptTimerA');
adeptTimerA.onclick = function () {

    let time = 40; // time in seconds here
    startTimer(time, adeptTimerA);
    let timers = document.querySelectorAll('.timer');
    console.log("timers", timers);
    timers.forEach((timer) => {        
        timer.setAttribute("disabled", "");
    });
};

/**
 * Advanced Timer to start at 20 seconds on click
 */

let advancedTimerA = document.querySelector('#advancedTimerA');
advancedTimerA.onclick = function () {

    let time = 20; // time in seconds here
    startTimer(time, advancedTimerA);
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
