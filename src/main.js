import './css/style.scss';

const modal = document.getElementById('modal');

function showFunc() {
  modal.classList.add('shown');
}

function hideFunc() {
  modal.classList.remove('shown');
}

const buttonLearn = document.getElementById('buttonLearn');

const closeButton = document.getElementsByClassName('closeButton')[0];

buttonLearn.addEventListener('click', showFunc);

closeButton.addEventListener('click', hideFunc);
