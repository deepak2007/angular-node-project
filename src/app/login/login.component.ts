import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted: boolean = false;
  user: User = new User();
  userList: Array<User> = [];
  loginUserId: any;
  constructor(private _router: Router, private _userService: UserService) { }

  ngOnInit(): void { }

  login() {
    if (this.user.email == undefined || this.user.password == undefined) {
      alert('Invalid Credentials');
      this.clearFieldValues();
    } else {
      this._userService.getAllUsers().subscribe(result => {
        //console.log('get all user result', result);
        this.userList = result;
        if (this.checkLogin()) {
          localStorage.setItem('isLoggedIn', 'true');
          this._router.navigate(['/products'])
        } else {
          alert('Invalid Credentials');
          //this.clearFieldValues();
        }
      }, error => {
        console.log(error);
      })
    }
  }

  checkLogin() {
    for (const user of this.userList) {
      if (user.email == this.user.email && user.password == this.user.password) {
        this.loginUserId = user._id;
        localStorage.setItem('loginUserId', this.loginUserId);
        return true;
      }
    }
    return false;
  }

  clearFieldValues() {
    this.user = new User();
  }

}
