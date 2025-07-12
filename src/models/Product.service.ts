import { HttpCode } from "../libs/error";
import ProductModel from "../schema/Product.model";
import { Message } from "../libs/error";
import { Product, ProductInput } from "../libs/types/product";

class ProductService{
    productModel: any;
        constructor(){
            this.productModel = ProductModel;
        }

    /*SPA */
    /*BSSR */
    public async createNewProduct(input: ProductInput): Promise<Product>{
        try{
            return await this.productModel.create(input);
        }catch(err){
            console.error("Error creating new product:", err);
            throw new Error(`${HttpCode.BAD_REQUEST}: ${Message.CREATE_FAILED}`);
        }
    }
}
export default ProductService;