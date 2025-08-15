import OrderItemModel from "../schema/OrderItem.model";
import OrderModel from "../schema/Order.model";
import { Order, OrderInquiry, OrderItemInput, OrderUpdateInput } from "../libs/types/order";
import { Member } from "../libs/types/member";
import { shapeIntoMongooseObjectId } from "../libs/utils/config";
import Errors from "../libs/error";
import { HttpCode } from "../libs/error";
import { Message } from "../libs/error";
import {ObjectId} from "mongoose";
import MemberService from "./Member.service";

class OrderService{
    private readonly memberService;
    private readonly orderModel;
    private readonly orderItemModel;

    constructor(){
        this.memberService = new MemberService;
        this.orderModel = OrderModel;
        this.orderItemModel = OrderItemModel;
    }

    public async createOrder(member: Member,
input: OrderItemInput[]): Promise<Order>{
console.log("input", input);
const memberId = shapeIntoMongooseObjectId(member._id);
const amount = input.reduce((accumulator: number, item:OrderItemInput) => {
return accumulator + item.itemPrice * item.itemQuantity;
}, 0);
const delivery = amount < 100 ? 5 : 0 ;
console.log("values:", amount, delivery);

try{
const newOrder: Order = await this.orderModel.create({
orderTotal: amount + delivery,
orderDelivery: delivery,
memberId: memberId,
});
console.log("orderId:", member._id);
//TODO;  create order items
const orderId = newOrder._id;
console.log("orderId:", orderId);
await this.recordOrderItem(orderId, input);

;

return newOrder;

}catch(err){
console.log("Error, model:createOrder:", err);
throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);

  }
 }

 private async recordOrderItem(
orderId: ObjectId,
input: OrderItemInput[],
): Promise<void> {
const promisedList = input.map(async (item: OrderItemInput) => {
item.orderId = orderId;
item.productId = shapeIntoMongooseObjectId(item.productId);
await this.orderItemModel.create(item);
return "INSERTED";
});

console.log("promisedList:", promisedList);
const orderItemState = await Promise.all(promisedList);
console.log("orderItemState", orderItemState);
}

public async getMyOrders(
member: Member,
inquiry: OrderInquiry
): Promise<Order[]>{
const memberId = shapeIntoMongooseObjectId(member._id);
const matches = {memberId: memberId, orderStatus: inquiry.orderStatus};

const result = await this.orderModel
.aggregate([
{$match: matches},
{$sort: {updatedAt: -1}},
{$skip: (inquiry.page -1 ) * inquiry.limit},
{$limit: inquiry.limit},
{
$lookup: {
from: "orderItems",
localField: "_id",
foreignField:"orderId",
as: "orderItems"
}
},
{
$lookup: {
from: "products",
localField: "orderItems.productId",
foreignField:"_id",
as: "productData"
}
}
])
.exec();

if(!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_IS_FOUND);

return result

}
public async updateOrder(
member: Member,
input: OrderUpdateInput
): Promise<Order> {
const memberId = shapeIntoMongooseObjectId(member._id),
orderId = shapeIntoMongooseObjectId(input.orderId),
orderStatus = input.orderStatus;

const result = await this.orderModel
.findOneAndUpdate({
memberId: memberId,
_id: orderId,
},
{orderStatus: orderStatus},
{new: true}
)
.exec();

if(!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);

return result;

}



}
export default OrderService;