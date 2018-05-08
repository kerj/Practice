$(document).ready(function() {
  var vote = parseInt(prompt("What is your age?"));

  if (vote >= 18) {
    $("#canVote").show();
}else{
    $("#cantVote").show();
}
//Incomplete - want to take values from forms and display info based on the selects
  //$("#voteLocation").submit(function(event) {
  //  var stateSelected = $("input#voteLocation").val();
  //  event.preventDefault();
//  });
});
