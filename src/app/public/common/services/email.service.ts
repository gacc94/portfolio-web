import { Injectable } from '@angular/core';
import emailJs, { EmailJSResponseStatus } from '@emailjs/browser';
import { from, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class EmailService {
	private readonly dataEmail = environment.emailJS;
	sendEmail(template: { name: string; email: string; message: string }): Observable<EmailJSResponseStatus> {
		return from(emailJs.send(this.dataEmail.serviceId, this.dataEmail.templateId, template, this.dataEmail.publicKey));
	}
}
