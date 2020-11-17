import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartData } from '../cart-data';
import { OrderLineData } from '../orderLine-data';
import {OrderLineService} from '../order-line.service';
import {OrderService} from '../order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: CartData = null;

  constructor(private cartService: CartService,
              private orderLineService: OrderLineService,
              private orderService: OrderService) { }

  ngOnInit(): void {
    const id = 1;
    this.cartService.getCartByUser(id).subscribe(receivedCart => {
      this.cart = receivedCart;
    });
  }

  delete(id: number) {
    this.orderLineService.deleteOrderLine(id).subscribe(messege => {
      this.ngOnInit();
      console.log(messege);
    });
  }

  createOrder() {
    const userId = 1;
    this.orderService.createOrder(userId).subscribe(message => {
      console.log(message);
    });
  }

}
