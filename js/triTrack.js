$(document).ready(function() {
  $('#getType').click(function() {
    let poly = {
      A: parseInt($('#sideA').val(), 10),
      B: parseInt($('#sideB').val(), 10),
      C: parseInt($('#sideC').val(), 10)
    }
    function findTriangle(a, b, c){
      
    }

    var inputA = parseInt($('#sideA').val(), 10);
    var inputB = parseInt($('#sideB').val(), 10);
    var inputC = parseInt($('#sideC').val(), 10);

    if (inputA == inputB && inputA == inputC) {
      $("#output").prepend('<p>All sides are equal, this is an Equilateral triangle!</p>');
    }else if (inputB + inputA <= inputC || inputB + inputC <= inputA || inputA + inputC <= inputB) {
      ($('#output').prepend('<p>These sides do not make a triangle!</p>'));
    }else if (inputA == inputB && inputA != inputC || inputA == inputC && inputA != inputB || inputB == inputC && inputA != inputB && inputA != inputC) {
      ($('#output').prepend('<p>Two sides are equal, this is an Isosceles triangle!</p>'));
    }else {
      ($('#output').prepend('<p>No sides are equal this means we have a Scaline triangle!</p>'))
   }
  });
});
