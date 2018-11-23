function numeralConverter()  {
  var numerals = parseInt($("#iNum").val()); //1500
  var roman = [];

  while(numerals > 0){
    if(numerals >= 4000)  {
      return numerals
    } else if(numerals >= 1000) {
      numerals = numerals - 1000
      roman.push("M")
    } else if(numerals >= 500) {
      if(numerals >= 900)  {
        numerals = numerals - 900
        roman.push("CM")
      }else {
      numerals = numerals - 500
      roman.push("D")
      }
    } else if(numerals >= 100) {
      if(numerals >= 400) {
        numerals = numerals - 400
        roman.push("CD")
      } else {
        numerals = numerals - 100
        roman.push("C")
      }
    } else if(numerals >= 50) {
      if(numerals >= 90) {
        numerals = numerals - 90
        roman.push("XC")
      } else {
        numerals = numerals - 50
        roman.push("L")
      }
    } else if(numerals >= 10)  {
      if(numerals >= 40) {
        numerals = numerals - 40
        roman.push("XL")
      } else {
        numerals = numerals - 10
        roman.push("X")
      }
    }else if(numerals >= 5)  {
      numerals = numerals - 5
      roman.push("V")
    }else if(numerals >= 1) {
      if(numerals >= 4) {
        numerals = numerals - 4
        roman.push("IV")
      } else {
      numerals = numerals - 1
      roman.push("I")
    }
    } else
      return numerals
      console.log(roman)
    }

  $("#results").prepend("<li>" + numerals + "</li>")
};

$(document).ready(function()  {
  $("#submit").click(function(event)  {
    event.preventDefault()
    numeralConverter()
    $("#results").append("<li>" + "it works" + "</li>")
  })
});
