import OrderItemModel from "../schema/OrderItem.model";
import OrderModel from "../schema/Order.model";
import { OrderItemInput } from "../libs/types/order";
import { Member } from "../libs/types/member";

class OrderService{
    private readonly orderModel;
    private readonly orderItemModel;

    constructor(){

        this.orderModel = OrderModel;
        this.orderItemModel = OrderItemModel;
    }

    public async createOrder(member: Member,
         input: OrderItemInput[]): Promise<Order>{

        }
}

export default OrderService;