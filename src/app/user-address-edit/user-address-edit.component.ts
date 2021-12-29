import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from '../models/address';

@Component({
  selector: 'app-user-address-edit',
  templateUrl: './user-address-edit.component.html',
  styleUrls: ['./user-address-edit.component.css']
})
export class UserAddressEditComponent implements OnInit {
  submitted: boolean = false;
  address: Address = new Address();
  addressUrl = 'http://localhost:3000/address';
  id: any;
  userId: any;
  constructor(private _http: HttpClient, private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this.userId = localStorage.getItem('loginUserId');
    if (this.id && this.id.length > 0) {
      this._http.get<Address>(`${this.addressUrl}/details/${this.id}`).subscribe(result => {
        this.address = result;
      }, error => {
        console.log(error);
      })
    } else {
      this._router.navigate(['/user-address-details']);
    }
  }

  updateAddress() {
    this.address.userId = this.userId;
    if (this.id && this.id.length > 0 && this.userId && this.userId.length > 0) {
      this._http.put(this.addressUrl + '/update/' + this.id, this.address).subscribe(result => {
        alert('Address Updated Successfully.')
        this._router.navigate(['/user-address-details']);
      }, error => {
        console.log(error);
      })
    }
  }

}
