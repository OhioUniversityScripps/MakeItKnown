$(function() {
  setBackground();
  setStatement();
});

setStatement = function(){
  statement = $('#statement');

  statement.text(randomItem(window.statements));
  return true;
}

setBackground = function(){
  $('body').css('background-color', randomItem(window.backgrounds));
  console.log
  return true;
}

randomItem = function(array) {
  index = Math.floor(Math.random() * array.length);

  return array[index];
}