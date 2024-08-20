import asyncHandler from "express-async-handler";
import BLOG_SCHEMA from "../models/blogModel.js";

const addBlog = asyncHandler(async(req,res) => {
    let { title,description } = req.body;
    let newBlog = await BLOG_SCHEMA.create({title,description,
        createdBy:req.myUser._id}
    );
    res.status(201).json({ message:"new blog added", newBlog });
});

const fetchOne = asyncHandler(async(req,res) => {
    let findBlog = await BLOG_SCHEMA.findById(req.params.id);
    if(!findBlog){
        throw new Error("No such Blog exists");
    }
    res.status(200).json({message:"Blog fetched",findBlog});
});

const fetchAll = asyncHandler(async(req,res) => {
    let findAllBlogs = await BLOG_SCHEMA.find({createdBy:req.myUser._id});
    if(findAllBlogs.length === 0){
        throw new Error("No Blogs present");
    }
    res.status(200).json({ message:"all Blogs fetched",findAllBlogs });
});

const updateBlog = asyncHandler(async(req,res) => {
    let findBlog = await BLOG_SCHEMA.findById(req.params.id);
    if(!findBlog){
        throw new Error("No such Blog exists")
    }
    let updateBlog = await BLOG_SCHEMA.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(200).json({message:"Blog updated", updateBlog});
});

const deleteBlog = asyncHandler(async(req,res) => {
    let findBlog = await BLOG_SCHEMA.findById(req.params.id);
    if(!findBlog){
        throw new Error("No such Blog exists");
    }
    await BLOG_SCHEMA.findByIdAndDelete(req.params.id);
    res.status(200).json({ message:"Blog deleted" });
});

export { addBlog, fetchOne, fetchAll, updateBlog, deleteBlog };
