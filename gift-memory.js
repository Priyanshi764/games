const board = document.getElementById("game-board");
const statusText = document.getElementById("status");
const gifts = ['🎁','🎈','🍰','🎂','🎉','🎊','🧁','🍬'];
let cards = [...gifts, ...gifts];
let flippedCards = [];
let matched = 0;

// Shuffle
cards.sort(() => 0.5 - Math.random());

// Create cards
cards.forEach((icon, index) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.icon = icon;
  card.dataset.index = index;
  card.innerText = '?';
  board.appendChild(card);

  card.addEventListener('click', () => {
    if (flippedCards.length < 2 && !card.classList.contains('flipped')) {
      card.innerText = card.dataset.icon;
      card.classList.add('flipped');
      flippedCards.push(card);

      if (flippedCards.length === 2) {
        setTimeout(checkMatch, 800);
      }
    }
  });
});

function checkMatch() {
  const [card1, card2] = flippedCards;
  if (card1.dataset.icon === card2.dataset.icon) {
    matched += 1;
    statusText.innerText = `🎉 Matches: ${matched}`;
    if (matched === gifts.length) {
      statusText.innerText = "🎉 You've matched all gifts! 🥳";
    }
  } else {
    card1.innerText = '?';
    card2.innerText = '?';
    card1.classList.remove('flipped');
    card2.classList.remove('flipped');
  }
  flippedCards = [];
}
