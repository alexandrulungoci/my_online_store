import { Component, OnInit } from '@angular/core';
import {OrderLineData} from '../orderLine-data';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderLineService} from '../order-line.service';

@Component({
  selector: 'app-order-line-edit',
  templateUrl: './order-line-edit.component.html',
  styleUrls: ['./order-line-edit.component.css']
})
export class OrderLineEditComponent implements OnInit {

  orderLineData: OrderLineData = new OrderLineData();

  constructor(private activatedRoutes: ActivatedRoute, private orderLineService: OrderLineService,
              private route: Router) { }

  ngOnInit(): void {
    let id = this.activatedRoutes.snapshot.paramMap.get('id');
    console.log('id: ' + id);
    this.orderLineService.getOrderLineById(Number(id)).subscribe(orderLineResult => {
      this.orderLineData = orderLineResult;
    });
  }

  editQuantity(): void {
    this.orderLineService.updateOrderLine(this.orderLineData).subscribe(result => {
      console.log(this.orderLineData);
      this.route.navigateByUrl('/cart');
    });
  }

}
