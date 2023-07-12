import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ServicesComponent } from './components/services/services.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

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
		ContactComponent
	],
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss']
})
export class MainComponent {}
