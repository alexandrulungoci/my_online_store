import { ProductData } from './product-data'

export class OrderLineData{
    id: number;
    product: ProductData;
    quantity: number;
    productPrice: number;
}