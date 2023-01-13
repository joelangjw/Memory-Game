//make a list of all card elements and store in card
const cards = document.querySelectorAll(".card");

//storing cards
//declaring variables
let cardOne, cardTwo;
let cardFlipped = false;
//if else

function flipCard() {
  this.classList.add("flip");

  if (!cardFlipped) {
    cardFlipped = true;
    cardOne = this;
  } else {
    cardFlipped = false;
    cardTwo = this;

    matchCard();
  }

  function matchCard() {
    if (cardOne.dataset.image === cardTwo.dataset.image) {
      //condition:match
      cardOne.removeEventListener("click", flipCard);
      cardTwo.removeEventListener("click", flipCard);
    } else {
      //no match, if it doesnt match it flips back
      setTimeout(() => {
        cardOne.classList.remove("flip");
        cardTwo.classList.remove("flip");
      }, 1000);
    }
  }
}

cards.forEach((card) => card.addEventListener("click", flipCard));
