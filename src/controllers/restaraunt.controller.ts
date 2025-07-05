import  {Request, Response} from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service"
import { MemberInput,LoginInput } from "../libs/types/member";
import { MemberType } from "../libs/types/enums/member.enum";
// RES: send & json & render & redirect & end

const restarauntController:  T ={};
const memberService =  new MemberService();
restarauntController.goHome = (req: Request, res: Response) => {
    try{
        console.log("goHome");
        res.render("home");
    }catch(err) {
        console.log("Error, go home", err)
    }
};

restarauntController.getSignup = (req: Request, res: Response) => {
    try{
        console.log("getSignup");
          res.render("signup");
    }catch(err) {
        console.log("Error, get signup", err)
    }
};
    

restarauntController.getLogin = (req: Request, res: Response) => {
    try{
        console.log("getLogin");
           res.render("login");
    }catch(err) {
        console.log("Error, get login", err)
    }
};


restarauntController.processSignup = async (req: Request, res: Response) => {
    try{
        console.log("processSignup");
      

        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTARAUNT;

       const result = await memberService.processSignup(newMember);
    //    sessions authentication

       res.send("DONE")
    }catch(err) {
        console.log("Error, get processSignup", err);
        res.send(err)
    }
};


restarauntController.processLogin = async (req: Request, res: Response) => {
    try{
        console.log("processLogin");
        
        const input: LoginInput = req.body,
         result = await memberService.processLogin(input);

        res.send(result);
        // sessions authentication
       
    }catch(err) {
        console.log("Error, get processLogin", err);
        res.send(err);
    }
};



export default restarauntController;