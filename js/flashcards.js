$(document).ready(function() {
  $('#selectTerm').click(function() {
    var selectedValue = $('.showTerm').val();
    if(selectedValue === "1") {
      $('ul').removeClass().addClass('showJavaScript');
    }else if (selectedValue === "2") {
        $('ul').removeClass().addClass('showOperators');
    }else if (selectedValue === "3") {
        $('ul').removeClass().addClass('showVariables');
    }else if (selectedValue === "4") {
        $('ul').removeClass().addClass('showVariablenamingconventions');
    }else if (selectedValue === "5") {
        $('ul').removeClass().addClass('showFunctions');
    }else if (selectedValue === "6") {
        $('ul').removeClass().addClass('showMethods');
    }else if (selectedValue === "7") {
        $('ul').removeClass().addClass('showArguments');
    }else if (selectedValue === "8") {
        $('ul').removeClass().addClass('showParameters');
    }else if (selectedValue === "9") {
        $('ul').removeClass().addClass('showReturn');
    }else if (selectedValue === "10") {
        $('ul').removeClass().addClass('showChainingmethods');
    }else if (selectedValue === "11") {
        $('ul').removeClass().addClass('showStrings');
    }else if (selectedValue === "12") {
        $('ul').removeClass().addClass('showBooleans');
    }else if (selectedValue === "13") {
        $('ul').removeClass().addClass('showUndefined');
    }else if (selectedValue === "14") {
        $('ul').removeClass().addClass('showNaN');
    }else if (selectedValue === "15") {
        $('ul').removeClass().addClass('showEscape');
    }else if (selectedValue === "16") {
        $('ul').removeClass().addClass('showAlert');
    }else if (selectedValue === "17") {
        $('ul').removeClass().addClass('showComments');
    }else if (selectedValue === "18") {
        $('ul').removeClass().addClass('showjQuery');
    }else if (selectedValue === "19") {
        $('ul').removeClass().addClass('showAttributes');
    }else {
        $('ul').removeClass().addClass('crazy');
      };
  });

});
