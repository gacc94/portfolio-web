import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'gac-header',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	ngOnInit(): void {
		/*=============== SHOW MENU ===============*/
		const navMenu = document.getElementById('nav-menu'),
			navToggle = document.getElementById('nav-toggle'),
			navClose = document.getElementById('nav-close');

		/*===== MENU SHOW =====*/
		/* Validate if constant exists */
		if (navToggle && navMenu) {
			navToggle.addEventListener('click', () => {
				navMenu.classList.add('show-menu');
			});
		}

		/*===== MENU HIDDEN =====*/
		/* Validate if constant exists */
		if (navClose && navMenu) {
			navClose.addEventListener('click', () => {
				navMenu.classList.remove('show-menu');
			});
		}
		/*=============== REMOVE MENU MOBILE ===============*/
		const navLink = document.querySelectorAll('.nav__link');

		const linkAction = (): void => {
			const navMenu = document.getElementById('nav-menu');
			// When we click on each nav__link, we remove the show-menu class
			if (navMenu) navMenu.classList.remove('show-menu');
		};
		navLink.forEach((n) => n.addEventListener('click', linkAction));

		const blurHeader = (): void => {
			const header = document.getElementById('header');
			// When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
			if (header) {
				window.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header');
			}
		};
		window.addEventListener('scroll', blurHeader);
	}
}
