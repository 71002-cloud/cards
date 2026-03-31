# Card Generator

A simple web-based card generator that randomly draws unique playing cards, displays them with images, and calculates their cumulative value.

---

## Features

- Randomly generates a playing card from a standard 52-card deck.
- Prevents duplicates – each card drawn is unique.
- Calculates the total value of drawn cards:
  - Number cards = their numeric value.
  - Face cards (`J`, `Q`, `K`) and `A` = 1–13 based on their rank in the deck.
- Dynamically updates the web page with new card images and total value.
- Stops generating cards if all 52 cards have been drawn or after repeated failed attempts.

---

## Usage

1. Open `index.html` in a web browser.
2. Click the **New Card** button to draw a card.
3. The card appears in the container, and the total value updates automatically.
4. Once all cards are drawn, no more cards will be generated.

---

## Code Overview

### HTML Elements

- `#el-val` – Displays the total value of the drawn cards.
- `#card-container` – Container for showing card images.
- `#newcard-btn` – Button to generate a new card.

### JavaScript

- `curnCards` – Array holding objects for drawn cards.
- `cardsSuit` – Array of suits: `♠`, `♥`, `♣`, `♦`.
- `cardsRank` – Array of ranks: `A, 2–10, J, Q, K`.
- `newCard()` – Generates a new card, ensures uniqueness, and updates the value and DOM.
- `valueCalc()` – Computes the total value of all drawn cards.
- `updateDOM()` – Updates the HTML with new card images and total value.

### How it Works

1. **Card Generation**
   - Randomly selects a rank and suit.
   - Combines them to create a `face` string (e.g., `A♠`, `10♥`).
   - Checks for duplicates and ensures uniqueness.
   
2. **Value Calculation**
   - Face cards (`J`, `Q`, `K`, `A`) are assigned values from 1 to 13.
   - Number cards are added as their numeric value.

3. **DOM Update**
   - Creates a card `<div>` with an `<img>` element pointing to the corresponding card image.
   - Appends the card to the container.
   - Updates the total value display.

---

*This README was generated with the assistance of AI.*