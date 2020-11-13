function getTextHidden () {
	let button = document.querySelector('.button__deploy');
	let textHidden = document.querySelector('.about-company__text--hidden');
	let computedStyle = getComputedStyle(textHidden);

	button.addEventListener('click', function() {
		if (computedStyle.display == 'none') {
			button.textContent = 'Скрыть';
			button.classList.add('button__deploy--reverse');
			textHidden.style.display = "block";
			return;
		}
		button.textContent = 'Показать все';
		button.classList.remove('button__deploy--reverse');
		textHidden.style.display = "";
	});
}

export {getTextHidden};
