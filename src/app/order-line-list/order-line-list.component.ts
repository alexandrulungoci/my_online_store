import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderLineService } from '../order-line.service';
import { OrderLineData } from '../orderLine-data'
import { ProductData } from '../product-data';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-order-line-list',
  templateUrl: './order-line-list.component.html',
  styleUrls: ['./order-line-list.component.css']
})
export class OrderLineListComponent implements OnInit {

  orderLines: OrderLineData[] = []
  products: ProductData[] = [];
  orderLineData: OrderLineData = new OrderLineData;

  constructor(private orderLineService: OrderLineService,
    private router: Router) { }

  ngOnInit(): void {
    this.orderLineService.getOrderLines().subscribe(receivedOrderLines => {
      this.orderLines = receivedOrderLines;
    })
  }

  delete(id: number) {
    this.orderLineService.deleteOrderLine(id).subscribe(messege => {
      this.ngOnInit();
      console.log(messege);

    });
  }
  
  addToCart(): void {
    // this.product = this.productService.getProduct(product_id)
      this.orderLineService.createOrderLine(this.orderLineData).subscribe(result => {
        console.log("Product added to cart");
        this.router.navigateByUrl("product-list");
      })
  }

}
