function getModalMenu() {
	let modalMenues = document.querySelectorAll('.modal-menues');
	let openButtons = {
		burgerBtn: document.querySelector('.primary-buttons--burger'),
		headerFeedbackBtn: document.querySelectorAll('.primary-buttons--chat')[0],
		modalmenuFeedbackBtn: document.querySelectorAll('.primary-buttons--chat')[1],
		headerCallBtn: document.querySelectorAll('.primary-buttons--call')[0],
		modalmenuCallBtn: document.querySelectorAll('.primary-buttons--call')[1],
	};
	let overflowHiddenElem = document.documentElement;
	let closeBtns = document.querySelectorAll('.primary-buttons--close');
	let blurElem = document.querySelector('.blur-wrapper');
	let closingElems = [blurElem];
	
	for (let btns = 0; btns < closeBtns.length; btns++) {
		closingElems.push(closeBtns[btns]);
	}
	
	for (let prop in openButtons) {
		openButtons[prop].addEventListener('click', function(e) {
			if (e.target == openButtons.burgerBtn) {
				modalMenues[0].classList.add('modal-menu--active');
			} else if (e.target == openButtons.headerFeedbackBtn || e.target == openButtons.modalmenuFeedbackBtn) {
				modalMenues[1].classList.add('modal-menuFeedback--active');
			} else {
				modalMenues[2].classList.add('modal-menuFeedback--active');
			}
			blurElem.classList.add('blur-wrapper--blured');
			overflowHiddenElem.classList.add('blur-wrapper--overflow-hidden');
			if (e.target == openButtons.modalmenuFeedbackBtn || e.target == openButtons.modalmenuCallBtn) {
				modalMenues[0].classList.remove('modal-menu--active');
			}
		})
	}
	
	for (let i = 0; i < closingElems.length; i++) {
		closingElems[i].addEventListener('click', function(e) {
			if (modalMenues[0].classList.contains('modal-menu--active')) {
				modalMenues[0].classList.remove('modal-menu--active');
			} else if (modalMenues[1].classList.contains('modal-menuFeedback--active')) {
				modalMenues[1].classList.remove('modal-menuFeedback--active');
			} else {
				modalMenues[2].classList.remove('modal-menuFeedback--active');
			}
			blurElem.classList.remove('blur-wrapper--blured');
			overflowHiddenElem.classList.remove('blur-wrapper--overflow-hidden');
		})
	}
}

export {getModalMenu};


