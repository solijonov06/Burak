import  {Request, Response} from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service"


const restarauntController:  T ={};
restarauntController.goHome = (req: Request, res: Response) => {
    try{
        console.log("goHome");
        res.send(" Home Page");
    }catch(err) {
        console.log("Error, go home", err)
    }
};

restarauntController.getLogin = (req: Request, res: Response) => {
    try{
        console.log("getLogin");
        res.send(" Login Page");
    }catch(err) {
        console.log("Error, get login", err)
    }
};

restarauntController.getSignup = (req: Request, res: Response) => {
    try{
        console.log("getSignup");
        res.send(" Signup Page");
    }catch(err) {
        console.log("Error, get signup", err)
    }
};

restarauntController.processLogin = (req: Request, res: Response) => {
    try{
        console.log("processLogin");
        res.send("DONE")
       
    }catch(err) {
        console.log("Error, get processLogin", err)
    }
};

restarauntController.processSignup = (req: Request, res: Response) => {
    try{
        console.log("processSignup");
        res.send("DONE")
       
    }catch(err) {
        console.log("Error, get processSignup", err)
    }
};


export default restarauntController;