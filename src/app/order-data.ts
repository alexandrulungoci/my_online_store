import { OrderStatusData } from "./orderStatus-data";
import { OrderLineData } from './orderLine-data'

export class OrderData{
    id: number;
    totalCost: number;
    // deliveryAddress: UserAddress;
    // userAddress: UserAddress;
    // userAccount: UserAccount;
    orderDate: Date;
    orderLines: OrderLineData[];
    orderStatus: OrderStatusData;
}