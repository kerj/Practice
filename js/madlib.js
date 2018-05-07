$(document).ready(function() {
  $("#theForm").submit(function(event) {
    var noun1Input = $("input#noun1").val();
    var noun2Input = $("input#noun2").val();
    var verb1Input = $("input#verb1").val();
    var adverb1Input = $("input#adverb1").val();
    var verb2Input = $("input#verb2").val();
    var plNoun1Input = $("input#plNoun1").val();
    var verb3Input = $("input#verb3").val();
    var adj1Input = $("input#adj1").val();


        //what are .focus and .prop used for? I dont know yet.. focus= bind an event handler to the "focus" event or trigger on an element.

    var noun3Input = $("input#noun3").val();


    $(".noun1").text(noun1Input);
    $(".noun2").text(noun2Input);
    $(".verb1").text(verb1Input);
    $(".adverb1").text(adverb1Input);
    $(".verb2").text(verb2Input);
    $(".plNoun1").text(plNoun1Input);
    $(".verb3").text(verb3Input);
    $(".adj1").text(adj1Input) // add to adj1 from var adjiInput ?
    
    var first = adj1Input.charAt(0).toLowerCase();
    if(first != "a" && first != "e" && first != "i" && first != "o" && first != "u") {
      $(".adj1").prepend("a ");
    } else {
      $(".adj1").prepend("an ");
    };
    $(".noun3").text(noun3Input);

    $("#SLT").show();
    event.preventDefault();
  });
});
