
function setImageAndGetNumber(imageSource)
{
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var randomImage = "diceimages/dice" + randomNumber + ".png";
    imageSource.setAttribute("src", randomImage)
    return randomNumber;
}

var numberOne = setImageAndGetNumber(document.querySelectorAll("img")[0]); //Set Image One and get their number
var numberTwo = setImageAndGetNumber(document.querySelectorAll("img")[1]); // Set Image Two and get their number

var headline = document.querySelector("h1");
if (numberOne > numberTwo) {
    headline.innerHTML = "🚩Player One Wins";
} else if (numberTwo > numberOne) {
    headline.innerHTML = "🚩Player Two Wins";
} else {
    headline.innerHTML = "Draw!!"
}