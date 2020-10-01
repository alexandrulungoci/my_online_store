import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { ProductData } from './product-data'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 

  constructor(private httpClient: HttpClient) { }

  public getProducts(): Observable<ProductData[]> {
    return this.httpClient.get<ProductData[]>('http://localhost:8080/getProducts');
  }

  public getProduct(id: number): Observable<ProductData>{
    return this.httpClient.get<ProductData>('http://localhost:8080/getProduct/'+ id);
  }
}
