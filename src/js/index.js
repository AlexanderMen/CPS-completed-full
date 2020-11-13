import Swiper, { Pagination } from 'swiper';

import 'swiper/swiper-bundle.css';

import '../scss/style.scss';

import {getTextHidden} from './about-company.js';

import {getSwiperSlideHidden} from './swiper-container.js';

import {getModalMenu} from './modal-menu.js';

import {getFeedbackMenu} from './modal-feedback.js';

import {getCallMenu} from './modal-call.js';

Swiper.use(Pagination);

window.onload = function () {
	if (window.innerWidth < 768) {
		let swiper = new Swiper('.swiper-container', {
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},
			slidesPerView: 'auto'
		});
	}
};

getTextHidden();

getSwiperSlideHidden();

getModalMenu();

getFeedbackMenu();

getCallMenu();




