$(document).ready(function() {
  $("#customerInfo").submit(function(event) {
    var fullName = $("input#fullName").val();
    var shipAddress = $('input#shipAddress').val();
    var getDropVal = document.getElementById("shipMethod");
    var shipMethod = getDropVal.options[getDropVal.selectedIndex].text;

    $("#fullNameRe").text(fullName);
    $("#shipAddressRe").text(shipAddress);
    $("#shipMethodRe").text(shipMethod);
    $("#receipt").removeClass();
    $("#customerInfo").addClass('hidden');
    event.preventDefault();
  });
});
