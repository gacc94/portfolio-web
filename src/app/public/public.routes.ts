import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';

export const publicRoutes: Routes = [
	{
		path: '',
		component: PublicLayoutComponent,
		children: [
			{
				path: 'home',
				loadComponent: () => import('./pages/home/home.component').then((c) => c.HomeComponent)
			},
			{ path: '**', redirectTo: 'home' }
		]
	}
];
