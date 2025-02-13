import { Router } from "express";
import { loginUser, logoutUser, registerUser } from "../controllers/userController.js";

const router = Router();

router.post("/register",registerUser);
router.post("/login",loginUser);
router.get("/logout",logoutUser);

export default router;