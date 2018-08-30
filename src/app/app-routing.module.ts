import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {BookServiceComponent} from './components/book-service/book-service.component';
import {LoginComponent} from './components/login/login.component';
import {AboutUsComponent} from './components/about-us/about-us.component';
import {ContactUsComponent} from './components/contact-us/contact-us.component';

const appRoutes: Routes = [
  { path: 'home',  component: HomeComponent},
  { path: 'about-us',  component: AboutUsComponent},
  { path: 'login',  component: LoginComponent},
  { path: 'book-service',  component: BookServiceComponent},
  { path: 'contact-us',  component: ContactUsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  LoginComponent,
  AboutUsComponent,
  BookServiceComponent,
  ContactUsComponent]
