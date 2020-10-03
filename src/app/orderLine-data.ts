import { ProductData } from './product-data'

export class OrderLineData{
    id: number;
    productDto: ProductData;
    quantity: number;
    price: number;
}