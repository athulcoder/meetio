import express from "express"
import { authMiddlware } from "../middleware/authMiddleware.js";


const router = express.Router();


router.get('/', authMiddlware, (req, res) => {
    res.json({ message: "YOu can access this feeds " })
})

export default router