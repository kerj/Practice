$(document).ready(function()  {
  $("#btn").click(function() {
  var phrase = $('#phrase').val().toLowerCase().split('')
  var removeThese = ['a', 'e', 'i', 'o', 'u'];

  for(var eachLetter = 0; phrase.length -1 >= eachLetter; eachLetter += 1)  {
    for(var vowelSearch =  0; removeThese.length -1 >= vowelSearch; vowelSearch += 1)  {
      if(phrase[eachLetter] == removeThese[vowelSearch])  {
        phrase.splice(eachLetter, 1, "-")
      }else
        eachLetter + 1
    }
  }
  $("#display").append(phrase.join(""))
  });
});
//Create a website that uses a method to replace vowels in a string with the
//dash symbol "-" to create a word puzzle to solve. Hide the original string
//when you show the resulting word puzzle, so that another person can try and
//guess it.
//use length property to limit the loop. and search for vowels in the phrase

//for (var replace = 0; replace >= phrase.length; replace +=;)
//
