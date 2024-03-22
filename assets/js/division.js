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
            }
        }
    )}
})

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
