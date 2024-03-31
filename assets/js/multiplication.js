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
    console.log(partA1);
    console.log(partA2);

    // Calculates correct answer
    let calculatedAnswer = partA1 * partA2;
    console.log(calculatedAnswer);

    // Reads user answer
    let userAnswer = parseInt(document.getElementById("answer-box-A").value);
    console.log(userAnswer);

    // Checks if user answer matches correct answer
    let rightAnswer = userAnswer === parseInt(calculatedAnswer);
    console.log(rightAnswer);

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

/**
 * Timer to counts down to 0.
 */

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
            let positiveA = document.getElementById("positiveA").innerText;
            let negativeA = document.getElementById("negativeA").innerText;
            alert(`Your time is up! You got ${positiveA} right and ${negativeA} wrong.`);
            location.reload();
        }
    }, 1000);
}

/**
 * Novice Timer to start at 80seconds on click
 */
let noviceTimerA = document.querySelector('#noviceTimerA');
noviceTimerA.onclick = function () {
    let time = 80; // time in seconds here
    startTimer(time, noviceTimerA);
    let timers = document.querySelectorAll('.timer');
    console.log("timers", timers);
    timers.forEach((timer) => {        
        timer.setAttribute("disabled", "");
    });
};

/**
 * Intermediate Timer to start at 40 seconds on click
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
    console.log("timers", timers);
    timers.forEach((timer) => {        
        timer.setAttribute("disabled", "");
    });
};