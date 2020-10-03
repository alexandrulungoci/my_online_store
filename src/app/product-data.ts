import { CategoryData } from './category-data'
import { ProductType } from './productType-data'

export class ProductData{
    id: number;
    title: string;
    thumbnail: string;
    categoryDto: CategoryData;
    price: number;
    productType: ProductType;
    
}