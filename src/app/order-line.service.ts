import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderLineListComponent } from './order-line-list/order-line-list.component';
import { OrderLineData } from './orderLine-data';
import { ProductData } from './product-data';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class OrderLineService {

  constructor(private httpClient: HttpClient, 
              private productService: ProductService) { }

  public getOrderLines(): Observable<OrderLineData[]> {
    return this.httpClient.get<OrderLineData[]>('http://localhost:8080/getOrderLines');
  }

}
