$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why Hello there!</li>");
    $("ul#user").children('li').first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children('li').first().click(function() {
      $(this).remove();
    });
  });
  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goobye user!");
    $("ul#user").children('li').first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children('li').first().click(function() {
      $(this).remove();
    });
  });
  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>I meant no offense, chill dawg");
    $("ul#user").children('li').first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children('li').first().click(function() {
      $(this).remove();
    });
  });
});
