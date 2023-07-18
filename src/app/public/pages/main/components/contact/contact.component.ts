import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmailService } from '../../../../common/services/email.service';
import { IEmailUser, IForm } from '../../../../common/interfaces/email.interface';
import { EmailJSResponseStatus } from '@emailjs/browser';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'gac-contact',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
	private readonly fb: FormBuilder = inject(FormBuilder);
	private readonly emailService: EmailService = inject(EmailService);
	private readonly toastService: ToastrService = inject(ToastrService);
	form!: FormGroup<IForm>;
	emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	ngOnInit(): void {
		this.form = this.fb.group({
			name: ['', [Validators.required, Validators.minLength(3)]],
			email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
			message: ['', [Validators.required]]
		});
		console.log(this.form.controls.email.errors);
	}
	get nameField(): AbstractControl {
		return this.form.controls.name;
	}
	get emailField(): AbstractControl {
		return this.form.controls.email;
	}
	get messageField(): AbstractControl {
		return this.form.controls.message;
	}
	isValidField(field: AbstractControl): boolean {
		// console.log({ dirty: control?.dirty, pristine: control?.pristine });
		return (field.touched || field.dirty) && !field.valid;
	}
	onSubmit(): void {
		if (!this.form.valid) {
			this.form.markAllAsTouched();
			return;
		}
		const { name, email, message } = this.form.getRawValue() as IEmailUser;
		const template: IEmailUser = { name: name.toUpperCase(), email, message };
		console.log(template);
		this.emailService.sendEmail(template).subscribe({
			next: (value: EmailJSResponseStatus) => {
				console.log(value);
				this.toastService.success('Message sent successfully ', 'APP-GACC');
				this.form.reset();
			},
			error: (err) => {
				// if (err instanceof HttpErrorResponse) console.log(err.message);
				// console.log('Message not sent (service error)');
				this.toastService.error('Message not sent (service error)', 'APP-GACC');
			}
		});
	}
}
