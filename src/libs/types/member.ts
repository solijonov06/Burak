import { Session } from "express-session";
import {MemberStatus, MemberType} from "../enums/member.enum";
import {ObjectId} from "mongoose";
import { Request } from "express";


export interface Member{
    _id: ObjectId;
    memberType: MemberType;
    memberStatus: MemberStatus;
    memberNick: string;
    memberPhone: string;
    memberPassword?: string;
    memberAddress?: string;
    memberDesc?: string;
    memberImage?: string;
    memberPoints?: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface MemberInput{
    memberType?: MemberType;
    memberStatus?: MemberStatus;
    memberNick: string;
    memberPhone: string;
    memberPassword: string;
    memberAddress?: string;
    memberDesc?: string;
    memberImage?: string;
    memberPoints?: number;
}

export interface LoginInput{
    memberNick: string;
    memberPassword: string;
}

export interface MemberUpdateInput{
    _id: ObjectId;
    memberStatus?: MemberStatus;
    memberNick?: string;
    memberPhone?: string;
    memberPassword?: string;
    memberAddress?: string;
    memberDesc?: string;
    memberImage?: string;
}


export interface ExtendedRequest extends Request{
    member: Member;
    files: Express.Multer.File[]; // For file uploads
    file: Express.Multer.File; // For single file uploads
}

export interface AdminRequest extends Request{
    member: Member;
    session: Session & {
    member: Member};
    files: Express.Multer.File[]; // For file uploads
    file: Express.Multer.File; // For single file uploads
}