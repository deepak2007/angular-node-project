import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../models/order';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-food-order',
  templateUrl: './food-order.component.html',
  styleUrls: ['./food-order.component.css']
})
export class FoodOrderComponent implements OnInit {
  order: Order = new Order();
  orderList: Array<Order> = [];
  userId: any;
  orderDetails: any;
  orderDetailsData: Array<Order> = [];
  orderUrl = 'http://localhost:3000/orders';

  constructor(private _router: Router, private _http: HttpClient, ) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('loginUserId');
    this.fetchOrder();
  }

  cancelOrder(orderId: number) {
    this._http.delete(`${this.orderUrl}/delete/${orderId}`).subscribe(result => {
      alert('Order Cancelled Successfully.')
      //this.fetchOrder();
      this._router.navigate(['/products']);
    }, error => {
      console.log(error);
    })
  }

  fetchOrder() {
    if (this.userId && this.userId.length > 0) {
      this._http.get<Order>(`${this.orderUrl}/all`).subscribe(result => {
        this.order = result;
        this.orderDetails = result;
        for (let orderData of this.orderDetails) {
          if (orderData.userId == this.userId) {
            this.orderDetailsData.push(orderData)
          }
        }
      }, error => {
        console.log(error);
      })
    }
  }

}
