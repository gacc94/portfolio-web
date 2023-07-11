import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'gac-home',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	animations: []
})
export class HomeComponent implements OnInit {
	ngOnInit(): void {
		console.log('Soy Home');
	}
}
