// Add items to the DOM
const section = document.querySelector('section');
const movesCount = document.querySelector('span');
let moves = 7

/* */

// Cards Object/Array
const cardData = () => [
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

/* */

// Card Randomization Function
const randomize = () => {
    const randomizedCards = cardData();
    randomizedCards.sort(() => Math.random() - 0.5);
    return randomizedCards;
};
// Randomizes Cards when page loads
window.onload = randomize();

/* */

// const grid = document.querySelector('.grid');
// const cardsChosen = [];
// const cardsChosenId = [];
// const cardsWon = [];

// const createBoard = () => {

// createBoard();

// const flipCard = () => {
//     let cardId = this.getAttribute('data-id');
//     cardsChosen.push(cardData[cardId].name)
//     cardsChosenId.push(cardId);
//     this.setAttribute('src', cardData[cardId].img);
//     if(cardsChosen.length === 2) {
//         setTimeout(checkForMatch, 500)
//     }
// }

// const checkForMatch = () => {
//     const cards = document.querySelectorAll('img');
//     let optionOneId = cardsChosenId[0];
//     let optionTwoId = cardsChosenId[1];
//     if(cardsChosen[0] === cardsChosen[1]) {
//         console.log('Match');
//         cards[optionOneId].setAttribute('src', './images/cardfront.jpg');
//         cards[optionTwoId].setAttribute('src', './images/cardfront.jpg');
//         cardsWon.push(cardsChosen);
//     } else {
//         cards[optionOneId].setAttribute('src', './images.cardback.jpg');
//         cards[optionOneId].setAttribute('src', './images.cardback.jpg');
//         console.log('Try Again')
//     }
//     cardsChosen = [];
//     cardsChosenId = [];
// }

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

    // Event Listener for when a card is clicked
    card.addEventListener('click', (e) => {
        card.classList.toggle('toggleCard') 
        card.classList.add('flipped');
        checkForMatches(e);
        });
     });
};
cardGenerator();

/* */

// Event Listeners
const newGameBtnEl = document.querySelector('.new-game');

newGameBtnEl.addEventListener('click', () => {
    location.reload();
});