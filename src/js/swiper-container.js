function getSwiperSlideHidden() {
	let buttons = document.querySelectorAll('.button__deploy-swiper');
	let firstButton = buttons[0];
	let secondButton = buttons[1];
	let modalContainers = document.querySelectorAll('.modal-swiper');
	let firstSwiperSlides = modalContainers[0].querySelectorAll('.swiper-container__swiper-slide');
	let secondSwiperSlides = modalContainers[1].querySelectorAll('.swiper-container__swiper-slide');

	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', checkButtonAndHide);
	}
	
	function checkButtonAndHide(e) {
		if (e.target == firstButton) {
			hidden(firstSwiperSlides, e.target);
		} else {
			hidden(secondSwiperSlides, e.target);
		}
	}
		
	function hidden(swiperSlides, button) {
		for (let j = 0; j < swiperSlides.length; j++) {
			if (getComputedStyle(swiperSlides[j]).display == 'none') {
				button.textContent = 'Скрыть';
				button.classList.add('button__deploy--reverse');
				swiperSlides[j].style.display = "flex";
			} else if (swiperSlides[j].style.display == "flex") {
				button.textContent = 'Показать все';
				button.classList.remove('button__deploy--reverse');
				swiperSlides[j].style.display = "";
			}
		}
	}
}

export {getSwiperSlideHidden};
