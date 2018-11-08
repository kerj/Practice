$(document).ready(function()  {
  $("form#testQuestions").submit(function(event)  {
    event.preventDefault();
    var symptom = [];
    var health = [];
    var manage = [];

    $("input:checkbox[name=stressSymptom]:checked").each(function() {
      symptom.push($(this).val())
    });
    $("input:checkbox[name=stressHealth]:checked").each(function() {
      health.push($(this).val())
    });
    $("input:checkbox[name=stressManage]:checked").each(function() {
      manage.push($(this).val())
    });
    if (symptom.length + health.length > manage.length*2) {
      $('#results').append("<p>" + "You may have an unhealthy amount of unmanaged stress, look for ways to either reduce the amount of stress in life or pick up more healthy habits to manage your stressful activities." + "</p>")
    }else if (symptom.length + health.length < manage.length*2) {
      $("#results").append("<p>" + "You do a good job of manageing your stress load, if you still feel stress is a problem for yourself consider evaluating where your stress comes from and seek to eliminate unnessesary stress." + "</p>")
    }else {
      $('#results').append("<p>" + "Your stress and your stress management is balanced, continue to identify stress and be sure to continue healthy coping techniques" + "</p>")
    }
  })
});



//answers check to an array => count items in array => compare values => return outcome
