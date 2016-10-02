var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var theAnswer = document.getElementById('answer');
var erase = document.getElementById('reset');
var buttons = document.getElementsByClassName('btns');

//Adding the Click Event//
for (i = 0; i < buttons.length; i++) {
  var button = buttons[i];
  button.addEventListener('click', answer);
}

//Calculating//
function answer() {
  var one = parseFloat(num1.value) || 0;
  var two = parseFloat(num2.value) || 0;
  var symbol = this.attributes['data-btn'].value;
  theAnswer.innerHTML = eval(one + symbol + two);
}

//Clear Inputs//
erase.addEventListener('click', function(){
  num1.value = '';
  num2.value = '';
  theAnswer.innerHTML = '';
});
