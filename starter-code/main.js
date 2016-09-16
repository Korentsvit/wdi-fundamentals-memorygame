var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [],
  cardsInPlayIds = [];

//============================//

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var resetCards = function(){
  var cardsDivs = document.getElementsByClassName("card");
  for (var i = 0; i < cardsDivs.length; i++){
    cardsDivs[i].innerHTML = '';
  }
}

var isTwoCards = function() {
  var dataCard = this.getAttribute('data-card');
  var dataId = this.getAttribute('data-id');
  // add card to array of cards in play
  // 'this' hasn't been covered in this prework, but
  // for now, just know it gives you access to the card the user clicked on
  if (cardsInPlay.length === 1 && cardsInPlayIds[0] === dataId) {
    return;
  }
  cardsInPlay.push(dataCard);
  cardsInPlayIds.push(dataId);

  if (dataCard === 'king') {
    this.innerHTML = '<img src="http://i.imgur.com/o8too82.png">';
  } else {
    this.innerHTML = '<img src="http://i.imgur.com/jWQ9eke.jpg">';
  }
  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to isMatch function
    var isMatched = isMatch(cardsInPlay);

    // clear cards in play array for next try
    cardsInPlay = [];
    cardsInPlayIds = [];

    var infoBox = document.getElementById("info-box");
    setTimeout(function(){
      resetCards();
      infoBox.innerHTML = '';
      infoBox.display = 'none';
      if (isMatched){
        createBoard();
      }
    }, 1000);
  }
}

var isMatch = function(cards) {
  var infoBox = document.getElementById("info-box");
  infoBox.style.display = 'block';
  if (cards[0] === cards[1]) {
    infoBox.innerHTML = 'You found a match!';
    return true;
  } else {
    infoBox.innerHTML = 'Sorry, try again.';
    return false;
  }
};

var createBoard = function() {
  var board = document.getElementById("game-board");
  board.innerHTML = '';
  cards = shuffle(cards);
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement("div");
    cardElement.className = "card";
    cardElement.setAttribute('data-card', cards[i]);
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', isTwoCards);
    board.appendChild(cardElement);
    // board.appendChild(cardElement);
  }
}

createBoard();


