let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log("Wylosowana liczba to: " + randomNumber);

let computerMove = "nieznany ruch";

if (randomNumber == 1) {
  computerMove = "kamień";
} else if (randomNumber == 2) {
  computerMove = "papier";
} else if (randomNumber == 3) {
  computerMove = "nożyce";
}

console.log("Ruch komputera to: " + computerMove);

let playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");

console.log("Gracz wpisał: " + playerInput);

let playerMove = "nieznany ruch";

if (playerInput == "1") {
  playerMove = "kamień";
} else if (playerInput == "2") {
  playerMove = "papier";
} else if (playerInput == "3") {
  playerMove = "nożyce";
}

console.log("Ruch gracza to: " + playerMove);

if (computerMove == "kamień" && playerMove == "papier") {
  alert("Ty wygrywasz!");
} else if (computerMove == "papier" && playerMove == "nożyce") {
  alert("Ty wygrywasz!");
} else if (computerMove == "nożyce" && playerMove == "kamień") {
  alert("Ty wygrywasz!");
} else if (computerMove == playerMove) {
  alert("Remis!");
} else if (playerMove == "nieznany ruch") {
  alert("Wpisałeś liczbę inną niż 1, 2 lub 3 - spróbuj ponownie.");
} else {
  alert("Komputer wygrywa!");
}
