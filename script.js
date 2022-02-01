// Add items to the DOM
const section = document.querySelector('section');
const movesCount = document.querySelector('span');
let moves = 7

/* */

// Cards Object/Array
const cardData = () => [
    { name: 'cat', imgSrc: './images/cat-yarn.jpg' },
    { name: 'yarn', imgSrc: './images/ball-of-yarn.jpg' },
    { name: 'yarn', imgSrc: './images/ball-of-yarn.jpg' },
    { name: 'yarn', imgSrc: './images/ball-of-yarn.jpg' },
    { name: 'yarn', imgSrc: './images/ball-of-yarn.jpg' },
    { name: 'yarn', imgSrc: './images/ball-of-yarn.jpg' },
    { name: 'yarn', imgSrc: './images/ball-of-yarn.jpg' },
    { name: 'yarn', imgSrc: './images/ball-of-yarn.jpg' },
    { name: 'yarn', imgSrc: './images/ball-of-yarn.jpg' },
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
    const findCat = (e) => {
        // Declare a variable clickedCards for cards that the Event Listener is called on
        clickedCards = e.target.name;
        // If the winning card is clicked on the last move
        if(moves === 0 && item.name === 'cat') {
            setTimeout(() => {
                window.alert('found him just in time! play again!');
            }, 1000);
            setTimeout(() => {
                location.reload();}, 2000);
        }
        // If the winning card is clicked
        else if(item.name === 'cat') {
            setTimeout(() => {
                window.alert('winner! you found him!');
            }, 1000);
            setTimeout(() => {
                location.reload();}, 2000);
        }
        // If no moves remain
        else if(moves === 0) {
            setTimeout(() => {
                window.alert('out of moves, try again')
            }, 1000);
            setTimeout(() => {
                location.reload();
            }, 2000);
        }
      };
    
/* */    

    // Event Listener for when a card is clicked
    card.addEventListener('click', (e) => {
        // Add toggleCard Class to the card when clicked
        card.classList.add('toggleCard');
        card.getAttribute(item.name);
        // Decrement moves
        moves--;
        movesCount.innerHTML = moves;
        findCat(e);
    });

    const restartBtnEl = document.querySelector('.restart');

    restartBtnEl.addEventListener('click', () => {
        location.reload();
    }); 
  });  
};
cardGenerator();

/* */

// Original Game Idea Code: //
/*
Issues:
* Cards don't flip back if no match
* "flipped" Class isn't removed so that the flippedCards array is emptied to be able to accept two more items
* "toggleCard" Class is only removed when card is clicked again (which flips the card back to it's back and uses a move)
* line 71: "flipped" Class is not added to cards that are clicked from the Event Listener. Instead line 113 in the Event Listener adds the "flipped" Class, and removes "flipped" Class when card is clicked again (which flips the card back to it's back and uses a move)
* When Restart function is ran, it does not remove "toggleCard" Class in order to flip cards back nor does it run the randomize(); function to shuffle the cards again
* Window alerts pop up before the card is flipped
*/

// Add items to the DOM
// const section = document.querySelector('section');
// const movesCount = document.querySelector('span');
// let moves = 7
// const cardsFlipped = [];

// const cardData = () => [
//     { name: 'iceCreamCat', imgSrc: './images/memory_game_card1.jpg' },
//     { name: 'iceCreamCat', imgSrc: './images/memory_game_card1.jpg' },
//     { name: 'cookieCat', imgSrc: './images/memory_game_card2.jpg' },
//     { name: 'cookieCat', imgSrc: './images/memory_game_card2.jpg' },
//     { name: 'bobaCat', imgSrc: './images/memory_game_card3.jpg' },
//     { name: 'bobaCat', imgSrc: './images/memory_game_card3.jpg' },
//     { name: 'instantWin', imgSrc: './images/memory_game_bonus_card1.jpg' },
//     { name: 'instantLose', imgSrc: './images/memory_game_bonus_card2.jpg' },
//     { name: 'instantMatch', imgSrc: './images/memory_game_bonus_card3.jpg' },
// ];
// console.log(cardData);

// Card Randomization Function
// const randomize = () => {
//     const randomizedCards = cardData();
//     randomizedCards.sort(() => Math.random() - 0.5);
//     return randomizedCards;
// };
// // Randomizes Cards when page loads
// window.onload = randomize();

// // Card Generator Funciton
// const cardGenerator = () => {
//     const randomizedCards = randomize();
//     randomizedCards.forEach(item => {
//     // Create Elements for the cards, and the face/back of each card
//     const card = document.createElement('div');
//     const face = document.createElement('img');
//     const back = document.createElement('div');

//     // Add a Class to the cards, and the face/back of each card
//     card.classList = 'card';
//     face.classList = 'face';
//     back.classList = 'back';

//     // Attach the names and images to the cards from above cardData Array
//     card.setAttribute('name', item.name);
//     face.src = item.imgSrc;

//     // Adding the cards' face/back to DOM via Section
//     section.appendChild(card);
//     card.appendChild(face);
//     card.appendChild(back);

// // Check Cards Function
// const checkCards = (e) => {
//     // Declare clickedCards to equal cards clicked on by the Event Listener below
//     clickedCards = e.target;
//     // Adding a Class of "flipped" to clickedCards so they are stored in the flippedCards node
//     // clickedCards.classList.add("flipped");
//     // Declaring flippedCards and setting it to an empty array to store the flipped cards
//     const flippedCards = [];
//     // If the flippedCards array has 2 items inside
//     if(flippedCards.length === 2) {
//     // Check if the first item's name ==='s the second item's name
//     if(flippedCards[0].name === flippedCards[1].name) {
//         console.log('match');
//     // Or if either the first or second item's name === "instantMatch"
//     } if(flippedCards[0].name === 'instantMatch' || flippedCards[1].name === 'instantMatch') {
//         console.log('match');
//         // Remove Class of "flipped" so flippedCards node can take 2 new items, and make matched cards unclickable
//         flippedCards.forEach = () => {
//             card.classList.remove("flipped");
//             card.style.pointerEvents = "none";
//         }
//     // Or if either the first or second item's name === "instantWin"
//     } if(flippedCards[0].name === "instantWin" || flippedCards[1].name === "instantWin") {
//         window.alert("you win");
//         restart();
//     // Or if either the first or second item's name === "instantLose"
//     } if(flippedCards[0].name === "instantLose" || flippedCards[1].name === "instantLose") {
//         window.alert('you lose');
//         restart();
//     } else {
//     // Otherwise, no match. Remove the Classes of "toggleCard" and "flipped" so flippedCards array can take 2 new items
//         flippedCards.forEach = () => {
//             // card.classList.remove("flipped");
//             setTimeout(() => {
//                 card.classList.remove('toggleCard')
//                 card.classList.add('toggleCardBack')
//             }, 2000);
//         }
//         console.log('no match');
//     }
// } if(moves === 0) {
//     window.alert('out of moves')
//     restart();
//   }
// } 

// // Event Listener for when a card is clicked
// card.addEventListener('click', (e) => {
//     // Push flippedCards to the empty flippedCards array when cicked
//     // flippedCards.push(e.target.name);
//     // Declare a variable length to equal the array's length 
//     // const length = flippedCards.length;
//     // If there are at least 2 cards in the array 
//     // if(length <= 2) {
//     // Add Classes to the card, and get the card's name when clicked
//     card.classList.add('toggleCard');
//     card.classList.add('flipped');
//     card.getAttribute(item.name);
//     // Decrement moves
//     moves--;
//     movesCount.innerHTML = moves;
//     // }
//     // Also check for match when clicked
//     checkCards(e);
// });
// });

//     // Restart Game Function
//     const restart = () => {
//         // Run Card Randomization Function
//         randomize();
//         // Remove "toggleCard" Class so that card backs are showing
//         cardData.forEach = () => {
//             card.classList.remove('toggleCard');
//         };
//         // Reset moves to 7
//         moves = 7;
//         movesCount.innerHTML = moves;
//     };  

//     // Event Listeners
//     const newGameBtnEl = document.querySelector('.new-game');

//     newGameBtnEl.addEventListener('click', () => {
//         location.reload();
//     });

//     const restartBtnEl = document.querySelector('.restart');

//     restartBtnEl.addEventListener('click', () => {
//         location.reload();
//     });  
// };
// cardGenerator();


// Cite Source: Dev Ed via YouTube