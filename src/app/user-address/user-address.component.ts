import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Address } from '../models/address';

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.css']
})
export class UserAddressComponent implements OnInit {
  submitted: boolean = false;
  address: Address = new Address();
  addressUrl = 'http://localhost:3000/address/add';
  userId: any;
  constructor(private _http: HttpClient,
    private _router: Router) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('loginUserId');
  }
  addAddress() {
    this.address.userId = this.userId;
    this._http.post(this.addressUrl, this.address).subscribe(result => {
      alert('Address Added Successfully.')
      this._router.navigate(['/user-address-details']);
    }, error => {
      console.log(error);
    })
  }

}
