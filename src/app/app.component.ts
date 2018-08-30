import { Component } from '@angular/core';
import 'hammerjs';
import {HomeComponent} from './components/home/home.component';
import {BookServiceComponent} from './components/book-service/book-service.component';
import {LoginComponent} from './components/login/login.component';
import {AboutUsComponent} from './components/about-us/about-us.component';
import {ContactUsComponent} from './components/contact-us/contact-us.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tabLinks = [
    {label: 'Home',         path: '/home',          component: HomeComponent},
    {label: 'About us',     path: '/about-us',      component: AboutUsComponent},
    {label: 'Book Service', path: '/book-service',  component: BookServiceComponent},
    {label: 'Login',        path: '/login',         component: LoginComponent},
    {label: 'Contact Us',   path: '/contact-us',    component: ContactUsComponent}
  ];
}
