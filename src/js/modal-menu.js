function getModalMenu() {
	let modalMenu = document.querySelector('.modal-menu');
	let burgerButton = document.querySelector('.headerAndMenuButtons--burger');
	let chatButton = document.querySelector('.headerAndMenuButtons--chat');
	let callButton = document.querySelector('.headerAndMenuButtons--call');
	let bodyBlurElem = document.querySelector('.header-main-footer-container');
	let closingElems = [modalMenu.querySelector('.headerAndMenuButtons--close'),
									 bodyBlurElem];
	
	burgerButton.addEventListener('click', function() {
		modalMenu.classList.add("modal-menu--active");
		if (window.innerWidth < 768) {
			bodyBlurElem.style.display = 'none';
			return;
		}
		bodyBlurElem.style.opacity = '0.04';
	});
	
	for ( let i = 0; i < closingElems.length; i++ ) {
		closingElems[i].addEventListener('click', function(e) {
			if (e.target == burgerButton || e.target == chatButton || e.target == callButton) return;
			if (window.innerWidth < 768) {
				bodyBlurElem.style.display = '';
			} else {
				bodyBlurElem.style.opacity = '';
			}
				modalMenu.classList.remove("modal-menu--active");
		})
	}
}

export {getModalMenu};


