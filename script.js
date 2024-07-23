// Funzione per ottenere un risultato casuale per il computer
function getRandomComputerResult() {
  const options = ["Sasso", "Carta", "Forbici"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

// Funzione per determinare se il giocatore ha vinto il round
function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "Sasso" && computer === "Forbici") ||
    (player === "Forbici" && computer === "Carta") ||
    (player === "Carta" && computer === "Sasso")
  );
}

// Inizializza i punteggi di giocatore e computer
let playerScore = 0;
let computerScore = 0;

// Funzione per ottenere i risultati del round corrente
// userOption è quello che l'utente seleziona
function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  //se la funzione hasPlayerWonTheRound è true, punto all'utente ecc
  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Hai Vinto!\n${userOption} batte ${computerResult}`;
  } else if (computerResult === userOption) {
    return `Patta! Entrambi avete scelto ${userOption}`;
  } else {
    computerScore++;
    return `Vince il Computer!\n${computerResult} batte ${userOption}`;
  }
}

// Riferimenti agli elementi del DOM
const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

// Funzione per mostrare i risultati del round
function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;

  // Controlla se qualcuno ha vinto la partita
  if (playerScore === 3 || computerScore === 3) {
    winnerMsgElement.innerText = `${
      playerScore === 3 ? "Tu hai" : "Il Computer ha"
    } vinto il gioco!`;

    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }

};

// Funzione per resettare la partita
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
  resetGameBtn.style.display = "none";
  optionsContainer.style.display = "block";
  winnerMsgElement.innerText = "";
  roundResultsMsg.innerText = "";
};

// Aggiungi event listener al pulsante di reset
resetGameBtn.addEventListener("click", resetGame);

// Riferimenti ai pulsanti delle opzioni
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

// Aggiungi event listener ai pulsanti delle opzioni
rockBtn.addEventListener("click", function () {
  showResults("Sasso");
});

paperBtn.addEventListener("click", function () {
  showResults("Carta");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Forbici");
});