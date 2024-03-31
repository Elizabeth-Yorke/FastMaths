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
    runAdditionGame(calculatedAnswer[1]);

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
            let positiveB = document.getElementById("positiveB").innerText;
            let negativeB = document.getElementById("negativeB").innerText;
            alert(`Your time is up! You got ${positiveB} right and ${negativeB} wrong.`);
            location.reload();
        }
    }, 1000);
}

/**
 * Novice Timer to start at 80seconds on click
 */

let noviceTimerB = document.querySelector('#noviceTimerB');
noviceTimerB.onclick = function () {
    let time = 80; // time in seconds here
    startTimer(time, noviceTimerB);
    let timers = document.querySelectorAll('.timer');
    console.log("timers", timers);
    timers.forEach((timer) => {        
        timer.setAttribute("disabled", "");
    });
};

/**
 * Intermediate Timer to start at 40 seconds on click
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
    console.log("timers", timers);
    timers.forEach((timer) => {        
        timer.setAttribute("disabled", "");
    });
};