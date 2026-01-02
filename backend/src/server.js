import express from "express"
import "dotenv/config"
const app = express();

const PORT = process.env.PORT

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))




app.listen(PORT, ()=>{
    console.log("Server is listening at PORT ",PORT)
})
