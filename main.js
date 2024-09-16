// audio
function playAudio() {
  let music = document.querySelector("#game-audio");
  music.play();
}

// get player name
function getPlayerName() {
  let userName = "";
  userName = document.querySelector("#player-name").value;
  document.querySelector(".player-text").textContent = userName;
  if (userName === "") {
    document.getElementById("player-name").style.cssText =
      "background-color:#fd7676a8;   border-bottom:2px solid red;";
  } else {
    document.querySelector(".container-user-name").style.display = "none";
  }
  playAudio();
}

// get computer's choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  const choice = choices[randomNumber];
  return choice;
}

// function to print game result
function printGameResult() {
  if (playerScore === 5 || computerScore === 5) {
    document.querySelector(".overlay").style.display = "flex";
    let gameResult = "";
    if (playerScore > computerScore) {
      gameResult = `You Won`;
    } else if (playerScore < computerScore) {
      gameResult = `You Lose!`;
    } else {
      gameResult = `It's a Draw!`;
    }
    return gameResult;
  } else {
    return "";
  }
}

// function to print result in console
function displayScores() {
  document.querySelector("#player-score").innerHTML = playerScore;
  document.querySelector("#computer-score").innerHTML = computerScore;
  document.querySelector("#round").innerHTML = countOfRound;
}

// function to play one round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "draw";
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    document.querySelector(".player i").style.cssText =
      "color:white; background-color:red;   border: none;";
    return "You Lose";
  } else {
    document.querySelector(".computer i").style.cssText =
      "color:white; background-color:red; border: none;";
    return "You Win";
  }
}

let playerScore = 0;
let computerScore = 0;
let countOfRound = 0;

function increaseScores(result) {
  if (result === "You Win") {
    playerScore++;
  } else if (result === "You Lose") {
    computerScore++;
  }
}
function changePlayerChoice(playerSelection) {
  const playerChoice = document.querySelector(".player");
  if (playerSelection === "paper") {
    playerChoice.innerHTML = `<i class="fa-regular fa-hand " id="paper" choice="paper"></i>`;
  } else if (playerSelection === "rock") {
    playerChoice.innerHTML = `<i class="fa-regular fa-hand-back-fist " id="rock" choice="rock"></i>`;
  } else if (playerSelection === "scissors") {
    playerChoice.innerHTML = `<i class="fa-solid fa-hand-peace " id="scissors" choice="scissors"></i>`;
  }
}
function changeComputerChoice(computerSelection) {
  const computerChoice = document.querySelector(".computer");
  if (computerSelection === "paper") {
    computerChoice.innerHTML = `<i class="fa-regular fa-hand " id="paper" choice="paper"></i>`;
  } else if (computerSelection === "rock") {
    computerChoice.innerHTML = `<i class="fa-regular fa-hand-back-fist " id="rock" choice="rock"></i>`;
  } else if (computerSelection === "scissors") {
    computerChoice.innerHTML = `<i class="fa-solid fa-hand-peace " id="scissors" choice="scissors"></i>`;
  }
}
function handleButtonClick(e) {
  if (playerScore === 5 || computerScore === 5) {
    document.querySelector(".overlay").style.display = "flex";
    return;
  }
  const playerSelection = e.target.getAttribute("choice");
  const computerSelection = getComputerChoice();
  changePlayerChoice(playerSelection);
  changeComputerChoice(computerSelection);
  const result = playRound(playerSelection, computerSelection);
  increaseScores(result);
  countOfRound++;
  displayScores();
  document.querySelector("#final-result").innerHTML = printGameResult();

  // document.querySelector(".computer").innerHTML = computerSelection;
}

document.getElementById("paper").addEventListener("click", handleButtonClick);
document.getElementById("rock").addEventListener("click", handleButtonClick);
document
  .getElementById("scissors")
  .addEventListener("click", handleButtonClick);

function playAgain() {
  playerScore = 0;
  computerScore = 0;
  countOfRound = 0;
  document.querySelector(".overlay").style.display = "none";
  document.querySelector("#player-score").innerHTML = playerScore;
  document.querySelector("#computer-score").innerHTML = computerScore;
  document.querySelector("#round").innerHTML = countOfRound;

  document.querySelector(
    ".computer"
  ).innerHTML = `<i class="fa-solid fa-question " ></i>`;
  document.querySelector(
    ".player"
  ).innerHTML = `<i class="fa-solid fa-question " ></i>`;
}
document.getElementById("play-again").addEventListener("click", playAgain);
