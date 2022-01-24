const section = document.querySelector('section');
const numberOfMoves = document.querySelector('span');
const playerMoves = 7

numberOfMoves.textContent = playerMoves

// Cards Object
const cardsArr = () => [
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
// images.src = imgSrc

// Card Randomization Function
const randomize = () => {
    const randomCard = cardsArr();
    randomCard.sort(() => Math.random() - 0.5);
    return randomCard;
};

randomize();

// Card Generator Funciton
const cardGenerator = () => {
    const randomCard = randomize();
    randomCard.forEach(item => {
    const card = document.createElement('div');
    const face = document.createElement('img');
    const back = document.createElement('div');
    card.classList = 'card';
    face.classList = 'face';
    back.classList = 'back';
    face.src = item.imgSrc;
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);
    });
};

cardGenerator();

// Write new round and/or new game functions
// Write function to check for matched cards
// Add if-else functions for if bonus cards are selected
    // Conditional for if 'Instant Match' card is selected
// Write a "Win" & "Lose" function