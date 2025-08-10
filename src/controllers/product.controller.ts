 import {T} from "../libs/types/common";
import  {Request, Response} from "express";
import Errors, { HttpCode, Message } from "../libs/error";
import ProductService from "../models/Product.service";
import { AdminRequest, ExtendedRequest } from "../libs/types/member";
import { Product, ProductInput, ProductInquiry } from "../libs/types/product";
import { ProductCollection } from "../schema/Product.model";

const productService = new ProductService()
const productController: T = {};

export default productController;
 /*SPA */
productController.getProducts = async (req: Request, res: Response) => {
    try{
        // console.log("req.member:",req.member)
        console.log("getProducts");
     const{page, limit, order, productCollectiopn, search}=req.query;
     const inquiry: ProductInquiry = {
        order: String(order),
        page: Number(page),
        limit: Number(limit),
     };
     if(productCollectiopn){ inquiry.productCollection = productCollectiopn as ProductCollection};

        if(search) inquiry.search = String(search);

        const result = await productService.getProducts(inquiry);

  res.status(HttpCode.OK).json(result);
    }catch(err) {
        console.log("Error, getProducts", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else   res.status(Errors.standard.code).json(Errors.standard);
    }
};

productController.getProduct = async (req: ExtendedRequest, res: Response) => {
    try{
        console.log("getProduct");
        console.log("req.member:", req.member);
        const {id} = req.params;
        const memberId = req.member?._id ?? null,
         result = await productService.getProduct(memberId, id);

  res.status(HttpCode.OK).json(result);
    }catch(err) {
        console.log("Error, getProducts", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else   res.status(Errors.standard.code).json(Errors.standard);
    }
};



    /*BSSR */
productController.getAllProducts = async (req: Request, res: Response) => {
    try{
        // console.log("req.member:",req.member)
        console.log("getAllProducts");
        const data = await productService.getAllProducts();
        console.log("data:", data);
        res.render("products",{products: data})
  
    }catch(err) {
        console.log("Error, getAllProducts", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else   res.status(Errors.standard.code).json(Errors.standard);
    }
};

productController.createNewProduct = async (req: AdminRequest, res: Response) => {
    try{
        console.log("createNewProduct");
        console.log("req.files:", req.files);
        console.log("req.body:", req.body);

        if(!req.files?.length)
            throw new Errors(HttpCode.INTERNAL_SERVER_ERROR, Message.CREATE_FAILED);

        const data: ProductInput = req.body;
        data.productImages = req.files?.map(ele=> {
            return ele.path.replace(/\\/g, "/"); // Windows compatibility
        })

        await productService.createNewProduct(data);



        res.send(`<script>alert("Succesful creation"); window.location.replace("/admin/product/all")</script>`);
    }catch(err) {
        console.log("Error, createNewProduct", err);
       const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(`<script>alert("${message}"); window.location.replace("/admin/product/all")</script>`);
    }
};

productController.updateChosenProduct = async (req: Request, res: Response) => {
    try{
console.log("updateChosenProduct");
const id = req.params.id;
const result = await productService.updateChosenProduct(id, req.body);
res.send(HttpCode.OK).json({data: result});
  
    }catch(err) {
        console.log("Error, updateChosenProduct", err);
        if(err instanceof Errors) res.status(err.code).json(err);
       
    }
};