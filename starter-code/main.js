var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [],
  cardsInPlayIds = [];

//With reference to unit solutions provide on GA website//

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

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
  if (cardsInPlay.length === 2) {

    var isMatched = isMatch(cardsInPlay);

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
  }
}

createBoard();


