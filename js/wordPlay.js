$(document).ready(function() {
  $('#sentenceInput').submit(function() {
    let wordPlay = {
      output: [],
      reverseInput: function(input) {
        input.split(" ").map(function(word) {
          if (word.length >= 3) wordPlay.output.unshift(word)
        });
      }
    }
    wordPlay.reverseInput($('#sentence').val())
  //  console.log(wordPlay) // "wow this array is cool" = [cool array this wow]
    event.preventDefault();
    $("#display").append(wordPlay.output.join(" "));
  });
});

//hmm. theres got to be a way to contain that join in the function, but if it works it works
//it works !!!
//does this make sense? I should have kept the other stuff
//lemme know if that works. cool. i might also be cleaner to just make that a method that you can call whenever
//a method is just a custom function lol im trying to remember vanilla JS
//im not in methods yet I tried and i failed at that
//well i havent got into udf yet but i could see how that was a better way to write that code. the let, output: is a bit 4n to me
