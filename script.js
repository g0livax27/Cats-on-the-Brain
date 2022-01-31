/*
Issues:
* Cards don't flip back if no match
* "flipped" Class isn't removed so that the flippedCards node is emptied ()
* "toggleCard" Class is only removed when card is clicked again (which flips the card back to it's back)
* line 71: "flipped" Class is not added to cards that are clicked from the Event Listener. Instead line 113 in the Event Listener adds the "flipped" Class, and removes "flipped" Class when card is clicked again
* Restart function does not remove "toggleCard" Class in order to flip cards back nor does it run the randomize(); function to shuffle the cards again
*/

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
// console.log(cardData);

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

// Card Generator Funciton
const cardGenerator = () => {
    const randomizedCards = randomize();
    randomizedCards.forEach(item => {
    // Creating Elements for the cards, and the face/back of each card
    const card = document.createElement('div');
    const face = document.createElement('img');
    const back = document.createElement('div');

    // Adding a Class to the cards, and the face/back of each card
    card.classList = 'card';
    face.classList = 'face';
    back.classList = 'back';

    // Attaching the names and images to the cards from above cardData Array
    card.setAttribute('name', item.name);
    face.src = item.imgSrc;

    // Adding the cards' face/back to DOM via Section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    // Check Cards Function
    const checkCards = (e) => {
        // Declaring clickedCards to be cards clicked on by the Event Listener below
        clickedCards = e.target;
        // Adding a Class of "flipped" to clickedCards so they are stored in the flippedCards node
        clickedCards.classList.add("flipped");
        // Declaring a flippedCards node to add the clickedCards to
        const flippedCards = document.querySelectorAll(".flipped");
        // If the flippedCards node has 2 items inside
        if(flippedCards.length === 2) {
            // Check if the first item's name ==='s the second item's name
            if(flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")) {
              console.log('match');
                // Or if either the first or second item's name === "instantMatch"
                } else if(flippedCards[0].getAttribute("name") === 'instantMatch' || flippedCards[1].getAttribute("name") === 'instantMatch') {
                    console.log('match');
                    // Remove Class of "flipped" so flippedCards node can take 2 new items, and make matched cards unclickable
                    flippedCards.forEach = () => {
                        card.classList.remove("flipped");
                        card.style.pointerEvents = "none";
                    }
                // Or if either the first or second item's name === "instantWin"
                } else if(flippedCards[0].getAttribute("name") === "instantWin" || flippedCards[1].getAttribute("name") === "instantWin") {
                    window.alert("you win");
                    restart();
                // Or if either the first or second item's name === "instantLose"
                } else if(flippedCards[0].getAttribute("name") === "instantLose" || flippedCards[1].getAttribute("name") === "instantLose") {
                    window.alert('you lose');
                    restart();
            } else {
            // Otherwise, no match. Remove the Classes of "toggleCard" and "flipped" so flippedCards node can take 2 new items
            console.log('no match');
            flippedCards.forEach = () => {
                card.classList.remove("flipped");
                setTimeout(() => card.classList.remove('toggleCard'), 2000);
              }
            }
        } if(moves === 0) {
            window.alert('out of moves')
            restart();
          }
    }

    // Event Listener for when a card is clicked
    card.addEventListener('click', (e) => {
        // Adding Classes to the card when clicked
        card.classList.toggle('toggleCard');
        card.classList.toggle('flipped');
        card.getAttribute(item.name);
        // Decrement moves
        moves--;
        movesCount.textContent = moves;
        // Also checking for match when clicked
        checkCards(e);
    });
  });

/* */

    // Restart Game Function
    const restart = () => {
        // Run Card Randomization Function
        randomize();
        // Remove "toggleCard" Class so that card backs are showing
        cardData.forEach = () => {
            card.classList.remove('toggleCard');
        };
        // Reset moves to 7
        moves = 7;
        movesCount.textContent = moves;
    };  

/* */

    // Event Listeners
    const newGameBtnEl = document.querySelector('.new-game');

    newGameBtnEl.addEventListener('click', () => {
        location.reload();
    });

    const restartBtnEl = document.querySelector('.restart');

    restartBtnEl.addEventListener('click', () => {
        location.reload();
    });  
};
cardGenerator();


// Cite Source: Dev Ed via YouTube