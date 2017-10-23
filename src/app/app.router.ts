import { ModuleWithProviders } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

export const router: Routes = [
	{path:'', component:HomeComponent},
	//{path:'detail', component:DetailComponent},
	{path:'detail/:name', component:DetailComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);