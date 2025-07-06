import  {Request, Response} from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service"
import { MemberInput,LoginInput, AdminRequest } from "../libs/types/member";
import { MemberType } from "../libs/types/enums/member.enum";
import { Message } from "../libs/error";
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


restarauntController.processSignup = async (req: AdminRequest, res: Response) => {
    try{
        console.log("processSignup");
      

        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTARAUNT;

       const result = await memberService.processSignup(newMember);
    //    sessions authentication
       req.session.member = result; // sessionga saqlash
       req.session.save(function (){
       res.send(result)

    })

       
    }catch(err) {
        console.log("Error, get processSignup", err);
        res.send(err)
    }
};


restarauntController.processLogin = async (req: AdminRequest, res: Response) => {
    try{
        console.log("processLogin");
        
        const input: LoginInput = req.body,
         result = await memberService.processLogin(input);

     
        // sessions authentication
        req.session.member = result; // sessionga saqlash
        req.session.save(function (){
        res.send(result)

    })
       
    }catch(err) {
        console.log("Error, get processLogin", err);
        res.send(err);
    }
};


restarauntController.checkAuthSesssion= async (req: AdminRequest, res: Response) => {
    try{
        console.log("checkAuthSesssion");
        
       if(req.session?.member) res.send(`<script>alert("${req.session.member.memberNick}")</script>`);
         else res.send(`<script>alert("${Message.NOT_AUTHENTICATED}")</script>`);
       
    }catch(err) {
        console.log("Error, checkAuthSesssion", err);
        res.send(err);
    }
};


export default restarauntController;