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
    runDivisionGame(calculatedAnswer[1]);

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
            let positiveD = document.getElementById("positiveD").innerText;
            let negativeD = document.getElementById("negativeD").innerText;
            alert(`Your time is up! You got ${positiveD} right and ${negativeD} wrong.`);
            location.reload();
        }
    }, 1000);
}

/**
 * Novice Timer to start at 80seconds on click
 */

let noviceTimerD = document.querySelector('#noviceTimerD');
noviceTimerD.onclick = function () {
    let time = 80; // time in seconds here
    startTimer(time, noviceTimerD);
    let timers = document.querySelectorAll('.timer');
    console.log("timers", timers);
    timers.forEach((timer) => {        
        timer.setAttribute("disabled", "");
    });
};

/**
 * Intermediate Timer to start at 40 seconds on click
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
    console.log("timers", timers);
    timers.forEach((timer) => {        
        timer.setAttribute("disabled", "");
    });
};
