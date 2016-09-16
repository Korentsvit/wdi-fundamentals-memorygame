var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = []

//============================//


var board = document.getElementById("game-board");

var createBoard = function () {
    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement("div");
          cardElement.className = "card";
              cardElement.setAttribute('data-card', cards[i]);
                  cardElement.addEventListener('click', isTwoCards);
                   
                   board.appendChild(cardElement);
                   board.appendChild(cardElement);
  }

    

 var isMatch = function (cards) {
    for (var i = 0; i < cards.length; i++) {
        if (cards[0] === cards[1]) {
    	alert("You found a match!");
		  } else 
		  {alert("Sorry, try again.");

  }
}
    
    ;

 var isTwoCards = function () {
    for (var i = 0; i < cards.length; i++) {
          cardsInPlay.push(this.getAttribute('data-card'));
          	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<http://i.imgur.com/o8too82.png>"; // king
	} else {
		this.innerHTML = "<http://i.imgur.com/jWQ9eke.jpg>"; 

  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}

for (var i=0; i<cards.length; i++) {
	 cardElement.addEventListener('click', isTwoCards)
	}


//card TWO //

if (cardTwo === cardFour) {
  alert("You found a match!");
} else {
	alert("Sorry, try again.");
}

if (cardTwo === cardOne) {
  alert("You found a match!");
} else {
	alert("Sorry, try again.");
}

if (cardTwo === cardThree) {
  alert("You found a match!");
} else {
	alert("Sorry, try again.");
}


//card ONE //

if (cardOne === cardThree) {
  alert("You found a match!");
} else {
	alert("Sorry, try again.");
}

if (cardOne === cardFour) {
  alert("You found a match!");
} else {
	alert("Sorry, try again.");


//card THREE..//



//----------------------------//







