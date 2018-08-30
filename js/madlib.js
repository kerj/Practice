$(document).ready(function() {
  $("#blanksForm").submit(function(event) {
    var blanks = ["noun1", "noun2", "verb1", "adverb1", "verb2", "plNoun1", "verb3", "adj1"]

    console.log("noun1");

    blanks.forEach(function(blank){
      var userInput = $("input#" + blank).val();
      $('.' + blank).text(userInput);
    });

    $("#SLT").show();
    event.preventDefault();
  });
});
