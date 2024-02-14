let cards = ["A", "A", "B", "B", "C", "C", "D", "D"];
let selectedCards = [];
let pairsFound = 0;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default function playMemory() {
  shuffleArray(cards);
  selectedCards = [];
  pairsFound = 0;

  for (let i = 0; i < cards.length; i++) {
    let choice = prompt("Elige una carta (0-7): ");
    let choiceIndex = parseInt(choice, 10);

    if (
      !isNaN(choiceIndex) &&
      choiceIndex >= 0 &&
      choiceIndex < cards.length &&
      !selectedCards.includes(choiceIndex)
    ) {
      selectedCards.push(choiceIndex);

      if (selectedCards.length === 2) {
        checkPairs();
        selectedCards = [];
        if (pairsFound === cards.length / 2) {
          console.log("¡Juego finalizado! Encontraste todos los pares.");
          break;
        }
      }
    } else {
      console.log(
        "Entrada no válida o carta ya seleccionada. Intenta de nuevo."
      );
    }
  }
}

function checkPairs() {
  if (cards[selectedCards[0]] === cards[selectedCards[1]]) {
    console.log("Encontraste un par: " + cards[selectedCards[0]]);
    pairsFound++;
  } else {
    console.log("Intenta de nuevo.");
  }
}
