import Errors, { HttpCode } from "../libs/error";
import ProductModel, { ProductStatus } from "../schema/Product.model";
import { Message } from "../libs/error";
import { Product, ProductInput, ProductInquiry, ProductUpdateInput } from "../libs/types/product";
import { shapeIntoMongooseObjectId } from "../libs/utils/config";
import { T } from "../libs/types/common";
import {ObjectId} from "mongoose";
import ViewService from "./View.service";
import { ViewInput } from "../libs/types/view";
import { ViewGroup } from "../libs/enums/view.enum";

class ProductService{
    private readonly productModel;
    public viewService;

        constructor(){
            this.productModel = ProductModel;
            this.viewService = new ViewService();
        }

    /*SPA */

    public async getProducts(inquiry: ProductInquiry): Promise<Product[]>{
       const match: T ={productStatus: ProductStatus.PROCESS};

       if(inquiry.productCollection) 
        match.productCollection = inquiry.productCollection;

         if(inquiry.search)
             {match.productName = {$regex: new RegExp(inquiry.search, "i")}}

       const sort: T =
       inquiry.order ==="productPrice"
       ?{[inquiry.order]:1}
       :{[inquiry.order]:-1};

       const result = await this.productModel.aggregate([
            {$match: match},
            {$sort: sort},
            {$skip: (inquiry.page*1 - 1) * inquiry.limit},
            {$limit: inquiry.limit*1},
       ]).exec();
       if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_IS_FOUND);

       

        return result;
    }

public async getProduct (
    memberId: ObjectId | null,
    id: String
): Promise<Product>{
    const productId = shapeIntoMongooseObjectId(id);

    let result = await this.productModel
    .findOne({
        _id: productId,
        productStatus: ProductStatus.PROCESS,
    })
    .exec();
    if(!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_IS_FOUND)

    if(memberId){
        //checkexistense
        const input: ViewInput = {
            memberId: memberId,
            viewRefId: productId,
            viewGroup: ViewGroup.PRODUCT,
        }
        const existView = await this.viewService.checkViewExistence(input);
        //insert view 
        console.log("existView",!!existView );
        if(!existView){
            console.log("planning to insert new view");
            await this.viewService.insertMemberView(input);

            //Increase counts
            result = await this.productModel
            .findByIdAndUpdate(
                productId,
                {$inc: {productViews: +1}},
                {new: true}
            )
            .exec();
        }
    }

   return result;     
}

    /*BSSR */
public async getAllProducts(
      ): Promise<Product[]>{
    const result  = await this.productModel.find().exec();
        if(!result) 
            throw new Error(`${HttpCode.NOT_FOUND}: ${Message.NO_DATA_IS_FOUND}`);
        
        return result;
    }

    public async createNewProduct(input: ProductInput): Promise<Product>{
        try{
            return await this.productModel.create(input);
        }catch(err){
            console.error("Error creating new product:", err);
            throw new Error(`${HttpCode.BAD_REQUEST}: ${Message.CREATE_FAILED}`);
        }
    }
    public async updateChosenProduct(
        id: string,
        input: ProductUpdateInput): Promise<Product>{
    //    string to objectid
    id = shapeIntoMongooseObjectId(id);
    const result  = await this.productModel.findByIdAndUpdate(
    {_id: id},
    input, {new: true}).exec();
        if(!result) 
            throw new Error(`${HttpCode.NOT_MODIFIED}: ${Message.UPDATE_FAILED}`);
        
        return result;
    }
    
}
export default ProductService;