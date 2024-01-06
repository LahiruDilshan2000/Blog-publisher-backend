import  {ObjectId} from "mongodb";
import mongoose from "mongoose";

export interface IArticle extends mongoose.Document {
    title: string,
    description: string,
    publishDate: Date,
    user:ObjectId
}

export interface Iuser extends mongoose.Document{
    username: string;
    fname: string;
    lname: string;
    email: string;
    password: string;

}