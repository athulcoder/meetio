import express from "express"
import "dotenv/config"
import userRoute from "./routes/userRoute.js";
import { connectDB } from "./config/db.js";
const app = express();

const PORT = process.env.PORT

connectDB()
//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/user",userRoute)



app.listen(PORT, ()=>{
    console.log("Server is listening at PORT ",PORT)
})
