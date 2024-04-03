// Definitions of variables for use throughout the document
let highscoreB = document.getElementById("highscoreB");
let highscoreBValue = 0;

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
            if (this.id === "questionB") {
                runAdditionGame();
            } else if (this.id === "submitB") {
                checkAdditionAnswer();
            } else if (this.id === "resetB") {
                location.reload();
            }
        }
    );}
});

/**
 * Generates integers between 1 and 12
 * Generates addition questions
 */

function runAdditionGame() {

    let numberB1 = Math.floor(Math.random() * 11)+1;
    let numberB2 = Math.floor(Math.random() * 11)+1;

    document.getElementById('partB1').textContent = numberB1;
    document.getElementById('partB2').textContent = numberB2;

}

/**
 * Checks if user answer is correct
 * Increases appropriate score
 * Sets next question
 */

function checkAdditionAnswer() {

    // Reads generated question
    let partB1 = parseInt(document.getElementById('partB1').innerText);
    let partB2 = parseInt(document.getElementById('partB2').innerText);
    console.log(partB1);
    console.log(partB2);

    // Calculates correct answer
    let calculatedAnswer = partB1 + partB2;
    console.log(calculatedAnswer);

    // Reads user answer
    let userAnswer = parseInt(document.getElementById("answer-box-B").value);
    console.log(userAnswer);

    // Checks if user answer matches correct answer
    let rightAnswer = userAnswer === parseInt(calculatedAnswer);
    console.log(rightAnswer);

    // If user answer is correct positive score increases
    if (rightAnswer) {
        let positiveTally = parseInt(document.getElementById("positiveB").innerText);
        document.getElementById("positiveB").innerText = ++positiveTally;

    // If user answer is not correct negative score increases
    } else {
        let negativeTally = parseInt(document.getElementById("negativeB").innerText);
        document.getElementById("negativeB").innerText = ++negativeTally;
    }

    //clears the answer box
    document.getElementById("answer-box-B").value = '';

    //sets the next question
    runAdditionGame();
}

function updateHighscore() {

    //retreives latest figures for highscoreB and positiveB
    let positiveB = parseInt(document.getElementById("positiveB").innerText);

    //replaces highscoreA with positiveB if positiveB is greater
    if (positiveB > highscoreBValue){
        highscoreBValue = parseInt(positiveB);
        highscoreB.innerText = positiveB;
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
    let positiveB = document.getElementById("positiveB");
    let negativeB = document.getElementById("negativeB");      
    positiveB.innerText = '0';
    negativeB.innerText = '0';
    
    //Sets question numbers to ?
    let partB1 = document.getElementById("partB1");
    let partB2 = document.getElementById("partB2");
    partB1.innerText = '?';
    partB2.innerText = '?';
}

/**
 * Makes it so that the timers can be clicked again
 * Puts the labels back on the timers
 */

function resetTimers() {
    document.getElementById('noviceTimerB').removeAttribute('disabled');
    document.getElementById('adeptTimerB').removeAttribute('disabled');
    document.getElementById('advancedTimerB').removeAttribute('disabled');
    document.getElementById('noviceTimerB').innerText = 'Novice';
    document.getElementById('adeptTimerB').innerText = 'Adept';
    document.getElementById('advancedTimerB').innerText = 'Advanced';
}

/**
 * Novice Timer to start at 60 seconds on click
 */

let noviceTimerB = document.querySelector('#noviceTimerB');
noviceTimerB.onclick = function () {

    let time = 60; // time in seconds here
    startTimer(time, noviceTimerB);
    let timers = document.querySelectorAll('.timer');
    console.log("timers", timers);
    timers.forEach((timer) => {        
        timer.setAttribute("disabled", "");
    });
};

/**
 * Adept Timer to start at 40 seconds on click
 */

let adeptTimerB = document.querySelector('#adeptTimerB');
adeptTimerB.onclick = function () {

    let time = 40; // time in seconds here
    startTimer(time, adeptTimerB);
    let timers = document.querySelectorAll('.timer');
    console.log("timers", timers);
    timers.forEach((timer) => {        
        timer.setAttribute("disabled", "");
    });
};

/**
 * Advanced Timer to start at 20 seconds on click
 */

let advancedTimerB = document.querySelector('#advancedTimerB');
advancedTimerB.onclick = function () {

    let time = 20; // time in seconds here
    startTimer(time, advancedTimerB);
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
