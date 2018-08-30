import {Component, OnInit} from '@angular/core';
import {User} from '../../user';

export interface Options {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  selectedValue: string;
  options: Options [] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  user: User = {
    id: 1,
    name: 'Raymond',
    password: 'password',
    surname: 'password',
    contactNumber: '011-489-3489',
    email: 'ray@icloud.com'
  };
  submitted = false;

  constructor() {
  }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault();
    this.submitted = true;
    console.log(event);
  }

}
