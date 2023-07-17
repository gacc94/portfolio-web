import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ServicesComponent } from './components/services/services.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import * as Aos from 'aos';
import { ExperienceComponent } from './components/experience/experience.component';
import { IntersectionObserverDirective } from '../../common/directives/intersection-observer.directive';

@Component({
	selector: 'gac-main',
	standalone: true,
	imports: [
		CommonModule,
		HomeComponent,
		AboutComponent,
		SkillsComponent,
		ServicesComponent,
		ProjectsComponent,
		ContactComponent,
		FooterComponent,
		ExperienceComponent,
		IntersectionObserverDirective
	],
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
	ngOnInit(): void {
		/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
		const sections = document.querySelectorAll('section[id]');

		const scrollActive = (): void => {
			const scrollY = window.scrollY;

			sections.forEach((current: Element) => {
				const sectionHeight = (current as HTMLElement).offsetHeight,
					sectionTop = (current as HTMLElement).offsetTop - 58,
					sectionId = (current as HTMLElement).getAttribute('id'),
					sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

				if (sectionsClass) {
					if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
						sectionsClass.classList.add('active-link');
					} else {
						sectionsClass.classList.remove('active-link');
					}
				}
			});
		};
		window.addEventListener('scroll', scrollActive);

		Aos.init();
	}
}
