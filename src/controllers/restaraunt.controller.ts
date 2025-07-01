import  {Request, Response} from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service"
import { MemberInput,LoginInput } from "../libs/types/member";
import { MemberType } from "../libs/types/enums/member.enum";


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

restarauntController.processLogin = async (req: Request, res: Response) => {
    try{
        console.log("processLogin");
        console.log("body:", req.body);
        const input: LoginInput = req.body;

        const memberService =  new MemberService();
        const result = await memberService.processLogin(input);

        res.send(result);
       
    }catch(err) {
        console.log("Error, get processLogin", err);
        res.send(err);
    }
};

restarauntController.processSignup = async (req: Request, res: Response) => {
    try{
        console.log("processSignup");
        console.log("body:", req.body)

        const newMember:MemberInput = req.body;
        newMember.memberType = MemberType.RESTARAUNT;
       const memberService = new MemberService();
       await memberService.processSignup(newMember);

       res.send("DONE")
    }catch(err) {
        console.log("Error, get processSignup", err);
        res.send(err)
    }
};


export default restarauntController;