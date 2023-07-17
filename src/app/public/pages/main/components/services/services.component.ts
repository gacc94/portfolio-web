import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntersectionObserverDirective } from '../../../../common/directives/intersection-observer.directive';

@Component({
	selector: 'gac-services',
	standalone: true,
	imports: [CommonModule, IntersectionObserverDirective],
	templateUrl: './services.component.html',
	styleUrls: ['./services.component.scss']
})
export class ServicesComponent {}
