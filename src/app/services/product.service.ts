import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable()
export class ProductService {

  constructor(private _http: HttpClient) { }

  getWelcomeMessage(): string {
    return "Manage Product";
  }

  getRandomImage() {
    var randomImage = new Array();
    randomImage[0] = "https://b.zmtcdn.com/data/pictures/9/18535029/cd9c7ae52504e44382cfa0ab2d2b16f6.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A";
    randomImage[1] = "https://b.zmtcdn.com/data/pictures/8/18567908/dff65b2537f5002ef55ed617d7690fac.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A";
    randomImage[2] = "https://b.zmtcdn.com/data/pictures/1/65071/8f400e88ccdd58c4c0f08f89c91cb87d.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A";
    randomImage[3] = "https://b.zmtcdn.com/data/res_imagery/71799_RESTAURANT_1422bd9c0916341e29b9df6cf03b213d.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A";
    randomImage[4] = "https://b.zmtcdn.com/data/pictures/1/70821/7d61b243f02856be8f1a3835084850de.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A";
    for (let i = 0; i < 5; i++) {
      var number = Math.floor(Math.random() * randomImage.length);
      let randomImageData = randomImage[number]
      return randomImageData;
    }
  }

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(`http://localhost:3000/products/all`);
  }

  getProductById(id: number): Observable<Product> {
    return this._http.get<Product>(`http://localhost:3000/products/details/${id}`);
  }

  addProduct(product: Product): Observable<Product> {
    return this._http.post<Product>(`http://localhost:3000/products/add`, product);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this._http.put<Product>(`http://localhost:3000/products/update/${id}`, product)
  }

  deleteProduct(id: number): Observable<Product> {
    return this._http.delete<Product>(`http://localhost:3000/products/delete/${id}`);
  }
}
