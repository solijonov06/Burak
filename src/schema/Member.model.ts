import mongoose, {Schema} from "mongoose";
import {MemberType,MemberStatus} from "../libs/types/enums/member.enum";

1//Schema first & Code first
const memberSchema = new Schema ({
    memberType: {
        type: String,
        enum: MemberType,
        default: MemberType.USER
    },

     memberStatus: {
        type: String,
        enum: MemberStatus,
        default: MemberStatus.ACTIVE
    },
    memberNick:{
        type:String,
        index: {unique:true, sparse:true},
        required: true,
    },

     memberPhone:{
        type:String,
        index: {unique:true, sparse:true},
        required: true,
    },

    memberPassword:{
        type:String,
        required: true,
        select: false,
    },

    memberAddress:{
        type:String,
    },

    memberDesc:{
         type:String
    },

    memberImage:{
        type:String,
    },

    memberPoints:{
        type:Number,
        default: 0,
    },
},
{timestamps: true} // {timestamps: true} adds createdAt and updatedAt fields automatically

)

export default mongoose.model("Member", memberSchema);