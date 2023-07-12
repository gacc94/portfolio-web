import { Component } from '@angular/core';
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
export class ProjectsComponent {
	cards: ICard[] = [
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
}
