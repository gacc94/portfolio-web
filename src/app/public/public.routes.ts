import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';

export const publicRoutes: Routes = [
	{
		path: '',
		component: PublicLayoutComponent,
		children: [
			{
				path: '',
				loadComponent: () => import('./pages/main/main.component').then((c) => c.MainComponent)
			}
			// { path: '**', redirectTo: 'home' }
		]
	}
];
