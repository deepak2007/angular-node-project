import { Component, OnInit, ViewChild, ElementRef, ViewContainerRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalComponent } from '../modal/modal.component';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList: any;
  productUrl = 'http://localhost:3000/products/all';
  @ViewChild('modal', { static: false }) modal: ModalComponent;

  constructor(private _http: HttpClient, private modalService: ModalService,
    private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    this._http.get(this.productUrl).subscribe(result => {
      this.productList = result;
    }, error => {
      console.log(error);
    })
  }

  openModal(e: any, foodId: string, foodName: string, foodPrice: string, productDetails: any) {
    e.preventDefault();
    this.modalService.setRootViewContainerRef(this.viewContainerRef);
    this.modalService.addDynamicComponent(foodId, foodName, foodPrice, productDetails);
  }

}
