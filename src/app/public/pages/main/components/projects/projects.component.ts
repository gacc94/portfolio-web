import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ICard {
	img: string;
	subTitle: string;
	title: string;
}

@Component({
	selector: 'gac-projects',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements AfterViewInit {
	@ViewChild('projects') project!: ElementRef;
	@ViewChildren('card') cards!: QueryList<ElementRef>;
	cardsContent: ICard[] = [
		{
			img: 'assets/images/project-img-1.jpg',
			subTitle: 'Web',
			title: 'Modern website'
		},
		{
			img: 'assets/images/project-img-2.jpg',
			subTitle: 'Web',
			title: 'Modern website'
		},
		{
			img: 'assets/images/project-img-3.jpg',
			subTitle: 'Web',
			title: 'Modern website'
		},
		{
			img: 'assets/images/project-img-4.jpg',
			subTitle: 'Web',
			title: 'Modern website'
		},
		{
			img: 'assets/images/project-img-5.jpg',
			subTitle: 'Web',
			title: 'Modern website'
		},
		{
			img: 'assets/images/project-img-6.jpg',
			subTitle: 'Web',
			title: 'Modern website'
		}
	];
	ngAfterViewInit(): void {
		const projects: HTMLElement = this.project.nativeElement;
		const cards = this.cards;
		const callbackFn = (entries: IntersectionObserverEntry[], observer: IntersectionObserver): void => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					cards.forEach((el: ElementRef) => {
						el.nativeElement.classList.add('card-active');
					});
				} else {
					cards.forEach((el: ElementRef) => {
						el.nativeElement.classList.remove('card-active');
					});
				}
			});
		};

		const observer = new IntersectionObserver(callbackFn, {
			rootMargin: '20px',
			threshold: 0.2
		});
		observer.observe(projects);
	}
}
