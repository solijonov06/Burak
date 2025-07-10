import ProductModel from "../schema/Product.model";

class ProductService{
    productModel: any;
        constructor(){
            this.productModel = ProductModel;
        }
}
export default ProductService;