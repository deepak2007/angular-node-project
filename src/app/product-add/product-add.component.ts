import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service'

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  product: Product = new Product();
  productUrl = 'http://localhost:3000/products/add';
  submitted: boolean = false;

  constructor(private _http: HttpClient,
    private _router: Router, private productService: ProductService) { }

  ngOnInit(): void { }

  addProduct() {
    this.product.feature_image = this.productService.getRandomImage();
    this._http.post(this.productUrl, this.product).subscribe(result => {
      alert('Product Added Successfully.')
      this._router.navigate(['/products']);
    }, error => {
      console.log('error', error);
    })
  }

}
