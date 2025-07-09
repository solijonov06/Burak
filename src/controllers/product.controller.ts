import {T} from "../libs/types/common";
import  {Request, Response} from "express";
import Errors from "../libs/error";
import ProductService from "../models/Product.service";
const productController: T = {};

export default productController;

const productService = new ProductService()

productController.getAllProducts = async (req: Request, res: Response) => {
    try{
        console.log("getAllProducts");
        res.render("products")
  
    }catch(err) {
        console.log("Error, getAllProducts", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else   res.status(Errors.standard.code).json(Errors.standard);
    }
};

productController.createNewProduct = async (req: Request, res: Response) => {
    try{
        console.log("createNewProduct");
  
    }catch(err) {
        console.log("Error, createNewProduct", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else   res.status(Errors.standard.code).json(Errors.standard);
    }
};

productController.updateChosenProduct = async (req: Request, res: Response) => {
    try{
        console.log("updateChosenProduct");
  
    }catch(err) {
        console.log("Error, updateChosenProduct", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else   res.status(Errors.standard.code).json(Errors.standard);
    }
};