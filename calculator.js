var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var theAnswer = document.getElementById('add-sum');
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
  var add = one + two;
  var minus = one - two;
  var times = one * two;
  var divide = one / two;
  var symbolId = this.attributes['data-btn'].value;
  var symbol = document.getElementById(symbolId);
  if (this.classList.contains('add')) {
      theAnswer.innerHTML = 'The answer is: ' + add;
  }
  else if (this.classList.contains('subtract')) {
           theAnswer.innerHTML = 'The answer is: ' + minus;
  }
  else if (this.classList.contains('multiply')) {
           theAnswer.innerHTML = 'The answer is: ' + times;
  } else {
    theAnswer.innerHTML = 'The answer is: ' + divide;
  }
}

//Clear Inputs//
erase.addEventListener('click', function(){
  num1.value = '';
  num2.value = '';
  theAnswer.innerHTML = 'The answer is: '
});
