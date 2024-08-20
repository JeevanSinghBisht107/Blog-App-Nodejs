import express from "express";
import connectDB from "./config/database.js";
import { PORT } from "./config/index.js";
import error from "./middlewares/error.js";
import userRouter from "./routers/userRouter.js";
import blogRouter from "./routers/blogRouter.js"
import cookieParser from "cookie-parser";
import morgan from "morgan";

const app = express();

connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/users",userRouter);
app.use("/blogs",blogRouter);

app.use(error);

app.listen(PORT,(err) => {
    if(err) throw err;
    console.log(`Server running at Port ${PORT}`);
});
