import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ClienteListComponent } from './pages/cliente/cliente-list/cliente-list.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './login/auth.guard';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { ProductosComponent } from './productos/productos.component';
import { ClienteComponent } from './cliente/cliente.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'clientes', component: ClienteListComponent,
    children: [
        
        { path: 'cliente/:id', component:ClienteComponent },
        { path: 'nuevo', component:ClienteComponent },
        { path: 'productos', component: ProductosComponent },
      ]
    },
    { path: '**', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }


    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];
export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders=RouterModule.forRoot(routes);

