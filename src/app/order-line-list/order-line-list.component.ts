import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderLineService } from '../order-line.service';
import { OrderLineData } from '../orderLine-data';
import { ProductService } from '../product.service';
import { ProductData } from '../productData';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-order-line-list',
  templateUrl: './order-line-list.component.html',
  styleUrls: ['./order-line-list.component.css']
})
export class OrderLineListComponent implements OnInit {

  orderLines: OrderLineData[] = [];
  // products: ProductData[] = [];
  // product: ProductData = null;
  // name: string = "";
  orderLineData: OrderLineData = new OrderLineData();

  constructor(private orderLineService: OrderLineService,
              private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
    this.orderLineService.getOrderLines().subscribe(receivedOrderLines => {
      this.orderLines = receivedOrderLines;
    });
  }

  delete(id: number): void {
    this.orderLineService.deleteOrderLine(id).subscribe(messege => {
      this.ngOnInit();
      console.log(messege);

    });
  }

  addToCart(): void {
    // this.product = this.productService.getProduct(product_id)
      this.orderLineService.createOrderLine(new OrderLineData()).subscribe(result => {
        console.log('Product added to cart');
        this.router.navigateByUrl('product-list');
      });
  }

  // updateOrderLine(id: number): void{
  //
  //   this.orderLineData = this.orderLineService.getOrderLineById(id);
  //   this.orderLineService.updateOrderLine(this.orderLineData).subscribe(result => {
  //     console.log(this.orderLineData);
  //     this.router.navigateByUrl('orderLine-list');
  //   }) }

}
