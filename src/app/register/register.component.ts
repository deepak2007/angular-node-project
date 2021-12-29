import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  submitted: boolean = false;
  user: User = new User();
  users: User[] = [];
  userUrl = 'http://localhost:3000/users/add';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void { }

  register() {
    if (Object.keys(this.user).length < 3) {
      console.log(this.user);
      alert('Invalid Credentials');
    } else {
      if (this.user.password !== this.user.confirmPassword) {
        alert("Password mismatch");
      } else {
        this.http.post(this.userUrl, this.user).subscribe(result => {
          console.log('register result', result);
          alert("You are registered successfully");
          localStorage.setItem("isLoggedIn", "true");
          this.router.navigate(['/products']);
        }, (error) => {
          console.log(error);
        })
      }
    }
  }

}
