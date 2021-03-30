import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderLineService } from '../order-line.service';
import { OrderLineData } from '../orderLine-data';
import { ProductData } from '../product-data';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: ProductData[] = [];
  orderLineData: OrderLineData = null;
  product: ProductData = null;

  constructor(private productService: ProductService,
              private orderLineService: OrderLineService) { }

  ngOnInit(): void {this.productService.getProducts().subscribe(receivedProducts => {
  this.products = receivedProducts;
    });
  }

  addToCart(): void {

      this.orderLineService.createOrderLine(this.orderLineData).subscribe(result => {
        console.log('Product added to cart');
        this.router.navigateByUrl('product-list');
      })
  }


}
