import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntersectionObserverDirective } from '../../../../common/directives/intersection-observer.directive';

@Component({
	selector: 'gac-experience',
	standalone: true,
	imports: [CommonModule, IntersectionObserverDirective],
	templateUrl: './experience.component.html',
	styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {}
