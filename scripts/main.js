let input = document.querySelector('.input input');
let button = document.querySelector('.input button');
let list = document.querySelector('.list ol');

let handleSubmit = () => { 
  let toDoItem = document.createElement('li');
  toDoItem.textContent = input.value;
  list.appendChild(toDoItem);
  input.value = '';
}

let handleEnterClick = (event) => {
  event.code === 'Enter' ? handleSubmit() : console.log(event.code);
}

input.addEventListener('keydown', handleEnterClick);
button.addEventListener('click', handleSubmit);
