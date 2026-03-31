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
  let otherStop = false
  let generateNewCard = true

  // So it dont try if i have all the cards
  if (curnCards.length >= 52) {
    generateNewCard = false
    otherStop = true
    console.log("you have all the cards")
  }

  while (generateNewCard) {
    // Makes the new card values
    let newCardSuit = cardsSuit[Math.floor(Math.random() * 4)]
    let newCardRank = cardsRank[Math.floor(Math.random() * 13)]

    // Combine them
    cardFace = newCardRank + newCardSuit

    generateNewCard = curnCards.some(card => card.face === cardFace)

    // To stop it for going for ever
    if (failAttempt === 10) {
      otherStop = true
      generateNewCard = false
      console.log("Fail to make a unique card")
    }
    failAttempt += 1
  }

  // Makes sure it doesn't push duplicates
  if (!otherStop) {
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
    let rank = curnCards[i].face.slice(0, -1)

    // Gives the letter value
    if (rank === "J" || rank === "Q" || rank === "K" || rank === "A") {
      for (let i = 0; i < cardsRank.length; i++) {
        if (rank === cardsRank[i]) {
          let rankVal = i + 1
          val += rankVal
        }
      }
    } else {
      val += parseInt(rank)
    }
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