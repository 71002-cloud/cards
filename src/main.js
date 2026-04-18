/* 
Changes maby to have and array indstead of making the card face
[
  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠',
  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦'
]
*/

// HTML elements
const elVal = document.getElementById("el-val")
const elCardCon = document.getElementById("card-container")
const cardBtn = document.getElementById("newcard-btn")

// Current values
let curnValue = 0
const curnCards = []

// The face arrays
const cardsSuit = ["♠", "♥", "♣", "♦"]
const cardsRank = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

// New card generator
function newCard() {
  let cardFace
  let failAttempt = 0

  // So it dont try if i have all the cards
  if (curnCards.length >= 52) { console.log(curnCards)
    return

  }
  do {
    // Makes the new card values
    let newCardSuit = cardsSuit[Math.floor(Math.random() * 4)]
    let newCardRank = cardsRank[Math.floor(Math.random() * 13)]

    // Combine them
    cardFace = newCardRank + newCardSuit

    failAttempt += 1
  } while (curnCards.some(card => card.face === cardFace) && failAttempt < 20)

  // Makes sure it doesn't push duplicates
  if (!curnCards.some(card => card.face === cardFace)) {
    // Makes them an object
    const card = {
        face: cardFace
    }

    // Push them to curnCards
    curnCards.push(card)
    //Updates the value
    curnValue = valueCalc()
    updateDOM()
  }
}

// Counts the value of curnCards
function valueCalc() {
  let val = 0
  for (let i = 0; i < curnCards.length; i++) {
    // Slices the suit of the face
    const rank = curnCards[i].face.slice(0, -1)

    // Tjeks the rank and add one to get the right value
    const index = cardsRank.indexOf(rank)
    val += index + 1
  }
  return val
}

// Updates the DOM
function updateDOM() {
  // Sets the value
  elVal.textContent = `Value: ${curnValue}`
  
  // Create a new card div
  const newCardDiv = document.createElement('div')
  newCardDiv.classList.add('card')

  // Create the image
  const newImg = document.createElement('img')
  newImg.classList.add('card-img')
  newImg.src = `src/assets/card-img/${curnCards[curnCards.length-1].face}.jpg`
  newImg.alt = `${curnCards[curnCards.length-1].face}`

  // Append image to card
  newCardDiv.appendChild(newImg)
  // Append card to container
  elCardCon.appendChild(newCardDiv)
}

cardBtn.addEventListener("click", function() {
  newCard()
})