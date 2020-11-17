import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderData } from './order-data';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient: HttpClient) { }

  public getCartByUser(id: number): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/findByUserAccountModel_Id/' + id);
  }

}
