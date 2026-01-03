
import express from "express"
import { registerUser, sendFeeds } from "../controllers/userController.js";


 const router = express.Router();


 //creation of user
 router.post("/register", registerUser);

export default router;
