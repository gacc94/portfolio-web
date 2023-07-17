import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntersectionObserverDirective } from '../../../../common/directives/intersection-observer.directive';

@Component({
	selector: 'gac-skills',
	standalone: true,
	imports: [CommonModule, IntersectionObserverDirective],
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {}
