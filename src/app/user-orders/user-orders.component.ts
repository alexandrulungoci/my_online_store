import { Component, OnInit } from '@angular/core';
import {OrderService} from '../order.service';
import {OrderData} from '../order-data';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit {

  orders: OrderData[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    const userId = 1;
    this.orderService.getOrdersByUser(userId).subscribe(receivedOrders => {
      this.orders = receivedOrders;
    });
  }

}
