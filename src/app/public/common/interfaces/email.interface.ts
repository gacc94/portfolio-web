import { FormControl } from '@angular/forms';

export interface IForm {
	name: FormControl<string | null>;
	email: FormControl<string | null>;
	message: FormControl<string | null>;
}

export interface IEmailUser {
	name: string;
	email: string;
	message: string;
}
