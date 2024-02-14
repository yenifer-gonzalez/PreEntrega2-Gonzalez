import playMemory from "./memoryGame.js";
import playQuiz from "./quizGame.js";

function snakeGame() {
  alert("El juego de la serpiente aún no está disponible.");
}

function ticTacToe() {
  alert("Tic Tac Toe aún no está disponible.");
}

function chooseGame() {
  let choice = prompt(
    "Elige una opción: 1. Juego de Memoria, 2. Quiz, 3. Juego de la Serpiente, 4. Tic Tac Toe:"
  );
  choice = parseInt(choice);

  switch (choice) {
    case 1:
      playMemory();
      break;
    case 2:
      playQuiz();
      break;
    case 3:
      snakeGame();
      break;
    case 4:
      ticTacToe();
      break;
    default:
      alert("Por favor, elige una opción válida.");
  }
}

chooseGame();
