import express from "express"
import { loginUser, registerUser } from "../controllers/authController.js";


const router = express.Router();


//creation of user
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;