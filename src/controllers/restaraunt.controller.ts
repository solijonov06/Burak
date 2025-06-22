import  {Request, Response} from "express";
import {T} from "../libs/types/common";


const restarauntController:  T ={};
restarauntController.goHome = (req: Request, res: Response) => {
    try{
        res.send(" Home Page");
    }catch(err) {
        console.log("Error, go home", err)
    }
};

restarauntController.getLogin = (req: Request, res: Response) => {
    try{
        res.send(" Login Page");
    }catch(err) {
        console.log("Error, get login", err)
    }
};

restarauntController.getSignup = (req: Request, res: Response) => {
    try{
        res.send(" Signup Page");
    }catch(err) {
        console.log("Error, get signup", err)
    }
};

export default restarauntController;