import { OrderLineData } from './orderLine-data';
import { UserAccountData } from './userAccountData';

export class CartData{
    id: number;
    orderLineDtoList: OrderLineData[];
    userAccountDto: UserAccountData;
    totalCost: number;

}
