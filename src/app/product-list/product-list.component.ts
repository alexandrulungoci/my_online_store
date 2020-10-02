import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderLineService } from '../order-line.service';
import { OrderLineData } from '../orderLine-data';
import { ProductData } from '../product-data'
import { ProductService } from '../product.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: ProductData[] = [];
  
  product: ProductData = null;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {this.productService.getProducts().subscribe(receivedProducts => {
  this.products = receivedProducts;
    });
  }


}
