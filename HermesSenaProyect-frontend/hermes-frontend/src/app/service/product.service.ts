import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private getAllUrl = 'http://localhost:8080/product/all';
  private getById = "http://localhost:8080/product/name/{name}";
  private saveUrl = 'http://localhost:8080/product/create';
  private updateUrl = 'http://localhost:8080/product/update/{name}';
  private deleteUrl = 'http://localhost:8080/product/delete/{name}';

  constructor(private httpClient: HttpClient) { }

  getAllProducts():Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.getAllUrl);
  }

  getByIdProduct(name: string): Observable<Product> {
    return this.httpClient.get<Product>(this.getById.replace('{name}', name));
  }

  saveProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.saveUrl, product);
  }

  updateProduct(name: string, product: Product): Observable<Product> {
    return this.httpClient.put<Product>(this.updateUrl.replace('{name}', name), product);
  }

  deleteProduct(name: string): Observable<Product> {
    return this.httpClient.delete<Product>(this.deleteUrl.replace('{name}', name));
  }
}
