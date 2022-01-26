// Add items to the DOM
const section = document.querySelector('section');
const playerMoves = document.querySelector('span');

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
    // Attach the images and names to the cards
    face.src = item.imgSrc;
    card.setAttribute('name', item.name);
    // Add the cards to DOM via Section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);
    card.addEventListener('click', (e) => {
        card.classList.toggle('toggleCard');
        checkForMatches(e);
        });
    });
};
cardGenerator();

// Check for Matches
const checkForMatches = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add('flipped');
}

// Player Moves


// Event Listeners
const newGameBtnEl = document.querySelector('.new-game');

newGameBtnEl.addEventListener('click', () => {
    location.reload();
});




// Write new round and/or new game functions
// Write function to check for matched cards
// Add if-else functions for if bonus cards are selected
    // Conditional for if 'Instant Match' card is selected
// Write a "Win" & "Lose" function