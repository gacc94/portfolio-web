import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { ScrollUpComponent } from '../../components/scroll-up/scroll-up.component';

@Component({
	selector: 'gac-public-layout',
	standalone: true,
	imports: [CommonModule, RouterOutlet, HeaderComponent, ScrollUpComponent],
	templateUrl: './public-layout.component.html',
	styleUrls: ['./public-layout.component.scss']
})
export class PublicLayoutComponent {}
