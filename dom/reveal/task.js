'use strict'

window.onload = function() {
	var isInViewport = function(element){	
		const viewportHeight = window.innerHeight;
		const elementTop = element.getBoundingClientRect().top;
		const elementBottom = element.getBoundingClientRect().bottom;
		return elementTop < viewportHeight && elementBottom > 0 ? true : false;
	};

	window.onscroll = function() {
		let arr = Array.from(document.querySelectorAll('.reveal'));
		for (let i = 0; i < arr.length; i++) {
			if (isInViewport(arr[i])) {
				arr[i].classList.add('reveal_active');
			} else {
				arr[i].classList.remove('reveal_active');
			}
		}
	};
}