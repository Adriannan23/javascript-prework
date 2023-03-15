{const playGame = function (playerInput) {
  clearMessages();

  const getMoveName = function (argMoveId) {
    if (argMoveId == 1) {
      return "kamień";
    } else if (argMoveId == 2) {
      return "papier";
    } else if (argMoveId == 3) {
      return "nożyce";
    }
    printMessage("Nie znam ruchu o id " + argMoveId + ".");
    return "nieznany ruch";
  }

  const displayResult = function (arggComputerMove, arggPlayerMove) {
    if (arggComputerMove == "kamień" && arggPlayerMove == "papier") {
      printMessage("Ty wygrywasz!");
    } else if (arggComputerMove == "papier" && arggPlayerMove == "nożyce") {
      printMessage("Ty wygrywasz!");
    } else if (arggComputerMove == "nożyce" && arggPlayerMove == "kamień") {
      printMessage("Ty wygrywasz!");
    } else if (arggComputerMove == arggPlayerMove) {
      printMessage("Remis!");
    } else if (arggPlayerMove == "nieznany ruch") {
      printMessage("Wpisałeś liczbę inną niż 1, 2 lub 3 - spróbuj ponownie.");
    } else {
      printMessage("Komputer wygrywa!");
    }
  }

  const randomNumber = Math.floor(Math.random() * 3 + 1);
  const computerMove = getMoveName(randomNumber);
  console.log("Wylosowana liczba to: " + randomNumber);
  printMessage("Mój ruch to: " + computerMove);
  const arggComputerMove = computerMove;

  // let playerInput = prompt(
  //   "Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce."
  // );
  const playerMove = getMoveName(playerInput);
  console.log("Gracz wpisał: " + playerInput);
  printMessage("Twój ruch to: " + playerMove);
  const arggPlayerMove = playerMove;

  displayResult(arggComputerMove, arggPlayerMove);
}

document.getElementById("play-rock").addEventListener("click", function () {
  playGame(1);
});
document.getElementById("play-paper").addEventListener("click", function () {
  playGame(2);
});
document.getElementById("play-scissors").addEventListener("click", function () {
  playGame(3);
});}
