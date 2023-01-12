const startButton = document.getElementById("start");
const Container = document.querySelector(".container");
let cards;
let interval;
let firstCard = false;
let secondCard = false;

//items array (not done yet)
 

//Pick random objects from the items array
const generateRandom = (size = 4) => {
    //temporary array
    let tempArray = [...items];
    //initializes cardValues array
    let cardValues = [];
    //size should be double (4*4 matrix)/2 since pairs of objects would exist
    size = (size * size) / 2;
}
//random object selection
for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * tempArray.length);
    cardValues.push(tempArray[randomIndex]);
    //once selected remove the object from temp array
    tempArray.splice(randomIndex, 1);
}


 //Cards
 cards = document.querySelectorAll(".container");
 cards.forEach((card) => {
   card.addEventListener("click", () => {
     //If selected card is not matched yet then only run (i.e already matched card when clicked would be ignored)
     if (!card.classList.contains("matched")) {
       //flip the clicked card
       card.classList.add("flipped");
       //if it is the firstcard (!firstCard since firstCard is initially false)
       if (!firstCard) {
//Start game
startButton.addEventListener("click", () => {
    movesCount = 0;
    
})
startButton.classList.add("hide");


//Initialize values and func calls
let cardValues = generateRandom();