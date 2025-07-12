import { HttpCode } from "../libs/error";
import ProductModel from "../schema/Product.model";
import { Message } from "../libs/error";
import { Product, ProductInput, ProductUpdateInput } from "../libs/types/product";
import { shapeIntoMongooseObjectId } from "../libs/types/config";

class ProductService{
    productModel: any;
        constructor(){
            this.productModel = ProductModel;
        }

    /*SPA */
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