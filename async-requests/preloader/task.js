'use strict'

window.onload = function(){
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
	xhr.send();

	xhr.onload = function() {
		document.querySelector('#loader').classList.remove('loader_active');
		let result = xhr.response;
		let obj = JSON.parse(result);
			console.log(obj);
			for (let field in obj.response.Valute) {
				let charCode = obj.response.Valute[field].CharCode;
				let value = obj.response.Valute[field].Value;
				document.querySelector('#items').innerHTML +=
				`<div class="item">
				<div class="item__code">${charCode}</div>
		        <div class="item__value">${value}</div>
		        <div class="item__currency">руб.</div>
		        </div>`
			}
	};
};