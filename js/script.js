let button = document.getElementById('addElem');

button.addEventListener('click', function () {
  let list = document.getElementById('list');
  let item = document.getElementsByTagName('li');
  let newElem = document.createElement('li');
  newElem.innerHTML = 'item ' + item.length;
  list.appendChild(newElem);
});