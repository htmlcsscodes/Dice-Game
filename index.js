


    var randomNumber = Math.floor(Math.random()* 6) + 1;

var diceImage = "dice" + randomNumber + ".png"; // dice1.png - dice6.png

var randomImageSource = "images/" + diceImage; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor((Math.random() * 6)) + 1;


var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

 document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


  
 if (randomNumber > randomNumber2) {
    document.querySelector("h1").innerHTML = "Play 1 Wins!";
 }
 else if (randomNumber2 > randomNumber) {
    document.querySelector("h1").innerHTML = "Play 2 Wins!";
 }
 else {
    document.querySelector("h1").innerHTML = "Draw!";
 }