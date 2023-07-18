import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		importProvidersFrom(BrowserModule, BrowserAnimationsModule, HttpClientModule),
		provideAnimations(),
		provideToastr({
			timeOut: 5000,
			positionClass: 'toast-bottom-right',
			preventDuplicates: true
		})
	]
};
