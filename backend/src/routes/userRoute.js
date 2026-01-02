
import express from "express"
import { sendFeeds } from "../controllers/userController.js";


 const router = express.Router();



router.get('/feed', sendFeeds);
export default router