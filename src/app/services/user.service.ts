import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private _http: HttpClient) { }
  userUrl = 'http://localhost:3000/users/all';

  getAllUsers(): Observable<User[]> {
    return this._http.get<User[]>(`${this.userUrl}`);
  }

}
