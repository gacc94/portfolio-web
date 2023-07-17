import { Directive, ElementRef, inject, Input, OnDestroy, OnInit } from '@angular/core';

@Directive({
	selector: '[gacObserver]',
	standalone: true
})
export class IntersectionObserverDirective implements OnInit, OnDestroy {
	private element: ElementRef<HTMLElement> = inject(ElementRef<HTMLElement>);
	private observer!: IntersectionObserver;
	@Input() threshold = 0.2;
	@Input() rootMargin = '20px';
	@Input() nameClass = 'animate';

	constructor() {
		console.log();
	}
	ngOnInit(): void {
		this.createObserver();
		this.observer.observe(this.element.nativeElement);
	}
	private createObserver(): void {
		const options: IntersectionObserverInit = {
			rootMargin: this.rootMargin,
			threshold: this.threshold
		};
		this.observer = new IntersectionObserver((entries) => {
			entries.forEach((el: IntersectionObserverEntry) => {
				if (el.isIntersecting) {
					// console.log(el.target);
					this.applyAnimation(el.target);
				} else {
					this.removeAnimation(el.target);
					// console.log(el.target);
				}
			});
		}, options);
	}
	applyAnimation(element: Element | HTMLElement): void {
		element.classList.add(this.nameClass);
	}
	removeAnimation(element: Element): void {
		element.classList.remove(this.nameClass);
	}
	ngOnDestroy(): void {
		this.observer.disconnect();
	}
}
