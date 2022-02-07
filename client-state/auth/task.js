'use strict';

const form = document.getElementById('signin__form');
const signin = document.getElementById('signin');
let user = localStorage.user_id;

if (user) {
  welcomeUser();
} else {
  signin.classList.add('signin_active');
}

form.addEventListener('submit', sendRequest);

function sendRequest(e) {
  const formData = new FormData(form);

  const xhr = new XMLHttpRequest();
  const requestURL = form.getAttribute("action");

  xhr.open('POST', requestURL);
  xhr.responseType = 'json';

  xhr.addEventListener('readystatechange', function () {
    if (this.readyState == 4 && this.status == 200) {
      if (!xhr.response.success) {
        alert('Неверный логин/пароль');
      } else {
        user = xhr.response.user_id;
        welcomeUser();
      }
      form.reset();
    }
  })

  xhr.send(formData);

  e.preventDefault();
}

function welcomeUser() {
  signin.classList.remove('signin_active');

  const welcome = document.getElementById('welcome');
  welcome.classList.add('welcome_active');

  const userId = document.getElementById('user_id');
  userId.textContent = `${user}`;
}