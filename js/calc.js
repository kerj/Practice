var add = function(input1, input2) {
  return input1 + input2;
};
var subtract = function(input1, input2) {
  return input1 - input2;
};
var multiply = function(input1, input2) {
  return input1 * input2;
};
var divide = function(input1, input2) {
  return input1 / input2;
};

    $(document).ready(function() {
      $("form#calc").submit(function(event) {
        event.preventDefault();
        var input1 = parseInt($("#input1").val());
        var input2 = parseInt($("#input2").val());
        var operator = $("input:radio[name:operator]:checked").val();
        var result = add(input1, input2);
        $("#output").text(result);
  });
});
//BMI=(lbs/height^2)*703
//var weight = prompt("what is your weight in lbs?");
//var height = prompt("what is your height in inches?");
//function BMI(weight, height) {
  //var result = (weight/(Math.pow(height, 2))*703);
  //alert(result);
//}
//BMI(weight, height);
//20°C × 9/5 + 32 = 68 °F
//var celcius = prompt("Degrees in celcius to convert to fahrenheit:");
//function tempurate_CtoF(celcius) {
//  var result = (celcius*((9/5))+32);
//  alert(result);
//}
//tempurate_CtoF(celcius);
