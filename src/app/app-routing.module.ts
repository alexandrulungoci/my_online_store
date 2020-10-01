import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderLineListComponent } from './order-line-list/order-line-list.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [
  {path:'product-list', component: ProductListComponent},
  {path:'orderLine-list', component: OrderLineListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
