import { ProductData } from './productData';

export class OrderLineData{
    id: number;
    productDto: ProductData;
    quantity: number;
    productPrice: number;
    linePrice: number;
}
