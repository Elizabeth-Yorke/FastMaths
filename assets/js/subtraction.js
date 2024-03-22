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
            }
        }
    )}
})

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
    runSubtractionGame(calculatedAnswer[1]);

}

/**
 * Timer to counts down to 0.
 */

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
            let positiveC = document.getElementById("positiveC").innerText;
            let negativeC = document.getElementById("negativeC").innerText;
            alert(`Your time is up! You got ${positiveC} right and ${negativeC} wrong.`);
            location.reload();
        }
    }, 1000);
}

/**
 * Novice Timer to start at 80seconds on click
 */

noviceTimerC.onclick = function () {
    let time = 80, // time in seconds here
        display = document.querySelector('#noviceTimerC');
    startTimer(time, display);
    timers = document.querySelectorAll('.timer');
    console.log("timers", timers);
    timers.forEach((timer) => {        
        timer.setAttribute("disabled", "");
    });
};

/**
 * Intermediate Timer to start at 40 seconds on click
 */

adeptTimerC.onclick = function () {
    let time = 40, // time in seconds here
        display = document.querySelector('#adeptTimerC');
    startTimer(time, display);
    timers = document.querySelectorAll('.timer');
    console.log("timers", timers);
    timers.forEach((timer) => {        
        timer.setAttribute("disabled", "");
    });
};

/**
 * Advanced Timer to start at 20 seconds on click
 */

advancedTimerC.onclick = function () {
    let time = 20, // time in seconds here
        display = document.querySelector('#advancedTimerC');
    startTimer(time, display);
    timers = document.querySelectorAll('.timer');
    console.log("timers", timers);
    timers.forEach((timer) => {        
        timer.setAttribute("disabled", "");
    });
};

