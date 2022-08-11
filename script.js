//Button to Generate Facts
var factList = [
  "There are more than 1,000 endangered species worldwide.",
  "Humans are responsible for 99% of the endangered species.",
  "If action is not taken, endangered species will eventually go extinct."];


var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}


//Button to Generate Letter
var display = document.getElementById("letter");
var button = document.getElementById("myButton");

if (myButton){
  button.addEventListener("click", displayLetter);
}

function displayLetter(){
  var text = document.getElementById("myText").value;
  display.innerHTML = text + ", thank you."
}
