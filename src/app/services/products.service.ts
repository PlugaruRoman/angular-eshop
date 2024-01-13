import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getProducts() {
    return this.httpClient.get<Product[]>(`${environment.apiUrl}/products`);
  }

  getProductById(id: number) {
    return this.httpClient.get<Product>(`${environment.apiUrl}/products/${id}`);
  }

  addProduct(product: Product) {
    return this.httpClient
      .post<Product>(`${environment.apiUrl}/products`, product)
      .subscribe((data) => console.log(data));
  }

  deleteProduct(id: number) {
    return this.httpClient.delete(`${environment.apiUrl}/products/${id}`);
  }
}
