import mongoose from "mongoose";
import * as SchemaTypes from "../types/SchemaTypes"

//defined schema
const userSchema = new mongoose.Schema<SchemaTypes.Iuser>({
    username: {type: String, required: true},
    fname: {type: String, required: true},
    lname: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
});

const UserModel = mongoose.model("user", userSchema);
export default UserModel;
/*import { Document, Schema, model } from "mongoose";

interface Iuser extends Document {
    username: string,
    fname: string,
    lname: string,
    email: string,
    password: string,
}

const userSchema = new Schema<Iuser>({
    username: { type: String, required: true },
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
})

const UserModel = model("User", userSchema);
export default UserModel;*/
