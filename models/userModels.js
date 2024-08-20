import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            unique:true,
            required:true
        },
        password:{
            type:String,
            required:true,
            minlength:6
        },
        role:{
            type:String,
            enum:["user","admin"],
            default:"user"
        }
    },
    {timestamps:true}

);

userSchema.pre("save",async function (){
        let salt = await bcrypt.genSalt(5);
        this.password = await bcrypt.hash(this.password,salt);
});


userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
};

const USER_SCHEMA = mongoose.model("users",userSchema);

export default USER_SCHEMA;