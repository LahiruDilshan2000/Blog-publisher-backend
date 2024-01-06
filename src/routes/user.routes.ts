import express from "express";
import UserModel from "../models/user.model";
import CustomResponse from "../dtos/custom.response";
import * as SchemaTypes from "../types/SchemaTypes";
import jwt, {Secret} from "jsonwebtoken";
import process from "process";
import * as UserController from "../controllers/user.controller"

const router = express.Router();

// routs  or (endpoint)

/*
get all user rout
*/

router.get('/all', UserController.getAllUser);

/*
create new user route
*/

router.post('/', UserController.createNewUser);

/*
user auth
*/

router.post('/auth', UserController.authUser);

export default router;