$(document).ready(function()  {
  $("#btn").click(function() {
  var phrase = $('#phrase').val().split('')
  console.log(phrase)
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for(var vowelSearch = 0; vowels.length >= vowelSearch; vowelSearch += 1)  {
    if (phrase.includes(vowels[vowelSearch]) == true) {
    console.log(phrase)         //I want this to check the array for matches/\/\/\/\
  }else
    console.log(phrase)
  }
  console.log(phrase)
  });
});
//Create a website that uses a method to replace vowels in a string with the
//dash symbol "-" to create a word puzzle to solve. Hide the original string
//when you show the resulting word puzzle, so that another person can try and
//guess it.
//use length property to limit the loop. and search for vowels in the phrase

//for (var replace = 0; replace >= phrase.length; replace +=;)
//
