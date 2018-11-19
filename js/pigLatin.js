$(document).ready(function()  {
  $("#submit").click(function(event)  {
    event.preventDefault();
    var toTranslate = $("#sentence").val().toLowerCase().split(" ");
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var pigLatin = [];

    for(var wordCount = 0; toTranslate.length -1 >= wordCount; wordCount +=1) {
      var word = toTranslate[wordCount].split("");
      for(var vowelSearch = 0; vowels.length -1 >= vowelSearch; vowelSearch +=1)  {
        if(vowels.indexOf(word[0]) != -1)  {
         word.splice(word.length,0,"way")
         vowelSearch += vowelSearch.length
         pigLatin.push(word.join(''))
       }else {
        var conSplit = word.join("")
         for(var i = 0 ; vowels.length -1 >= i; i++) {
          if(i == 0 || firstVowel == -1 || conSplit.indexOf(vowels[i]) < firstVowel && conSplit.indexOf(vowels[i]) > 0) {
            var firstVowel = conSplit.indexOf(vowels[i])
          }
        }
        var word1st = word.slice(firstVowel +1)
        var word2nd = conSplit.split("", firstVowel)
        var vowelSplit = word.slice(firstVowel, firstVowel +1)
        if(word.slice(firstVowel, firstVowel +1) == "u" && conSplit.indexOf("q") != -1 )
         var word2nd = conSplit.split("", firstVowel +1)
         var vowelSplit = []
        var complete = pigLatin.push(vowelSplit.join("") + word1st.join("") + word2nd.join("") + "ay")
        vowelSearch += vowelSearch.length
      }
    }
  }
    $("#results").prepend("<li>" + (pigLatin.join(" ")) + "</li>")
  });
});
