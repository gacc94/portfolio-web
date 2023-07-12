import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmailService } from '../../../../common/services/email.service';
import { IEmailUser, IForm } from '../../../../common/interfaces/email.interface';
import { EmailJSResponseStatus } from '@emailjs/browser';
import { HttpErrorResponse } from '@angular/common/http';

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
	form!: FormGroup<IForm>;
	emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	ngOnInit(): void {
		this.form = this.fb.group({
			name: ['pedro', [Validators.required]],
			email: ['pedro@gmnail.com', [Validators.required, Validators.pattern(this.emailRegex)]],
			message: ['Hello', [Validators.required]]
		});
	}

	onSubmit(): void {
		if (!this.form.valid) {
			this.form.markAllAsTouched();
			return;
		}
		const { name, email, message } = this.form.getRawValue() as IEmailUser;
		const template: IEmailUser = { name, email, message };
		console.log(template);
		this.emailService.sendEmail(template).subscribe({
			next: (value: EmailJSResponseStatus) => {
				console.log(value);
				console.log('Message sent successfully');
			},
			error: (err) => {
				if (err instanceof HttpErrorResponse) console.log(err.message);
				console.log('Message not sent (service error)');
			}
		});
	}
}
