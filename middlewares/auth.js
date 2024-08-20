import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import { JWT_SECRET } from "../config/index.js";
import USER_SCHEMA from "../models/userModels.js";

const authenticate = asyncHandler(async(req,res,next) => {
    let token = req.cookies?.myCookie;
    if(token){
        let decodeToken = jwt.verify(token,JWT_SECRET);
        let findUser = await USER_SCHEMA.findById(decodeToken.id);
        req.myUser = findUser;
        next();
    } else {
        throw new Error("User not logged in")
    }
});

const authorise = asyncHandler(async(req,res,next) => {
    if(req.myUser.role === "admin"){
        next();
    } else {
        throw new Error("Not authorised to perform this task");
    }
});

export { authenticate,authorise };