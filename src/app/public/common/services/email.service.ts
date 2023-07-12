import { Injectable } from '@angular/core';
import emailJs, { EmailJSResponseStatus } from '@emailjs/browser';
import { IEmailUser } from '../interfaces/email.interface';
import { from, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class EmailService {
	private readonly serviceID: string = 'service_0gdu4u9';
	private readonly templateID: string = 'template_46aonlq';
	private readonly publicKey: string = '0KIbgFpBYPMychYWl';

	sendEmail(template: { name: string; email: string; message: string }): Observable<EmailJSResponseStatus> {
		return from(emailJs.send(this.serviceID, this.templateID, template, this.publicKey));
	}
}
