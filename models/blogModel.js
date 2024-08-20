import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true
        },
        createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"users"
        }
    },
    {timestamps:true}
);

const BLOG_SCHEMA = mongoose.model("blogs",blogSchema);

export default BLOG_SCHEMA;