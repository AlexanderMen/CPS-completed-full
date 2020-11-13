function getCallMenu() {
	let modalCallMenu = document.querySelector('.modal-call');
	let callButtons = document.querySelectorAll('.headerAndMenuButtons--call');
	let bodyBlurElem = document.querySelector('.header-main-footer-container');
	let closeButton = modalCallMenu.querySelector('.headerAndMenuButtons--close');
	
	for (let i = 0; i < callButtons.length; i++) {
		callButtons[i].addEventListener('click', function() {
			modalCallMenu.classList.add("modal-menuFeedback--active");
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
			modalCallMenu.classList.remove("modal-menuFeedback--active");
	})
}

export {getCallMenu};


