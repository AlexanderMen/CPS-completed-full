function getSwiperSlideHidden() {
	let buttons = document.querySelectorAll('.button__deploy-swiper');
	let firstButton = buttons[0];
	let secondButton = buttons[1];
	let modalWrappers = document.querySelectorAll('.modal-swiper');
	let firstSwiperSlides = modalWrappers[0].querySelectorAll('.swiper-outer-wrapper__swiper-slide');
	let secondSwiperSlides = modalWrappers[1].querySelectorAll('.swiper-outer-wrapper__swiper-slide');

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
				swiperSlides[j].classList.add('swiper-outer-wrapper--hiddeningSlide');
			} else if (swiperSlides[j].classList.contains('swiper-outer-wrapper--hiddeningSlide')) {
				button.textContent = 'Показать все';
				button.classList.remove('button__deploy--reverse');
				swiperSlides[j].classList.remove('swiper-outer-wrapper--hiddeningSlide');
			}
		}
	}
}

export {getSwiperSlideHidden};
