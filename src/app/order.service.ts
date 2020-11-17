import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderData } from './order-data';
import { HttpClient} from '@angular/common/http';
import {any} from 'codelyzer/util/function';
import {ProductData} from './productData';



@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  public getOrders(): Observable<OrderData[]> {
    return this.httpClient.get<OrderData[]>('http://localhost:8080/getOrders');
  }

  public getOrdersByUser(userId: number): Observable<OrderData[]> {
    return this.httpClient.get<OrderData[]>('http://localhost:8080/getOrderByUserId/' + userId);
  }

  public addToCart( userId: number, productId: number): Observable<ProductData>{
    console.log('service');
    return this.httpClient.put<ProductData>('http://localhost:8080/addToCart/' + userId + '/' + productId, any());
  }

  public createOrder(userId: number): Observable<OrderData>{
    return this.httpClient.post<OrderData>('http://localhost:8080/addOrder/' + userId, any());
  }
}
