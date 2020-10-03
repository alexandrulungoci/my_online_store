import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderData } from './order-data';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  public getOrders(): Observable<OrderData[]> {
    return this.httpClient.get<OrderData[]>('http://localhost:8080/getOrders');
  }
}
