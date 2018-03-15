import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ClienteListComponent } from './pages/cliente/cliente-list/cliente-list.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'clientes', component: ClienteListComponent },
    { path: '**', component: HomeComponent },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];
export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders=RouterModule.forRoot(routes);