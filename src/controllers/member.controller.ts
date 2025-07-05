import  {Request, Response} from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service";
import { MemberInput, LoginInput } from "../libs/types/member";
import { Member } from "../libs/types/member";
import Errors from "../libs/error";

//REACT
const memberController:  T ={};
const memberService = new MemberService();

memberController.signup = async (req: Request, res: Response) => {
    try{
        console.log("processSignup");
        console.log("body:", req.body)

        const input:MemberInput = req.body,        
        result: Member = await memberService.signup(input);
        // tokens authentication

       res.json({ member: result});
    }catch(err) {
        console.log("Error, get signup", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else   res.status(Errors.standard.code).json(Errors.standard);
    }
};

memberController.login = async (req: Request, res: Response) => {
    try{
        console.log("login");
        console.log("body:", req.body);
        const input: LoginInput = req.body,
         result = await memberService.login(input);
        //  // tokens authentication

       res.json({ member: result});
       
    }catch(err) {
        console.log("Error, get login", err);
          if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};



export default memberController;