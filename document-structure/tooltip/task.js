'use strict'

window.onload = function() {
	let arr = Array.from(document.querySelectorAll('.has-tooltip'));
	for (let element of arr) {
		element.onclick = function(event) {
			let hint = document.querySelector('.tooltip');
			hint.classList.toggle('tooltip_active');
			if(hint.innerText !== event.currentTarget.getAttribute('title')){
				hint.innerText = event.currentTarget.getAttribute('title');
				hint.classList.add('tooltip_active');
			}
			hint.style.left = event.currentTarget.getBoundingClientRect().left + 'px';
			hint.style.top = event.currentTarget.getBoundingClientRect().bottom + 'px';
			return false;
		};
	}	
}