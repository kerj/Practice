$(document).ready(function()  {
  var ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
  var suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades']
  var cards = []
  $("#cards").click(function() {
    suits.forEach(function(suit)  {
      ranks.forEach(function(rank)  {
        cards.push(rank + " of " + suit.toString());
      })
    })
    cards.forEach(function(card)  {
      $("#display").append('<li>' + card + '</li>');
    });
  });
});


//$(document).ready(function()  {
  var ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
  var suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades']
  var cards = []
  $("#cards").submit(function(event) {
    suits.forEach(function(suit)  {
      var cardHolder = " of "+ suit
      ranks.forEach(function(rank)  {
        var card = rank + cardHolder
        cards.push(card);
      })
    })
    cards.map(function(card)  {
      $("#display").append('<li>' + card + '</li>');
    })
    event.preventDefault();
  });
});
