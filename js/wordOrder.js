$(document).ready(function()  {
  function sortObject(obj)  {
    var arr = [];
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        arr.push({
          'key': prop,
          'value': obj[prop]
        });
      }
    }
  arr.sort(function(a, b) { return a.value - b.value; });
  return arr;
  }
  $(".btn").click(function() {
    var inputArray = []
      $('#phrase').val().split(" ").forEach(function(word) {
      inputArray.push(word);

      });
      console.log(inputArray) // inputArray is an array
    var sortArray = [];
    var countedWords = inputArray.reduce(function (phrase, occur) {
      if (occur in phrase) {
        phrase[occur]++;
      }
      else {
        phrase[occur] = 1;

      }
      return phrase
    }, {});
    var sortedArray = [];
    for (var word in countedWords)  {
      sortArray = countedWords[word];
      sortedArray.push(sortArray)
      sortedArray.sort(function(a,b){return b-a});
    }
    var arr = sortObject(countedWords);
    console.log(arr.reverse());
    console.log(countedWords)
    console.log(sortedArray)
  });
});





//Create a website that lets users input a block of text and returns a list
//of all the unique words and how many times they appeared.
//For example, if the user inputs "hello world world", the page should show:
//hello 1
//world 2
//If you finish, and feel comfortable with forEach() loops, try to complete the
//above exercise but instead order the list by the number of
//appearances - greatest to least. For words that appear the same amount of
//times, order by which word appeared first.
