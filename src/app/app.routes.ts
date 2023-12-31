import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./public/public.routes').then((c) => c.publicRoutes)
	},
	{
		path: '**',
		redirectTo: ''
	}
];
