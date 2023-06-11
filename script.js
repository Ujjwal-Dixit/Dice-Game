const randomNumber1 = getRandomNumber();
const randomNumber2 = getRandomNumber();

const randomImageSource1 = `images/dice${randomNumber1}.png`;
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

const randomImageSource2 = `images/dice${randomNumber2}.png`;
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

const isRefreshed = performance.getEntriesByType("navigation")[0].type === "reload";
if (!isRefreshed) {
  document.querySelector("h1").innerHTML = "Refresh Me!";
} else {

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 won! 🚩";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 won! 🚩";
  } else {
    document.querySelector("h1").innerHTML = "😐 Draw!";
  }
};

function getRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}
