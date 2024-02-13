import memoryGame from "./memoryGame.js";
import quizGame from "./quizGame.js";
import ticTacToe from "./ticTacToe.js";

let currentGame = "";
const games = ["memoryGame", "quizGame", "snakeGame", "ticTacToe"];

function chooseGame() {
  let choice = parseInt(
    prompt(
      "Elige una opción: 1. Juego de Memoria, 2. Quiz, 3. Juego de la Serpiente, 4. Tic Tac Toe:"
    )
  );

  switch (choice) {
    case 1:
      memoryGame();
      break;
    case 2:
      quizGame();
      break;
    case 3:
      alert("Este juego aún no está disponible.");
      break;
    case 4:
      ticTacToe();
  }
}

chooseGame();
