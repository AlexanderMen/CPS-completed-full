function getFeedbackMenu() {
	let modalFeedbackMenu = document.querySelector('.modal-feedback');
	let feedbackButtons = document.querySelectorAll('.headerAndMenuButtons--chat');
	let bodyBlurElem = document.querySelector('.header-main-footer-container');
	let closeButton = modalFeedbackMenu.querySelector('.headerAndMenuButtons--close');
	
	for (let i = 0; i < feedbackButtons.length; i++) {
		feedbackButtons[i].addEventListener('click', function() {
			modalFeedbackMenu.classList.add("modal-menuFeedback--active");
			if (window.innerWidth < 768) {
				bodyBlurElem.style.display = 'none';
				return;
			}
			bodyBlurElem.style.opacity = '0.04';
		})
	}
	
	closeButton.addEventListener('click', function() {
		if (window.innerWidth < 768) {
			bodyBlurElem.style.display = '';
		} else {
			bodyBlurElem.style.opacity = '';
		}
			modalFeedbackMenu.classList.remove("modal-menuFeedback--active");
	})
}

export {getFeedbackMenu};


