import MemberModel from "../schema/Member.model";
import { MemberInput, Member } from "../libs/types/member";
import Errors, { HttpCode } from "../libs/error";
import { Message } from "../libs/error";
import { MemberType } from "../libs/types/enums/member.enum";

class MemberService{
    private readonly memberModel;
    constructor(){
        this.memberModel = MemberModel;
    }
    public async processSignup(input: MemberInput): Promise<Member>{
        const exist = await this.memberModel.findOne({memberType: MemberType.RESTARAUNT})
        .exec();
        console.log("exist:", exist);
        if(exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
        try{
            const result = await this.memberModel.create(input);

        // const tempResult = new this.memberModel(input);
        // const result= await tempResult.save();

        result.memberPassword = "";
        return result;
        }catch(err){
            throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED)

        }
    }

    
}

export default MemberService;