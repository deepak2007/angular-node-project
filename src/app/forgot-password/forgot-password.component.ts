import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  submitted: boolean = false;
  user: User = new User();
  userList: Array<User> = [];

  constructor(private _router: Router, private _userService: UserService) { }

  ngOnInit(): void { }
  forgotPasswordLink() {
    alert('Password Reset Link Sent to Email Address Successfully!!');
  }

}
