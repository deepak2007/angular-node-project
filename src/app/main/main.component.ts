import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private _authService: AuthService,
    private _router: Router) { }

  ngOnInit(): void {
    this.checkLoginStatus();
  }

  checkLoginStatus() {
    if (this._authService.isLoggedIn())
      return true;
    return false;
  }

  logout() {
    this._authService.logout();
    this._router.navigate(['/login']);
  }

}
