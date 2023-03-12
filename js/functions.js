const printMessage = function (msg) {
  let div = document.createElement("div");
  div.innerHTML = msg;
  document.getElementById("messages").appendChild(div);
}

const clearMessages = function () {
  document.getElementById("messages").innerHTML = "";
}
