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
            }
        }
    )}
})

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
        let positiveTally = parseInt(document.getElementById("positive-score").innerText);
        document.getElementById("positive-score").innerText = ++positiveTally;

    // If user answer is not correct negative score increases
    } else {
        let negativeTally = parseInt(document.getElementById("negative-score").innerText);
        document.getElementById("negative-score").innerText = ++negativeTally;
    }

    //clears the answer box
    document.getElementById("answer-box-A").value = '';

    //sets the next question
    runMultiplicationGame(calculatedAnswer[1]);

}
