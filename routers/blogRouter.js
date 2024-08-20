import { Router } from "express";
import { addBlog, deleteBlog, fetchAll, fetchOne, updateBlog } from "../controllers/blogController.js";
import { authenticate, authorise } from "../middlewares/auth.js";

const router = Router();

router.post("/add",authenticate,addBlog);
router.get("/one/:id",fetchOne);
router.get("/all",authenticate,fetchAll);
router.patch("/update/:id",authenticate,updateBlog);
router.delete("/delete/:id",authenticate,authorise,deleteBlog);

export default router;