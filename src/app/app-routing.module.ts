import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { RegisterComponent } from './register/register.component';
import { ViewProductListComponent } from './view-product-list/view-product-list.component';
import {ProductDescriptionComponent} from './product-description/product-description.component';
import {AddProductAdminComponent}from './add-product-admin/add-product-admin.component';
import { UpdateProductAdminComponent } from './update-product-admin/update-product-admin.component';

import {CategoryComponent} from './category/category.component';
import { ProductListUserComponent } from './product-list-user/product-list-user.component';
import { OrderLineListComponent } from './order-line-list/order-line-list.component';
import { CategoriesComponent } from './categories/categories.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditUserAccountComponent } from './edit-user-account/edit-user-account.component';
import { ListProductsByCategoryComponent } from './list-products-by-category/list-products-by-category.component';
import { CartComponent } from './cart/cart.component';
import {OrderLineEditComponent} from './order-line-edit/order-line-edit.component';
import {UserOrdersComponent} from './user-orders/user-orders.component';


const routes: Routes = [
  {path: '', component: CategoryComponent},
  {path: 'view-productList', component: ViewProductListComponent},
  {path: 'view-profile/:id', component: ViewProfileComponent},
  {path: 'edit-user-accout/:id', component: EditUserAccountComponent},
  {path: 'product-description/:id', component: ProductDescriptionComponent},
  {path: 'add-product-admin', component: AddProductAdminComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'order-list', component: OrderListComponent},
  {path: 'update-product-admin/:id', component: UpdateProductAdminComponent},
  {path: 'categories', component: CategoryComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'categories/:id', component: CategoriesComponent},
  {path: 'productList-user', component : ProductListUserComponent},
  {path: 'orderLine-list', component: OrderLineListComponent},
  {path: 'view-products/:id', component: ListProductsByCategoryComponent},
  {path: 'cart', component: CartComponent},
  {path: 'cart/orderLine-edit/:id', component: OrderLineEditComponent},
  {path: 'user-orders', component: UserOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
