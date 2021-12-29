import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from '../models/address';

@Component({
  selector: 'app-user-address-details',
  templateUrl: './user-address-details.component.html',
  styleUrls: ['./user-address-details.component.css']
})
export class UserAddressDetailsComponent implements OnInit {

  addressList: any;
  id: any;
  userId: any;
  address: Address = new Address();
  addressData: Array<Address> = [];
  addressUrl = 'http://localhost:3000/address/';
  constructor(private _route: ActivatedRoute,
    private _http: HttpClient,
    private _router: Router) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('loginUserId');
    this.id = this._route.snapshot.paramMap.get('id');
    this._http.get(this.addressUrl + '/all').subscribe(result => {
      this.addressList = result;
      for (let orderData of this.addressList) {
        if (orderData.userId == this.userId) {
          this.addressData.push(orderData)
        }
      }      
    }, error => {
      console.log(error);
    })
  }

  deleteAddress(addressId : number) {
    this._http.delete(`${this.addressUrl}delete/${addressId}`).subscribe(result => {
      alert('Address Deleted Successfully.')
      this._router.navigate(['/user-address']);
    }, error => {
      console.log(error);
    })
  }

}
