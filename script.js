// Add items to the DOM
const section = document.querySelector('section');
const playerMovesCount = document.querySelector('span');
const para1 = document.querySelector('#p1');
const para2 = document.querySelector('#p2');
let playerMoves = 0

playerMovesCount.textContent = playerMoves;



// Player Class
class Player {
    constructor() {
        this.score = 0;
        this.moves = 0;
    }
    // Player Moves Count Method (for loop? needs to iterate the number of clicks on a card & moveCount needs to reset at the end of each round)
    // moveCount() {
        // this.moves +=1; (or just do playerMoves++, but has to tie with the clickedCard())
    // }
    // Player Score Method (tracked via conditional of whether player wins or loses round)
    // score() {
        // this.score += 1;
    // }
}

// Player 1 Instantiation
const playerOne = new Player();
// console.log(playerOne);

// Player 2 Instantiation
const playerTwo = new Player();
// console.log(playerTwo);

// Cards Object
const cardsData = () => [
    { name: 'iceCreamCat', imgSrc: './images/memory_game_card1.jpg' },
    { name: 'iceCreamCat', imgSrc: './images/memory_game_card1.jpg' },
    { name: 'cookieCat', imgSrc: './images/memory_game_card2.jpg' },
    { name: 'cookieCat', imgSrc: './images/memory_game_card2.jpg' },
    { name: 'bobaCat', imgSrc: './images/memory_game_card3.jpg' },
    { name: 'bobaCat', imgSrc: './images/memory_game_card3.jpg' },
    { name: 'instantWin', imgSrc: './images/memory_game_bonus_card1.jpg' },
    { name: 'instantLose', imgSrc: './images/memory_game_bonus_card2.jpg' },
    { name: 'instantMatch', imgSrc: './images/memory_game_bonus_card3.jpg' },
];

// Card Randomization Function
const randomize = () => {
    const randomizedCards = cardsData();
    randomizedCards.sort(() => Math.random() - 0.5);
    return randomizedCards;
};
randomize();

// Card Generator Funciton
const cardGenerator = () => {
    const randomizedCards = randomize();
    randomizedCards.forEach(item => {
    const card = document.createElement('div');
    const face = document.createElement('img');
    const back = document.createElement('div');
    card.classList = 'card';
    face.classList = 'face';
    back.classList = 'back';

    // Attach the names and images to the cards from above cardsData Array
    card.setAttribute('name', item.name);
    face.src = item.imgSrc;

    // Add the cards to DOM via Section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);
    // EventListener for when a card is clicked
    card.addEventListener('click', () => {
        card.classList.toggle('toggleCard');
        checkForMatches();
        });
    });
};


// Check for Matches
const checkForMatches = () => {
    const clickedCard = [];
    // Add class of 'flipped' to cards so we can run a check for matches
    // clickedCard.classList.add('flipped');
    const flippedCards = []; //document.querySelectorAll('.flipped');
    // If 2 cards are clicked
    if(flippedCards.length === 2) {
        // Check to see if the 1st card's name equals the 2nd card's name
        if(flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name'));
        // If yes, it's a match
        // window.alert('You Found a Match');
        // Remove the 'flipped' class from cards so card stays flipped up because it's a match, and they cannot be clicked again
        flippedCards.forEach(card => {
            // card.classList.remove('flipped');
            card.style.pointerEvents = 'none';
        })
    } else {
        // Else, it's not a match
        // window.alert('Try Again!');
        // Remove the 'flipped' and 'toggleCard' classes so other cards can be clicked and wrong cards flip back to be hidden
        flippedCards.forEach(card => {
            // card.classList.remove('flipped');
            card.classList.remove('toggleCard');
            // Set a delay for the cards to be flipped back
            setTimeout(() => card.classList.remove('toggleCard'), 1000);
            })
        }
    }
    cardGenerator();

// Event Listeners
const newGameBtnEl = document.querySelector('.new-game');

newGameBtnEl.addEventListener('click', () => {
    location.reload();
});



/*
Write new round and/or new game functions
Write function to check for matched cards
Add if-else functions for if bonus cards are selected
    Conditional for if 'Instant Match' card is selected
Write a "Win" & "Lose" function
*/