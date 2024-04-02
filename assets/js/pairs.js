/**
 * Function to generate pairs of questions with the same answer
 */

function startPairs() {

    let pairA1 = Math.floor(Math.random() * 4)+1;
    let pairA2 = Math.floor(Math.random() * 4)+1;
    let pairA3 = Math.floor(Math.random() * 4)+1;

    document.getElementById('num14A').textContent = pairA1;
    document.getElementById('num14B').textContent = pairA2;
    document.getElementById('num32A').textContent = pairA1*pairA2*pairA3;
    document.getElementById('num32B').textContent = pairA3;

    let pairB1 = Math.floor(Math.random() * 11)+1;
    let pairB2 = Math.floor(Math.random() * 11)+1;
    let pairB3 = Math.floor(Math.random() * 11)+1;

    document.getElementById('num24A').textContent = pairB2-pairB3;
    document.getElementById('num24B').textContent = pairB3;
    document.getElementById('num44A').textContent = pairB1*pairB2;
    document.getElementById('num44B').textContent = pairB1;

    let pairC1 = Math.floor(Math.random() * 11)+1;
    let pairC2 = Math.floor(Math.random() * 11)+1;
    let pairC3 = Math.floor(Math.random() * 11)+1;

    document.getElementById('num34A').textContent = pairC1+pairC2;
    document.getElementById('num34B').textContent = pairC2;
    document.getElementById('num33A').textContent = pairC1+pairC3;
    document.getElementById('num33B').textContent = pairC3;

    let pairD1 = Math.floor(Math.random() * 11)+1;
    let pairD2 = Math.floor(Math.random() * 11)+1;
    let pairD3 = Math.floor(Math.random() * 11)+1;

    document.getElementById('num12A').textContent = pairD1*pairD2+pairD3;
    document.getElementById('num12B').textContent = pairD3;
    document.getElementById('num43A').textContent = pairD1;
    document.getElementById('num43B').textContent = pairD2;

    let pairE1 = Math.floor(Math.random() * 11)+1;
    let pairE2 = Math.floor(Math.random() * 11)+1;
    let pairE3 = Math.floor(Math.random() * 11)+1;

    document.getElementById('num13A').textContent = pairE1*pairE2;
    document.getElementById('num13B').textContent = pairE2;
    document.getElementById('num22A').textContent = pairE3+pairE1;
    document.getElementById('num22B').textContent = pairE3;

    let pairF1 = Math.floor(Math.random() * 11)+1;
    let pairF2 = Math.floor(Math.random() * 11)+1;
    let pairF3 = Math.floor(Math.random() * 11)+1;

    document.getElementById('num11A').textContent = pairF1*pairF2-pairF3;
    document.getElementById('num11B').textContent = pairF3;
    document.getElementById('num23A').textContent = pairF1;
    document.getElementById('num23B').textContent = pairF2;

    let pairG1 = Math.floor(Math.random() * 11)+1;
    let pairG2 = Math.floor(Math.random() * 11)+1;
    let pairG3 = Math.floor(Math.random() * 11)+1;

    document.getElementById('num31A').textContent = pairG1;
    document.getElementById('num31B').textContent = pairG2;
    document.getElementById('num41A').textContent = pairG1*pairG2-pairG3;
    document.getElementById('num41B').textContent = pairG3;

    let pairH1 = Math.floor(Math.random() * 11)+1;
    let pairH2 = Math.floor(Math.random() * 11)+1;
    let pairH3 = Math.floor(Math.random() * 11)+1;

    document.getElementById('num21A').textContent = pairH1*pairH2;
    document.getElementById('num21B').textContent = pairH1;
    document.getElementById('num42A').textContent = pairH2-pairH3;
    document.getElementById('num42B').textContent = pairH3;
}

/**
 *  Function changes color of box that user clicks on.
 *  Then returns box to original color if clicked again.
 */

let selectedCards = [];

function selectCard(card) {

    if (selectedCards.length === 2 && !selectedCards.includes(card)){
        return;
    }
    
    if (selectedCards.includes(card)) {
        card.classList.remove('selectedBox');
        selectedCards = selectedCards.filter(item => item !== card);
    } else {
        card.classList.add('selectedBox');
        selectedCards.push(card);
    }

    if (selectedCards.length === 2) {
        console.log('Selected cards:',selectedCards);
    }
}

/**
 * Event listeners
 */

document.addEventListener("DOMContentLoaded", function(){

    let startButton = document.getElementById("startButton");
    startButton.addEventListener("click", startPairs);

    let cards = document.getElementsByClassName("card");
    for (let card of cards){
        card.addEventListener("click", selectCard);
    }
});

