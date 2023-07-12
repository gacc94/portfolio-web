import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface IForm {
	name: FormControl<string | null>;
	email: FormControl<string | null>;
	text: FormControl<string | null>;
}

@Component({
	selector: 'gac-contact',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
	private readonly fb: FormBuilder = inject(FormBuilder);
	form!: FormGroup<IForm>;

	ngOnInit(): void {
		this.form = this.fb.group({
			name: ['', [Validators.required]],
			email: ['', [Validators.required, Validators.pattern('')]],
			text: ['', [Validators.required]]
		});
	}

	onSubmit(): void {
		if (!this.form.valid) {
			this.form.markAllAsTouched();
			return;
		}
		console.log(this.form.value);
	}
}
