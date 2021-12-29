import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Order } from '../models/order';

@Component({
    selector: "app-modal",
    templateUrl: "./modal.component.html",
    styleUrls: ["./modal.component.css"]
})
export class ModalComponent implements OnInit {
    @Input() foodId: string;
    @Input() foodName: string;
    @Input() foodPrice: string;
    @Input() productDetails: string;
    @Output() closeModal: EventEmitter<any> = new EventEmitter<any>();

    orderList: Order = new Order();
    orderUrl = 'http://localhost:3000/orders/add';

    constructor(private _http: HttpClient,
        private _router: Router) { }
    userId: any;
    ngOnInit() { }

    close(event: any) {
        this.closeModal.emit(event);
    }

    addToCart(foodId: any, foodName: any, foodPrice: any) {
        this.userId = localStorage.getItem('loginUserId');
        this.orderList.foodId = foodId;
        this.orderList.userId = this.userId;
        this.orderList.food = foodName;
        this.orderList.price = foodPrice;
        this._http.post(this.orderUrl, this.orderList).subscribe(result => {
            alert('Order Added in Cart Successfully.')
            this.close(event)
            this._router.navigate(['/order']);
        }, error => {
            console.log(error);
        })
    }

}
