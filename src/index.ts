// const express = require('express'); // ex 5

// config
import dotenv from "dotenv";
dotenv.config();

// import
import express from "express"; // ex 6
import bodyParser from "body-parser";
import mongoose, {Schema, Types} from "mongoose"
import UserModel from "./models/user.model";
import CustomResponse from "./dtos/custom.response";
import ArticleModel from "./models/article.model";
import * as process from "process";
import jwt, {Secret} from "jsonwebtoken";
import {ObjectId} from "mongodb";
import * as SchemaTypes from "./types/SchemaTypes"
import UserRoutes from "./routes/user.routes";
import ArticleRoutes from "./routes/article.routes";
import cors from "cors";

// invoke
const app = express();

// @ts-ignore
app.use(bodyParser.json()); // bodyParser json vidihata use karai

app.use(cors({
    origin: "*"

}));


interface user {
    id: string;
    usernames: string;
    fName: string;
    lName: string;
    email: string;
    password: string;
}

// connect database
// mongoose.connect("mongodb://localhost/blog");
mongoose.connect(process.env.MONGO_URL as string);

// get connection
const db = mongoose.connection;

db.on('error', (error) => {
    console.log("DB Connection Error : ", error);
});

db.on('open', () => {
    console.log("DB Connected Successfully");
});


//-----------------------user-----------------------------------

// middleware
app.use('/user', UserRoutes);


//-----------------------article-----------------------------------

app.use('/article', ArticleRoutes);

// start the server
app.listen(8080, () => {
    console.log('Server start on port 8080');
});