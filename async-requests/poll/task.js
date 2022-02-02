'use strict'

window.onload = function(){
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
	xhr.send();

	xhr.onload = function() {
		let result = xhr.response;
		let obj = JSON.parse(result);
			console.log(obj);
			let question = obj.data.title;
			document.querySelector('#poll__title').textContent = question;
			for (let field of obj.data.answers) {
				document.querySelector('#poll__answers').innerHTML +=
				`<button class="poll__answer" onclick="alert('Спасибо, ваш голос засчитан!')" >${field}</button>`;

			}
	};
};