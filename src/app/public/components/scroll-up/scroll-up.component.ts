import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'gac-scroll-up',
	standalone: true,
	imports: [CommonModule],
	template: `
		<a href="#" class="scrollup" id="scroll-up">
			<i class="ri-arrow-up-line"></i>
		</a>
	`,
	styleUrls: ['./scroll-up.component.scss']
})
export class ScrollUpComponent implements OnInit {
	ngOnInit(): void {
		/*=============== SHOW SCROLL UP ===============*/
		const scrollUp = (): void => {
			const scrollUp = document.getElementById('scroll-up');
			// When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
			if (scrollUp)
				window.scrollY >= 300 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
		};
		window.addEventListener('scroll', scrollUp);
	}
}
