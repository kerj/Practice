$(document).ready(function()  {
  $("#submit").click(function(event)  {
    event.preventDefault();
    var toTranslate = $("#sentence").val().toLowerCase().split(" ");
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    var pigLatin = []

    for(var wordCount = 0; toTranslate.length -1 >= wordCount; wordCount +=1) {
      var word = toTranslate[wordCount].split("");
      for(var vowelSearch = 0; vowels.length -1 >= vowelSearch; vowelSearch +=1)  {
        if(word[0] === vowels[vowelSearch] && word.length >= 2)  {
         word.splice(word.length,0,"way")
         vowelSearch += vowelSearch.length
         pigLatin.push(word.join(''))
       }else if(word[0] === vowels[vowelSearch] && word.length == 1) {
         word.splice(word.length,0,"ay")
         vowelSearch += vowelSearch.length
         pigLatin.push(word.join(''))
        }else if(vowels.indexOf(word[0]) == -1 ) {
         vowelSearch += vowelSearch.length
         pigLatin.push(word.join(''))
        }else {
        }
      }
    }

    //for(var vowelSearch = 0; vowels.length -1 >= vowelSearch; vowelSearch +=1)  {
    //  if(toTranslate[0] === vowels[vowelSearch] && toTranslate.length == 1)  {
    //    toTranslate.splice(toTranslate.length,0,"ay")
    //  }else if(toTranslate[0] === vowels[vowelSearch] && toTranslate.length >= 2)
  //      toTranslate.splice(toTranslate.length,0,"way")


    $("#results").prepend("<li>" + (pigLatin.join(" ")) + "</li>")
  });
});
