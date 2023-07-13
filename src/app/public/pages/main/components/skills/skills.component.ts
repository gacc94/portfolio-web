import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'gac-skills',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, AfterViewInit {
	@ViewChild('divSkill') skill!: ElementRef;
	@ViewChild('skillData') skillData!: ElementRef;
	@ViewChild('skillContent') skillContent!: ElementRef;

	ngOnInit(): void {
		console.log('');
	}

	ngAfterViewInit(): void {
		const skill = this.skill.nativeElement;
		const skillData = this.skillData.nativeElement;
		const skillContent = this.skillContent.nativeElement;

		const callbackFn = (entries: IntersectionObserverEntry[]): void => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					skillData.classList.add('data-active');
					skillContent.classList.add('content-active');
				} else {
					skillContent.classList.remove('content-active');
					skillData.classList.remove('data-active');
				}
			});
		};

		const observer = new IntersectionObserver(callbackFn, {
			rootMargin: '20px',
			threshold: 0.5
		});
		observer.observe(skill);
	}
}
