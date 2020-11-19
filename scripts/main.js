let input = document.querySelector('.input input');
let button = document.querySelector('.input button');
let list = document.querySelector('.list ol');
let inputValue = '';

input.addEventListener('change', handleInputChange);
button.addEventListener('click', handleSubmit);


function handleInputChange(event) {
  inputValue = event.target.value;
}

function handleSubmit() {
  let toDoItem = document.createElement('li');
  toDoItem.textContent = inputValue;
  console.log(toDoItem);
  list.appendChild(toDoItem);
  input.value = '';
  inputValue = '';
}

