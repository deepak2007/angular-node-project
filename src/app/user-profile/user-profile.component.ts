import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User = new User();
  userList: Array<User> = [];
  userId: any;
  userUrl = 'http://localhost:3000/users/details/';
  constructor(private _router: Router, private _userService: UserService, private _http: HttpClient, ) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('loginUserId');
    if (this.userId && this.userId.length > 0) {
      this._http.get<User>(`${this.userUrl}${this.userId}`).subscribe(result => {
        console.log('user profile result', result);
        this.user = result;
      }, error => {
        console.log(error);
      })
    }
  }

}
