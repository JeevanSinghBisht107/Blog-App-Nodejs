import asyncHandler from "express-async-handler";
import USER_SCHEMA from "../models/userModels.js";
import generateToken from "../utils/token.js";

const registerUser = asyncHandler(async(req,res) =>{
    let { email } = req.body;
    let findUser = await USER_SCHEMA.findOne({ email });
    if(findUser){
        throw new Error("Email already exists...");
    }
    let newUser = await USER_SCHEMA.create(req.body);
    res.status(201).json({ success:true, message:"user registered", newUser })
});

const loginUser = asyncHandler(async(req,res) => {
    let { email,password } = req.body;
    let findUser = await USER_SCHEMA.findOne({email});
    if(!findUser){
        throw new Error("No such Email found");
    }
    let isMatch = await findUser.matchPassword(password);
    if(!isMatch){
        throw new Error("Password didn't match")
    }
    let token = generateToken(findUser._id);
    res.cookie("myCookie",token,{
        httpOnly:true
    });
    res.status(200).json({ message:"User logged in Successfully" });
});

const logoutUser = asyncHandler(async(req,res) => {
    res.clearCookie("myCookie", "",{ expiresIn:0 });
    res.status(200).json({ message:"User logged out successfully" });
});

export { registerUser, loginUser, logoutUser };