import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service'

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  id: any;
  product: Product = new Product();
  productUrl = 'http://localhost:3000/products/';
  submitted: boolean = false;
  constructor(private _route: ActivatedRoute, private productService: ProductService,
    private _http: HttpClient,
    private _router: Router) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    if (this.id && this.id.length > 0) {
      this._http.get<Product>(`${this.productUrl}details/${this.id}`).subscribe(result => {
        this.product = result;
      }, error => {
        console.log(error);
      })
    } else {
      this._router.navigate(['/product-add']);
    }
  }

  updateProduct() {
    if (this.id && this.id.length > 0) {
      this.product.feature_image = this.productService.getRandomImage();
      this._http.put(`${this.productUrl}update/${this.id}`, this.product).subscribe(result => {
        alert('Product Updated Successfully');
        this._router.navigate(['/products']);
      }, error => {
        console.log(error);
      })
    }
  }

}
