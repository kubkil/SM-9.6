let button = document.getElementById('addElem');

button.addEventListener('click', function () {
  let list = document.getElementById('list');
  let items = document.getElementsByTagName('li');
  let newElem = document.createElement('li');
  newElem.innerHTML = 'item ' + items.length;
  list.appendChild(newElem);
});

// items bo tablica, czyli zawiera kilka elementów

// var randomButtons = document.getElementsByClassName('button');
// var buttonLenght = document.getElementsByClassName('button').length;
// var buttonTxt = document.getElementsByTagName('button').innerText;

// for (var i = 0 ; i < buttonLenght; i++) {
//   alert('I will show up four times, because there are four button elements');

// }


// console.log(randomButtons);
// console.log(buttonLenght);
// console.log(buttonTxt);