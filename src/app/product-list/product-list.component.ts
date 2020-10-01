import { Component, OnInit } from '@angular/core';
import { ProductData } from '../product-data'
import { ProductService } from '../product.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: ProductData[] = []

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(receivedProducts => {
      this.products = receivedProducts;
    });
  }

}
