function getMoveName(argMoveId) {
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

function displayResult(arggComputerMove, arggPlayerMove) {
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

let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);
console.log("Wylosowana liczba to: " + randomNumber);
printMessage("Mój ruch to: " + computerMove);
let arggComputerMove = computerMove;

let playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");
let playerMove = getMoveName(playerInput);
console.log("Gracz wpisał: " + playerInput);
printMessage("Twój ruch to: " + playerMove);
let arggPlayerMove = playerMove;

displayResult(arggComputerMove, arggPlayerMove);
