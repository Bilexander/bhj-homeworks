'use strict'

let removerOnClick = function(event) {
	event.parentNode.remove();
};
window.onload = function() {
	const task = document.querySelector('#task__input');
	task.value = '';
	document.querySelector('#tasks__add').onclick = function() {

		if (task.value.length == 0) {
			return false;
		}	
		let container = document.createElement('div');
		container.classList.add('task');

		let discription = document.createElement('div');
		discription.classList.add('task__title');
		discription.innerHTML = task.value;

		let remover = document.createElement('a');			
		container.appendChild(discription);
		container.appendChild(remover);

		document.querySelector('#tasks__list').appendChild(container);
		remover.outerHTML = '<a onclick="removerOnClick(this)" href="#" class="task__remove">&times;</a>';
		task.value = '';

		return false;
	};
}