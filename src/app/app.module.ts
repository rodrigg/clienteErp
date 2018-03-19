import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ClienteListComponent } from './pages/cliente/cliente-list/cliente-list.component';
import { routing } from './router';
import { HomeComponent } from './pages/home/home.component';
import { BuscadorClientePipe } from './pipes/buscador-cliente.pipe';
import { AlertComponent } from './login/alert/alert.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { ErrorInterceptorProvider } from './login/error.interceptor';
import { JwtInterceptorProvider } from './login/jwt.interceptor';
import { UserService } from './login/user.service';
import { AuthenticationService } from './login/authentication.service';
import { AuthGuard } from './login/auth.guard';
import { AlertService } from './login/alert.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClienteListComponent,
    HomeComponent,
    BuscadorClientePipe,
    AlertComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule
    ,HttpModule
    ,FormsModule,routing,HttpClientModule
 
    
   
  ],
  providers: [   AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    ErrorInterceptorProvider,
    JwtInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
