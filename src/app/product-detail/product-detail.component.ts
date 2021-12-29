import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  id: any;
  product: Product = new Product();
  productUrl = 'http://localhost:3000/products/';

  constructor(private _route: ActivatedRoute,
    private _http: HttpClient,
    private _router: Router) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    if (this.id && this.id.length > 0) {
      this._http.get<Product>(`${this.productUrl}details/${this.id}`).subscribe(result => {
        this.product = result;
        //console.log('this.product details', this.product);
      }, error => {
        console.log(error);
      })
    } else {
      this._router.navigate(['/product-add']);
    }
  }

  deleteProduct() {
    if (this.id && this.id.length > 0) {
      this._http.delete(`${this.productUrl}delete/${this.id}`).subscribe(result => {
        alert('Product Deleted Successfully');
        this._router.navigate(['/products']);
      }, error => {
        console.log(error);
      })
    } else {
      this._router.navigate(['/product-add']);
    }
  }

}
