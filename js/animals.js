$(document).ready(function() {
  $('#infoSnake').click(function() {
    $(this).toggleClass('hide');
    $('#snake').toggleClass('hide');
  });
  $('#snake').click(function() {
    $(this).toggleClass('hide');
    $('#infoSnake').toggleClass('hide');
    if ($('#beetle').hasClass('hide')) {
      $('#infoBeetle').toggleClass('hide');
      $('#beetle').toggleClass('hide');
    }else if ($('#moose').hasClass('hide')) {
      $('#infoMoose').toggleClass('hide');
      $('#moose').toggleClass('hide');
    }else{

    }
  });
  $('#infoBeetle').click(function() {
    $(this).toggleClass('hide');
    $('#beetle').toggleClass('hide');
  });
  $('#beetle').click(function() {
    $(this).toggleClass('hide');
    $('#infoBeetle').toggleClass('hide');
    if ($('#snake').hasClass('hide')) {
      $('#infoSnake').toggleClass('hide');
      $('#snake').toggleClass('hide');
    }else if ($('#moose').hasClass('hide')) {
      $('#infoMoose').toggleClass('hide');
      $('#moose').toggleClass('hide');
    }else{

    }
  });
  $('#infoMoose').click(function() {
    $(this).toggleClass('hide');
    $('#moose').toggleClass('hide');
  });
  $('#moose').click(function() {
    $(this).toggleClass('hide');
    $('#infoMoose').toggleClass('hide');
    if ($('#beetle').hasClass('hide')){
      $('#infoBeetle').toggleClass('hide');
      $('#beetle').toggleClass('hide');
    }else if ($('#snake').hasClass('hide')) {
      $('#infoSnake').toggleClass('hide');
      $('#snake').toggleClass('hide');
    }else{
    }
  });
});
